import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { goTop } from "../../support/goTop";

export const OurNews = () => {
  const news = useSelector((state) => state.RS_newsEvent.newsEvent.news_recent);

  return (
    <div className="ourRooms" id="news">
      <h2 className="ourRooms__title">News</h2>

      <div className="news">
        {news.map((item, index) => {
          if (index < 3) {
            return (
              <div className="news__box" key={index}>
                <div className="news__box__time">
                  <span className="news__box__time__date">
                    {item.time.slice(14, 17)}
                  </span>
                  <span className="news__box__time__year">
                    <span>{item.time.slice(17, 26)}</span>
                    <span>{item.time.slice(25, 29)}</span>
                  </span>
                </div>

                <Link to={`new&event-details/blogs/${index}`} onClick={goTop}>
                  <p className="news__box__content">{item.name}</p>
                  <p className="news__box__readMore">Read More</p>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
