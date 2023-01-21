//* Library
import React from "react";
import { Slide } from "react-awesome-reveal";

//* Slider phụ của website
import { SupSlider } from "../../Components/headers/supSlider";

//* Navigation of News & Event page
import { Reservation } from "../../Components/body/booking/reservation";
import { NewsAndEventDeal } from "../../Components/body/new_event/navigation/newsEventDeal";
import { NewsAndEventCategories } from "../../Components/body/new_event/navigation/newsEventCategories";
import { NewsAndEventUpcoming } from "../../Components/body/new_event/navigation/newsEventUpcoming";
import { NewsAndEventRecent } from "../../Components/body/new_event/navigation/newsEventRecent";
import { NewsAndEventTagsSocial } from "../../Components/body/new_event/navigation/newsEventTags_socials";

//* Body of News & Event page
import { NewsAndEventContent } from "../../Components/body/new_event/details/newsEventContent";

const NewsAndEventDetails = () => {
  return (
    <>
      <SupSlider supSlider="NEW & EVENT" />

      <Slide triggerOnce={true}>
        <section className="section">
          <div className="newsEvent">
            {/* TODO: Navigation new&event */}
            <div className="newsEvent__navbar">
              <Reservation />
              <NewsAndEventDeal />
              <NewsAndEventCategories />
              <NewsAndEventUpcoming />
              <NewsAndEventRecent />
              <NewsAndEventTagsSocial />
            </div>
            {/* TODO: Detail content event */}
            <div className="newsEvent__detail">
              <NewsAndEventContent />
            </div>
          </div>
        </section>
      </Slide>
    </>
  );
};

export default NewsAndEventDetails;
