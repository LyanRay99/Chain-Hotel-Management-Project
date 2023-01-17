import React from "react";

export const SupSlider = (props) => {
  return (
    <div className="supSlider">
      <div className="supSlider__background"></div>

      <div className="supSlider__title">{props.supSlider}</div>
    </div>
  );
};
