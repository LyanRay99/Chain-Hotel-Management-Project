import React from "react";
import { useSelector } from "react-redux";

export const OurNews = () => {
  const news = useSelector((state) => state.RS_news.news);

  return (
    <div className="ourRooms">
      <h2 className="ourRooms__title">News</h2>

      <div className="news">
        {news.map((item, index) => (
          <div className="news__box" key={index}>
            <div className="news__box__time">
              <span className="news__box__time__date">{item.date}</span>
              <span className="news__box__time__year">
                <span>{item.month}</span>
                <span>{item.year}</span>
              </span>
            </div>

            <p className="news__box__content">{item.content}</p>
            <p className="news__box__readMore">Read More</p>
          </div>
        ))}
      </div>
    </div>
  );
};
