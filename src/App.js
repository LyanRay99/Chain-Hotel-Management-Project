//* Library
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//* Style
import "./Sass/header/header.scss";
import "./Sass/pages/home.scss";
import "./Sass/pages/rooms.scss";
import "./Sass/pages/booking.scss";
import "./Sass/pages/new&Event.scss";
import "./Sass/pages/contact.scss";
import "./Sass/pages/about.scss";
import "./Sass/footer/footer.scss";
import "./Sass/details/roomsDetails.scss";
import "./Sass/others/others.scss";
import "./Sass/others/otherInfo.scss";
import "./Sass/responsive/mobile.scss";
import "./Sass/responsive/tablet.scss";
import "./Sass/responsive/desktop.scss";

//* Main pages
import Navbars from "./Components/headers/Navbar";
import Home from "./Pages/main/home";
import Rooms from "./Pages/main/rooms";
import Booking from "./Pages/main/booking";
import NewsAndEvent from "./Pages/main/news&Event";
import About from "./Pages/main/about";
import Contact from "./Pages/main/contact";
import Term from "./Pages/otherInfo/term";
import Faqs from "./Pages/otherInfo/faqs";
import Careers from "./Pages/otherInfo/careers";

// const Navbars = React.lazy(() => import("./Components/headers/Navbar"));
// const Home = React.lazy(() => import("./Pages/main/home"));
// const Rooms = React.lazy(() => import("./Pages/main/rooms"));
// const Booking = React.lazy(() => import("./Pages/main/booking"));
// const NewsAndEvent = React.lazy(() => import("./Pages/main/news&Event"));
// const About = React.lazy(() => import("./Pages/main/about"));
// const Contact = React.lazy(() => import("./Pages/main/contact"));
// const Term = React.lazy(() => import("./Pages/otherInfo/term"));
// const Faqs = React.lazy(() => import("./Pages/otherInfo/faqs"));
// const Careers = React.lazy(() => import("./Pages/otherInfo/careers"));

//* Detail Page
import RoomsDetails from "./Pages/details/roomsDetails";
import NewsAndEventDetails from "./Pages/details/news&eventDetails";

// const RoomsDetails = React.lazy(() => import("./Pages/details/roomsDetails"));
// const NewsAndEventDetails = React.lazy(() =>
//   import("./Pages/details/news&eventDetails")
// );

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbars />}>
            {/* TODO: Main Pages */}
            <Route index element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="bookings" element={<Booking />} />
            <Route path="new&event" element={<NewsAndEvent />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="term" element={<Term />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="careers" element={<Careers />} />

            {/* TODO: Detal Pages */}
            <Route path="/rooms-details/:id" element={<RoomsDetails />} />
            <Route
              path="new&event-details/blogs/:id"
              element={<NewsAndEventDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
