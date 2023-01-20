import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { goTop } from "../../../support/goTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faComment,
  faFolderBlank,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

export const NewsAndEventOverall = () => {
  const Blogs = useSelector(
    (state) => state.RS_newsEvent.newsEvent.news_recent
  );

  return (
    <React.Fragment>
      {Blogs.map((item, index) => (
        <div className="box" key={index}>
          <div className="box__image">
            <img
              src={require(`../../../../Assets/${item.imageMain}`)}
              alt="abc"
            ></img>
          </div>

          <div className="box__info">
            <Link
              to={`/new&event-details/blogs/${index}`}
              index={index}
              onClick={goTop}
            >
              <h2 className="box__info__title">{item.name}</h2>
            </Link>

            <div className="box__info__others">
              <span>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  {item.month} - {item.date} - {item.year}
                </span>
              </span>
              <span>
                <FontAwesomeIcon icon={faNewspaper} />
                <span>{item.author}</span>
              </span>
              <span>
                <FontAwesomeIcon icon={faFolderBlank} />
                <span>
                  {item.tags.map((tag, index) =>
                    index + 1 === item.tags.length ? (
                      <span className="hoverItem" key={index}>
                        {tag}
                      </span>
                    ) : (
                      <React.Fragment key={index}>
                        <span className="hoverItem" key={index}>
                          {tag}
                        </span>{" "}
                        ,
                      </React.Fragment>
                    )
                  )}
                </span>
              </span>
              <span>
                <FontAwesomeIcon icon={faComment} />
                <span>{item.comment.length} COMMENT</span>
              </span>
            </div>

            <p className="box__info__content">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <Link
            to={`/new&event-details/blogs/${index}`}
            index={index}
            onClick={goTop}
          >
            <button>READ MORE</button>
          </Link>
        </div>
      ))}
    </React.Fragment>
  );
};
