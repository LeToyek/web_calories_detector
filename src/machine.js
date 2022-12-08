import * as tmImage from '@teachablemachine/image';
import { dataDescription } from './repository/data';
// import "https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js";
// import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js";

const URL = "https://teachablemachine.withgoogle.com/models/0HU9VCews/";

let model, webcam, labelContainer,dataContainer,foodName, maxPredictions;

// Load the image model and setup the webcam
async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Convenience function to setup a webcam
  const flip = true; // whether to flip the webcam
  webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play();
  window.requestAnimationFrame(loop);

  // append elements to the DOM
  document.getElementById("webcam-container").appendChild(webcam.canvas);
  dataContainer =  document.getElementById("data-container")
  foodName = document.getElementById("food-name")
  
  var dataName = document.createElement("div")
  dataName.className = "name"
  var dataKalPorsi = document.createElement("div")
  dataKalPorsi.className = "kalPorsi"
  var dataKalGram = document.createElement("div")
  dataKalGram.className = "kalGram"
  var dataGramPorsi = document.createElement("div")
  dataGramPorsi.className = "gramPorsi"
  
  dataContainer.appendChild(dataName)
  dataContainer.appendChild(dataKalPorsi)
  dataContainer.appendChild(dataKalGram)
  dataContainer.appendChild(dataGramPorsi)

  

  // labelContainer = document.getElementById("label-container");
  // for (let i = 0; i < maxPredictions; i++) { // and class labels
  //     labelContainer.appendChild(document.createElement("div"));
  // }
}



async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(webcam.canvas);
  let indexMax = 0;
  let maxProbability = prediction[0].probability;
  for (let i = 0; i < maxPredictions; i++) {
    if (maxProbability < prediction[i].probability) {
      maxProbability = prediction[i].probability;
      indexMax = i;
    }
      const classPrediction =
          prediction[indexMax].className + ": " + prediction[indexMax].probability.toFixed(2);
      const dataLabel = dataDescription[indexMax]
      // labelContainer.childNodes[0].innerHTML = classPrediction;
      foodName.innerHTML = dataLabel.name

      dataContainer.childNodes[0].innerHTML = "Kalori/porsi : " + dataLabel.kal_porsi 
      dataContainer.childNodes[1].innerHTML = "Kalori/gram  : " + dataLabel.kal_gram
      dataContainer.childNodes[2].innerHTML = "berat makanan: " + dataLabel.gram_porsi
  }
}



export default init