import React from "react";
import { useSelector } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const NewsAndEventUpcoming = () => {
  const upcomingEvent = useSelector(
    (state) => state.RS_newsEvent.newsEvent.news_home
  );

  const renderTooltip = (content) => (
    <Tooltip id="button-tooltip" {...content}>
      {content}
    </Tooltip>
  );

  return (
    <div className="newsEvent__navbar__upcoming">
      <p className="upcoming__title">UPCOMING EVENTS</p>

      <div className="upcoming__events">
        {upcomingEvent.map((item, index) => (
          <div className="upcoming__events__box" key={index}>
            <div className="box__time">
              <p>{item.date}</p>
              <p>{item.month.slice(0, 3)}</p>
            </div>

            <div className="box__detailTime">
              <OverlayTrigger
                placement="top"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip(item.content)}
              >
                <div>
                  <p alt="anc">{item.content}</p>
                </div>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip(item.time)}
              >
                <div>
                  <p>at {item.time}</p>
                </div>
              </OverlayTrigger>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
