//* Library
import React from "react";
import { Slide } from "react-awesome-reveal";

//* Components UI
import { SupSlider } from "../../Components/headers/supSlider";
import { NewsAndEventDeal } from "../../Components/body/new_event/navigation/newsEventDeal";
import { NewsAndEventCategories } from "../../Components/body/new_event/navigation/newsEventCategories";
import { NewsAndEventUpcoming } from "../../Components/body/new_event/navigation/newsEventUpcoming";
import { NewsAndEventRecent } from "../../Components/body/new_event/navigation/newsEventRecent";
import { NewsAndEventTagsSocial } from "../../Components/body/new_event/navigation/newsEventTags_socials";
import { NewsAndEventOverall } from "../../Components/body/new_event/Overall/news&EventOverall";

//* Title
import { Title_NewsAndEvents } from "../../Store/title";

const NewsAndEvent = () => {
  document.title = Title_NewsAndEvents;

  return (
    <>
      <SupSlider supSlider="NEWS & EVENTS" />

      <Slide triggerOnce={true}>
        <section className="section">
          <div className="newsEvent">
            {/* TODO: Navigation new&event */}
            <div className="newsEvent__navbar">
              <NewsAndEventDeal />
              <NewsAndEventCategories />
              <NewsAndEventUpcoming />
              <NewsAndEventRecent />
              <NewsAndEventTagsSocial />
            </div>
            {/* TODO: Detail content event */}
            <div className="newsEvent__detail">
              <NewsAndEventOverall />
            </div>
          </div>
        </section>
      </Slide>
    </>
  );
};

export default NewsAndEvent;
