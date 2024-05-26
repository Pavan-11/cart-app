import React from "react";
import "../Slider/Slider.css";
import Slider1 from "../../Utilities/grocery1.jpg";
import Slider2 from "../../Utilities/grocery2.jpg";

const Slider = () => {
  return (
    <div id="SliderEffect" className="carousel slide carousel-fade container " data-bs-ride="carousel" data-bs-touch="true" data-bs-theme="dark">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#SliderEffect"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#SliderEffect"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Slider1} className="d-block w-100 rounded mb-5" alt="..." />
          <div className="carousel-caption  d-md-block">
            <h3 className="text-success"><strong>Get 50% Off</strong></h3>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Slider2} className="d-block w-100 rounded mb-5" alt="..." />
          <div className="carousel-caption  d-md-block">
            <h3 className="text-danger">First slide label</h3>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#SliderEffect"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#SliderEffect"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
