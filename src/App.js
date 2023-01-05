//* Library
import { BrowserRouter, Route, Routes } from "react-router-dom";

//* Style
import "./Sass/header/header.scss";
import "./Sass/pages/home.scss";
import "./Sass/pages/contact.scss";
import "./Sass/footer/footer.scss";
import "./Sass/others/others.scss";

//* Components
import { Navbars } from "./Components/headers/Navbar";
import { Home } from "./Pages/Home";
import { Rooms } from "./Pages/rooms";
import { Booking } from "./Pages/booking";
import { NewAndEvent } from "./Pages/new&event";
import { About } from "./Pages/about";
import { Contact } from "./Pages/contact";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbars />}>
            <Route index element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="bookings" element={<Booking />} />
            <Route path="new&event" element={<NewAndEvent />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
