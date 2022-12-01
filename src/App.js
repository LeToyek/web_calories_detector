import { useEffect } from "react";
import Navbar from "./components/navbar";
import ResultComponent from "./components/result_comp";
import init from "./machine";

import "./style.scss";

function App() {
  // const [file, setFile] = useState()
  // useEffect(() => {
  //   newInit(file);
  // }, [file]);
  // const handleChange = (e) =>{
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]))
  // }
  useEffect(() => {
    init();
  }, [])
  

  return (
    <div className="App">
      <Navbar />
      <main>
        
        <h1 className="title">Calories Detector</h1>
        <p className="description">Deteksi Kalori dengan Menggunakan AI</p>
        <div id="webcam-container"></div>

        <div id="label-container"></div>
        <div id="data-container"></div>
        <ResultComponent />
      </main>

      
    </div>
  );
}
const DataLabel = ({data}) => {
  return (
    <div>
      <div>Nama: {data.name}</div>
      <div>Kalori/porsi : {data.kal_porsi}</div>
      <div>Kalori/gram  : {data.kal_gram}</div>
      <div>berat makanan: {data.gram_porsi}</div>
    </div>
    
  )
}

export default App;
