//* Library
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import LazyLoad from "react-lazy-load";
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

const Home = () => {
  return (
    <>
      {/* Completed: Slider */}
      <Zoom triggerOnce={true}>
        <Slider />
      </Zoom>

      {/* Completed: Our Rooms */}
      <section className="section">
        <Slide direction="left" triggerOnce={true}>
          <OurRooms />
        </Slide>

        {/* Completed: About Us */}
        <Slide direction="right" triggerOnce={true}>
          <AboutUs />
        </Slide>
      </section>

      {/* Completed: Customer Comment */}
      <Zoom triggerOnce={true}>
        <CustomerCmt />
      </Zoom>

      {/* Completed: Our Events */}
      <section className="section">
        <Slide direction="left" triggerOnce={true}>
          <OurEvent />
        </Slide>

        {/* Completed: Our News */}
        {/* <LazyLoad> */}
        <Slide direction="right" triggerOnce={true}>
          <OurNews />
        </Slide>
        {/* </LazyLoad> */}
      </section>

      {/* Completed: React Toastify */}
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
};

export default Home;
