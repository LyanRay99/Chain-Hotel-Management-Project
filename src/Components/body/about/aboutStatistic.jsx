import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { animated } from "@react-spring/web";

export const AboutStatistic = () => {
  const aboutStatistic = useSelector(
    (state) => state.RS_aboutUs.aboutUs.aboutUs_Statistic
  );

  // const [count, setCount] = useState(0);

  // const counter = (minimum, maximum) => {
  //   for (let count = minimum; count <= maximum; count++) {
  //     setTimeout(() => {
  //       setCount(count);
  //     }, 1000);
  //   }
  // };

  // useEffect(() => {
  //   counter(count, 1000);
  // }, 3000);

  return (
    <div className="about__statistic">
      <div className="about__statistic__background"></div>
      <div className="about__statistic__container">
        <h2 className="about__statistic__container__title">HOTEL STATISTICS</h2>

        <div className="about__statistic__container__content">
          {aboutStatistic.map((item, index) => (
            <div className="box" key={index}>
              <p className="box__count">{item.count}</p>
              {/* <p className="box__count">{count}</p> */}
              <p className="box__content">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
