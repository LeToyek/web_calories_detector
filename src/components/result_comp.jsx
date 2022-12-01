import React from "react";

function ResultComponent() {

  return (
    <div className="result_component">
      <h2>Makanan yang sama</h2>
      <div className="img-container">
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        necessitatibus neque accusamus voluptas fugiat velit molestiae! Ut culpa
        porro accusantium temporibus dolore eveniet veniam nesciunt at
        recusandae, deserunt illum ipsam!
      </p>
    </div>
  );
}
const getImage = ({source,alternate}) =>{
  return (
    <img src={source} alt={alternate} id="other-image"/>
  )
}

export default ResultComponent;
