import { useEffect } from "react";
import ResultComponent from "./components/result_comp";
import init from "./machine";

import "./style.scss";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <main>
        {/* <h1 className="title">Calories Detector</h1>
        <p className="description">Deteksi Kalori dengan Menggunakan AI</p> */}
        <div id="webcam-container"></div>
        <ResultComponent />
      </main>
    </div>
  );
}
const DataLabel = ({ data }) => {
  return (
    <div>
      <div>Nama: {data.name}</div>
      <div>Kalori/porsi : {data.kal_porsi}</div>
      <div>Kalori/gram : {data.kal_gram}</div>
      <div>berat makanan: {data.gram_porsi}</div>
    </div>
  );
};

export default App;
