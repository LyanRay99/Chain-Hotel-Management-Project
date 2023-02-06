//* Library
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import {
  GET_INFO_COMMENT,
  REPLY_COMMENT,
} from "../../../../Store/reducers/R_newsEvent";

//* React Boostrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const NewsAndEventComment = (props) => {
  const comment = useSelector(
    (state) => state.RS_newsEvent.newsEvent.news_recent[0].comment
  );

  const dispatch = useDispatch();

  //* State to show/hide Modal
  const modalReply = useSelector((state) => state.RS_newsEvent.modalReply);
  const [show, setShow] = useState(modalReply);

  const [indexReply, setIndexReply] = useState();

  const getIndexReply = (index) => {
    setIndexReply(index);
  };

  return (
    <div className="details__comment">
      <h6 className="details__comment__title">COMMENTS ({comment.length})</h6>

      <div className="details__comment__container">
        {comment.map((item, index) => (
          <div className="details__comment__container__box" key={index}>
            <div className="box__image">
              {item.avatar !== "" ? (
                <img
                  src={require(`../../../../Assets/${item.avatar}`)}
                  alt={item.name}
                  id="image"
                ></img>
              ) : (
                <Avatar facebookId="100008343750912" unstyled={true}></Avatar>
              )}
            </div>

            <div className="box__body">
              <p className="box__body__title">{item.title}</p>
              <p className="box__body__content">{item.content}</p>

              <div className="box__body__info">
                <div>
                  <span>{item.name} </span>-<span> {item.time}</span>
                </div>

                <button
                  onClick={() => {
                    setShow(true);
                    getIndexReply(index);
                  }}
                >
                  Reply
                </button>
              </div>

              {/* Completed: Reply commemmt */}
              {item.reply.length !== 0 ? (
                item.reply.map((itemReply, index) => (
                  <div
                    className="details__comment__container__box replyComment"
                    key={index}
                  >
                    <div className="box__image">
                      {itemReply.avatar !== "" ? (
                        <img
                          src={require(`../../../../Assets/${itemReply.avatar}`)}
                          alt={itemReply.name}
                        ></img>
                      ) : (
                        <Avatar
                          facebookId="100008343750912"
                          unstyled={true}
                        ></Avatar>
                      )}
                    </div>

                    <div className="box__body">
                      <p className="box__body__title">{itemReply.title}</p>
                      <p className="box__body__content">{itemReply.content}</p>

                      <div className="box__body__info">
                        <div>
                          <span>{itemReply.name} </span>-
                          <span> {itemReply.time}</span>
                        </div>

                        {/* <button onClick={() => setShow(true)}>Reply</button> */}
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

      <Modal show={show} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Reply Comment of "USER"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name..."
                autoFocus
                name="name"
                value={comment.name}
                onChange={(e) =>
                  dispatch(
                    GET_INFO_COMMENT({
                      value: e.target.value,
                      name: e.target.name,
                    })
                  )
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email..."
                autoFocus
                value={comment.email}
                name="email"
                onChange={(e) =>
                  dispatch(
                    GET_INFO_COMMENT({
                      value: e.target.value,
                      name: e.target.name,
                    })
                  )
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title..."
                autoFocus
                value={comment.title}
                name="title"
                onChange={(e) =>
                  dispatch(
                    GET_INFO_COMMENT({
                      value: e.target.value,
                      name: e.target.name,
                    })
                  )
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment.content}
                name="content"
                onChange={(e) =>
                  dispatch(
                    GET_INFO_COMMENT({
                      value: e.target.value,
                      name: e.target.name,
                    })
                  )
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                REPLY_COMMENT({ index: props.index, indexComment: indexReply })
              );
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
