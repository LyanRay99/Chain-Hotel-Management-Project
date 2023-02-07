//* Library
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import {
  GET_INFO_COMMENT,
  REPLY_COMMENT,
  RESET_COMMENT,
  HANDLE_MODAL,
} from "../../../../Store/reducers/R_newsEvent";

//* React Boostrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NewsAndEventComment = (props) => {
  //* Binding data comment
  const comment = useSelector(
    (state) => state.RS_newsEvent.newsEvent.news_recent[props.index].comment
  );
  const dispatch = useDispatch();

  //* State to show/hide Modal
  const modalReply = useSelector((state) => state.RS_newsEvent.modalReply);

  //* Get + Set Index for reply comment
  const [indexReply, setIndexReply] = useState();

  const getIndexReply = (index) => {
    setIndexReply(index);
  };

  //* Get + setState invalid
  const invalid = useSelector((state) => state.RS_newsEvent.invalid);

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
                    dispatch(HANDLE_MODAL({ handle: "open" }));
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

      <Modal show={modalReply} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Reply Comment of "USER"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name..."
                  isInvalid={invalid.name}
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
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email..."
                  isInvalid={invalid.email}
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
                <Form.Control.Feedback type="invalid">
                  Please enter your email.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title..."
                isInvalid={invalid.title}
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
              <Form.Control.Feedback type="invalid">
                Please enter title.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                style={{
                  maxHeight: "200px",
                  minHeight: "200px",
                }}
                rows={3}
                isInvalid={invalid.content}
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
              <Form.Control.Feedback type="invalid">
                Please write content.
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch(HANDLE_MODAL({ handle: "close" }));
              dispatch(RESET_COMMENT());
            }}
          >
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
