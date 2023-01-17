//* Library
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

//* Main pages
import { Navbars } from "./Components/headers/Navbar";
import { Home } from "./Pages/main/home";
import { Rooms } from "./Pages/main/rooms";
import { Booking } from "./Pages/main/booking";
import { NewsAndEvent } from "./Pages/main/news&Event";
import { About } from "./Pages/main/about";
import { Contact } from "./Pages/main/contact";


//* Detail Page
import { RoomsDetails } from "./Pages/details/roomsDetails";
import { NewsAndEventDetails } from "./Pages/details/news&eventDetails";

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
