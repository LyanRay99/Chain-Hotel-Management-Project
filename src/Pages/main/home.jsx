import React from "react";
import { Slider } from "../../Components/headers/Slider";
import { OurRooms } from "../../Components/body/home/ourRooms";
import { AboutUs } from "../../Components/body/home/aboutUs";
import { CustomerCmt } from "../../Components/body/home/customerCmt";
import { OurEvent } from "../../Components/body/home/ourEvent";
import { OurNews } from "../../Components/body/home/ourNews";

export const Home = () => {
  return (
    <>
      <Slider />
      <div className="section">
        <OurRooms />
        <AboutUs />
      </div>
      <CustomerCmt />
      <div className="section">
        <OurEvent />
        <OurNews />
      </div>
    </>
  );
};
