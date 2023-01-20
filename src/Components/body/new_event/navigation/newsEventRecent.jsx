import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { goTop } from "../../../support/goTop";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const NewsAndEventRecent = () => {
  const recentPosts = useSelector(
    (state) => state.RS_newsEvent.newsEvent.news_recent
  );

  const renderTooltip = (content) => (
    <Tooltip id="button-tooltip" {...content}>
      {content}
    </Tooltip>
  );

  return (
    <div className="newsEvent__navbar__recent">
      <p className="recent__title">RECENT POSTS</p>

      <div className="recent__container">
        {recentPosts.map((item, index) => {
          if (index < 3) {
            return (
              <Link
                to={`/new&event-details/blogs/${index}`}
                index={index}
                onClick={goTop}
                key={index}
              >
                <div className="recent__container__box">
                  <div className="box__image">
                    <img
                      src={require(`../../../../Assets/${item.image}`)}
                      alt={item.content}
                    ></img>
                  </div>

                  <div className="box__content">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 100, hide: 100 }}
                      overlay={renderTooltip(item.name)}
                    >
                      <p>{item.name}</p>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 100, hide: 100 }}
                      overlay={renderTooltip(item.time)}
                    >
                      <p>{item.time}</p>
                    </OverlayTrigger>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};
