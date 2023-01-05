//* Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//* React-router
import { NavLink, Outlet } from "react-router-dom";

//* Component UI
import { Footer } from "../footer/Footer";

//*Fontawasome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//* Image
import Logo from "../../Assets/Logo.png";
import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Navbars = () => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <NavLink to="/">
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
              >
                CONTACT
              </NavLink>

              {/* <NavDropdown title="LANGUAGE" id="navbarScrollingDropdown">
                <NavDropdown.Item>English</NavDropdown.Item>
                <NavDropdown.Item>Vietnamese</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>

          <div className="navbarInfo">
            <span className="navbarInfo__phone">
              <FontAwesomeIcon icon={faPhone} />
              (+84) 28. 38 12 17 19
            </span>
          </div>
        </Container>
      </Navbar>

      <div style={{ marginTop: "55px" }}>
        <Outlet />
      </div>

      <Footer />
    </React.Fragment>
  );
};
