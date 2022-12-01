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
        <ResultComponent />
      </main>

      
    </div>
  );
}

export default App;
