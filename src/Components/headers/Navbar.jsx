//* Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//* React + React-router
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* Component UI + Support
import { Footer } from "../footer/Footer";
import { goTop } from "../support/goTop";
import { BookingNow } from "../support/bookingNow";

//*Fontawasome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCloud, faPhone } from "@fortawesome/free-solid-svg-icons";

//* Image
import Logo from "../../Assets/Logo.png";

const Navbars = () => {
  //* Get date
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  //* Change color navbar when scroll over 35.6px
  const [colorChange, setColorchange] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 35.6) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  //* Custom style Toastify
  const notify = () =>
    toast.success(
      "Welcome to PANORAMA",
      {
        icon: "🚀",
      },
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );

  return (
    <React.Fragment>
      {/* Completed: Login, Register, language, ... */}
      <div className="header__topline">
        <div className="header__topline__container">
          <div className="header__topline__container__left">
            <span>
              <FontAwesomeIcon icon={faCloud} /> 18'C
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} />{" "}
              {`${day}/${month}/${year} - ${hour}:${minute}:${seconds}`}
            </span>
          </div>

          <div className="header__topline__container__right">
            {/* <span>LOGIN</span>
            <span>REGISTER</span> */}
            <span>VI</span>
            <span>EN</span>
          </div>
        </div>
      </div>

      {/* Completed: Navbar */}
      <Navbar
        expand="md"
        sticky="top"
        id={colorChange ? "colorChangeNavbar" : "navbarID"}
        onLoad={notify}
      >
        <Container fluid>
          <NavLink to="/" onClick={goTop}>
            <img className="logoHotel" src={Logo} alt="Panorama Hotel"></img>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive ? "activeClass" : "";

                  return `nav-link ${activeClass}`;
                }}
                end
                to="/"
                onClick={goTop}
              >
                HOME
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive ? "activeClass" : "";

                  return `nav-link ${activeClass}`;
                }}
                end
                to="/rooms"
                onClick={goTop}
              >
                ROOMS
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive ? "activeClass" : "";

                  return `nav-link ${activeClass}`;
                }}
                end
                to="/bookings"
                onClick={goTop}
              >
                BOOKING
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive ? "activeClass" : "";

                  return `nav-link ${activeClass}`;
                }}
                end
                to="/new&event"
                onClick={goTop}
              >
                NEW & EVENT
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive ? "activeClass" : "";

                  return `nav-link ${activeClass}`;
                }}
                end
                to="/about"
                onClick={goTop}
              >
                ABOUT
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive ? "activeClass" : "";

                  return `nav-link ${activeClass}`;
                }}
                end
                to="/contact"
                onClick={goTop}
              >
                CONTACT
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          <div className="navbarInfo">
            <span className="navbarInfo__phone">
              <FontAwesomeIcon icon={faPhone} /> (+84) 28. 38 12 17 19
            </span>
          </div>
        </Container>
      </Navbar>

      {/* Completed: Body */}
      <div className="bodyMain">
        <Outlet />
      </div>

      {/* Completed: Booking Now */}
      <BookingNow />

      {/* Completed: Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Navbars;
