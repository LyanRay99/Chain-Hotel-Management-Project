import React from "react";

export const AboutInfo = (props) => {
  return (
    <div className="about__info__description">
      <h2 className="about__info__description__title">
        {props.aboutInfo.title}
      </h2>
      <p className="about__info__description__content">
        {props.aboutInfo.content}
      </p>
    </div>
  );
};
