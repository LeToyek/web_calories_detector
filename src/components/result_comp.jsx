import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import React from "react";

function ResultComponent({foodName,data}) {
  return (
    <div className="result_component">
      <header>
        <ArrowBackRoundedIcon />
        <h2 id="food-name">{foodName}</h2>
      </header>
      <div className="bodyy">
        <img src="../assets/dessert/110.jpg" alt="asdasd" />
        <div id="data-container"></div>
        <button className="btnDone">Done</button>
      </div>
    </div>
  );
}
const getImage = ({ source, alternate }) => {
  return <img src={source} alt={alternate} id="other-image" />;
};

export default ResultComponent;
