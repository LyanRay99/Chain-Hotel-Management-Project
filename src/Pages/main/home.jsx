//* Library
import React from "react";
import LazyLoad from "react-lazy-load";
import {
  Fade,
  Bounce,
  Hinge,
  Flip,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

//* Components UI
import { Slider } from "../../Components/headers/Slider";
import { OurRooms } from "../../Components/body/home/ourRooms";
import { AboutUs } from "../../Components/body/home/aboutUs";
import { CustomerCmt } from "../../Components/body/home/customerCmt";
import { OurEvent } from "../../Components/body/home/ourEvent";
import { OurNews } from "../../Components/body/home/ourNews";

export const Home = () => {
  return (
    <>
      <Zoom triggerOnce={true}>
        <Slider />
        <span>test</span>
      </Zoom>
      <div className="section">
        <Slide direction="left" triggerOnce={true}>
          <OurRooms />
        </Slide>

        <Slide direction="right" triggerOnce={true}>
          <AboutUs />
        </Slide>
      </div>

      <Zoom triggerOnce={true}>
        <CustomerCmt />
      </Zoom>

      <div className="section">
        <Slide direction="left" triggerOnce={true}>
          <OurEvent />
        </Slide>

        <LazyLoad>
          <Slide direction="right" triggerOnce={true}>
            <OurNews />
          </Slide>
        </LazyLoad>
      </div>
    </>
  );
};
