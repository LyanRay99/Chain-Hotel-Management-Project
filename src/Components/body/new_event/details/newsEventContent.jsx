import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NewsAndEventComment } from "./newsEventComment";
import { ContactFeedback } from "../../contact/contactFeedback";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faShare, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NewsAndEventContent = (props) => {
  const params = useParams().id;

  const content = useSelector(
    (state) => state.RS_newsEvent.newsEvent.news_recent[params]
  );

  return (
    <div className="newsEvent__detail__content">
      <div className="content__imageMain">
        <img
          src={require(`../../../../Assets/${content.imageMain}`)}
          alt={content.name}
        ></img>
      </div>

      <div className="content__body">
        <div className="content__body__time">
          <p>{content.time.slice(13, 16)}</p>
          <p>{content.time.slice(16, 20).toUpperCase()}</p>
        </div>

        <div className="content__body__details">
          <h4 className="details__title">{content.name}</h4>

          <div className="details__info">
            <span>
              Posted by{" "}
              <span className="hoverItem author">{content.author}</span> -{" "}
            </span>
            <span>
              {content.tags.map((item, index) =>
                index + 1 === content.tags.length ? (
                  <span className="hoverItem" key={index}>
                    {item}{" "}
                  </span>
                ) : (
                  <React.Fragment key={index}>
                    <span className="hoverItem" key={index}>
                      {item}
                    </span>
                    <i>, </i>
                  </React.Fragment>
                )
              )}{" "}
              -{" "}
            </span>
            <span className="hoverItem">{content.comment.length} Comments</span>
          </div>

          <div className="details__text">
            {content.content.map((item, index) =>
              index === 2 && content.content.length > 4 ? (
                <React.Fragment key={index}>
                  <img
                    src={require(`../../../../Assets/${content.imageSup}`)}
                    alt={content.imageSup}
                  ></img>
                  <p>{item}</p>
                </React.Fragment>
              ) : (
                <p key={index}>{item}</p>
              )
            )}
          </div>

          <div className="details__social">
            <div className="details__social__tags">
              <span>
                <FontAwesomeIcon icon={faTags} className="icon" />
              </span>

              <p>
                Tags:{" "}
                <span>
                  {content.tags.map((item, index) =>
                    index + 1 === content.tags.length ? (
                      <span className="hoverItem" key={index}>
                        {item}
                      </span>
                    ) : (
                      <React.Fragment key={index}>
                        <span className="hoverItem">{item}</span>
                        <i> - </i>
                      </React.Fragment>
                    )
                  )}
                </span>
              </p>
            </div>

            <div className="details__social__share">
              <span>
                <FontAwesomeIcon icon={faShare} className="icon" />
              </span>
              <span>
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </span>
              <span>
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </span>
              <span>
                <FontAwesomeIcon icon={faPinterest} className="icon" />
              </span>
              <span>
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </span>
              <span>
                <FontAwesomeIcon icon={faGoogle} className="icon" />
              </span>
              <span>
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </span>
            </div>
          </div>

          {/* TODO: comment */}
          <NewsAndEventComment index={params} />
          {/* TODO: Leave a comment */}
          <ContactFeedback title="leave_a_Comment" index={params} />
        </div>
      </div>
    </div>
  );
};
