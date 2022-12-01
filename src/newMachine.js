import * as tmImage from '@teachablemachine/image';

const URL = "https://teachablemachine.withgoogle.com/models/0HU9VCews/";

let model, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function newInit(source) {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  labelContainer = document.getElementById("label-container");
  labelContainer.appendChild(document.createElement("div"));

  predict(source)
}

// run the webcam image through the image model
async function predict(source) {
  // predict can take in an image, video or canvas html element
  const imageElement = document.createElement("img");
  imageElement.src = source;

  const prediction = await model.predict();
  let indexMax = 0;
  let maxProbability = prediction[0].probability;
  for (let i = 0; i < maxPredictions; i++) {
    if (maxProbability < prediction[i].probability) {
      maxProbability = prediction[i].probability;
      indexMax = i;
    }
      const classPrediction =
          prediction[indexMax].className + ": " + prediction[indexMax].probability.toFixed(2);
      labelContainer.childNodes[0].innerHTML = classPrediction;
  }
}
export default newInit