import React from "react";
import { useSelector } from "react-redux";

export const NewsAndEventComment = () => {
  const comment = useSelector(
    (state) => state.RS_newsEvent.newsEvent.news_recent[0].comment
  );

  return (
    <div className="details__comment">
      <h6 className="details__comment__title">COMMENTS ({comment.length})</h6>

      <div className="details__comment__container">
        {comment.map((item, index) => (
          <div className="details__comment__container__box" key={index}>
            <div className="box__image">
              <img
                src={require(`../../../../Assets/${item.avatar}`)}
                alt={item.name}
              ></img>
            </div>

            <div className="box__body">
              <p className="box__body__title">{item.title}</p>
              <p className="box__body__content">{item.content}</p>

              <div className="box__body__info">
                <div>
                  <span>{item.name} </span>-<span> {item.time}</span>
                </div>

                <button>Reply</button>
              </div>

              {/* TODO: Reply commemmt */}
              {item.reply.length !== 0 ? (
                item.reply.map((itemReply, index) => (
                  <div
                    className="details__comment__container__box replyComment"
                    key={index}
                  >
                    <div className="box__image">
                      <img
                        src={require(`../../../../Assets/${itemReply.avatar}`)}
                        alt={itemReply.name}
                      ></img>
                    </div>

                    <div className="box__body">
                      <p className="box__body__title">{itemReply.title}</p>
                      <p className="box__body__content">{itemReply.content}</p>

                      <div className="box__body__info">
                        <div>
                          <span>{itemReply.name} </span>-
                          <span> {itemReply.time}</span>
                        </div>

                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <span></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
