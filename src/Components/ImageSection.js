import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        {/* <h4>
          <span style={{ fontWeight: "400" }}>Federico Benitez</span>
        </h4> */}
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          maiores! Debitis repellendus similique.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Idiomas:</p>
            <p>Localización:</p>
          </div>
          <div className="right-section">
            <p>Español, Inglés</p>
            <p>Resistencia, Chaco, Argentina</p>
          </div>
        </div>
        <button className="btn">Descargar CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
