import React from "react";
import supSliderBackground from "../../Assets/Slider/background-others-page.jpg";

export const SupSlider = (props) => {
  return (
    <div className="supSlider">
      <img src={supSliderBackground} alt={supSliderBackground}></img>

      <div className="supSlider__title">{props.supSlider}</div>
    </div>
  );
};
