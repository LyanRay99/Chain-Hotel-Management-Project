//* Library
import React from "react";
import { useDispatch } from "react-redux";
import { WELCOME_NOTIFY } from "../../Store/reducers/R_others";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";
import { Slide, Zoom } from "react-awesome-reveal";

//* Components UI
import { Slider } from "../../Components/headers/Slider";
import { OurRooms } from "../../Components/body/home/ourRooms";
import { AboutUs } from "../../Components/body/home/aboutUs";
import { CustomerCmt } from "../../Components/body/home/customerCmt";
import { OurEvent } from "../../Components/body/home/ourEvent";
import { OurNews } from "../../Components/body/home/ourNews";

//* Title
import { Title_Home } from "../../Store/title";

const Home = () => {
  document.title = Title_Home;

  const dispatch = useDispatch();

  const welcomeNotify = () => {
    dispatch(WELCOME_NOTIFY());
  };

  return (
    <>
      {/*  Completed: Tag này dùng để render ra toastify welcome khi tag này load xong */}
      <span onLoad={welcomeNotify()}></span>

      {/* Completed: Slider */}
      <Zoom triggerOnce={true}>
        <Slider />
      </Zoom>

      {/* Completed: Our Rooms */}
      <section className="section">
        <LazyLoad once={true}>
          <Slide direction="left" triggerOnce={true}>
            <OurRooms />
          </Slide>
        </LazyLoad>

        {/* Completed: About Us */}
        <Slide direction="right" triggerOnce={true}>
          <AboutUs />
        </Slide>
      </section>

      {/* Completed: Customer Comment */}
      <LazyLoad once={true}>
        <Zoom triggerOnce={true}>
          <CustomerCmt />
        </Zoom>
      </LazyLoad>

      {/* Completed: Our Events */}
      <section className="section">
        <Slide direction="left" triggerOnce={true}>
          <OurEvent />
        </Slide>

        {/* Completed: Our News */}
        <LazyLoad once={true}>
          <Slide direction="right" triggerOnce={true}>
            <OurNews />
          </Slide>
        </LazyLoad>
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
