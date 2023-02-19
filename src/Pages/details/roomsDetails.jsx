//* Library
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { goTop } from "../../Components/support/goTop";
import { Zoom } from "react-awesome-reveal";

//* Store in Redux
import { CHANGEROOMINFO, CHANGESTYLEINFO } from "../../Store/reducers/R_rooms";

//* Components UI
import { SupSlider } from "../../Components/headers/supSlider";
import { Reservation } from "../../Components/body/booking/reservation";
import { NewsAndEventRecent } from "../../Components/body/new_event/navigation/newsEventRecent";
import { NewsAndEventUpcoming } from "../../Components/body/new_event/navigation/newsEventUpcoming";
import { Overview } from "../../Components/body/rooms/details/overview";
import { Amenities } from "../../Components/body/rooms/details/amenities";
import { Package } from "../../Components/body/rooms/details/package";
import { RoomSlider } from "../../Components/body/rooms/details/roomSlider";
import { RoomsDescription } from "../../Components/body/rooms/overall/roomsDescription";

//* FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faEye, faPerson } from "@fortawesome/free-solid-svg-icons";

//* Image
import Logo from "../../Assets/Logo.png";

//* Title
import { Title_Room_Detail } from "../../Store/title";

const RoomsDetails = () => {
  document.title = Title_Room_Detail;

  const params = useParams().id;
  const roomDetails = useSelector(
    (state) => state.RS_rooms.Rooms[0].roomType[params]
  );
  const roomType = useSelector((state) => state.RS_rooms.Rooms[0].roomType);
  const roomInfo = useSelector(
    (state) => state.RS_rooms.roomDetail.roomDetailInfo
  );
  const roomInfoStyle = useSelector(
    (state) => state.RS_rooms.roomDetail.roomInfoStyle
  );
  const dispatch = useDispatch();

  return (
    <>
      <SupSlider supSlider="ROOMS DETAIL" />

      <Zoom triggerOnce={true}>
        <section className="section">
          <div className="roomDetails">
            {/* Completed: Image */}
            <div className="roomDetails__slider">
              <div className="roomDetails__slider__main">
                <div className="roomDetails__slider__main__image">
                  <RoomSlider index={params} />
                </div>

                <div className="roomDetails__slider__main__introduction">
                  <div className="rooms__image">
                    <img src={Logo} alt={Logo}></img>
                  </div>

                  <RoomsDescription item={roomDetails} />
                </div>
              </div>

              <nav className="roomDetails__slider__navbar">
                {/* <Reservation /> */}
                <NewsAndEventUpcoming />
                <NewsAndEventRecent />
              </nav>
            </div>

            {/* Completed Room Info */}
            <div className="roomDetails__info">
              <div className="roomDetails__info__control">
                <p
                  className={roomInfoStyle.Overview}
                  onClick={() => {
                    dispatch(CHANGEROOMINFO(0));
                    dispatch(CHANGESTYLEINFO(0));
                  }}
                >
                  OVERVIEW
                  <span></span>
                </p>
                <p
                  className={roomInfoStyle.Amenities}
                  onClick={() => {
                    dispatch(CHANGEROOMINFO(1));
                    dispatch(CHANGESTYLEINFO(1));
                  }}
                >
                  AMENITIES
                  <span></span>
                </p>
                <p
                  className={roomInfoStyle.Package}
                  onClick={() => {
                    dispatch(CHANGEROOMINFO(2));
                    dispatch(CHANGESTYLEINFO(2));
                  }}
                >
                  PACKAGE
                  <span></span>
                </p>
              </div>

              <div className="roomDetails__info__content">
                {roomInfo === 0 ? (
                  <Overview />
                ) : roomInfo === 1 ? (
                  <Amenities />
                ) : (
                  <Package />
                )}
              </div>
            </div>

            {/* Completed Room Others */}
            <div className="roomDetails__othersRooms">
              <h4 className="roomDetails__othersRooms__title">
                ANOTHER ACCOMMODATIONS
              </h4>

              <div className="roomDetails__othersRooms__roomType">
                {roomType.map((item, index) => (
                  <div className="box" key={index}>
                    <div className="box__image">
                      <img
                        src={require(`../../Assets/${item.image}`)}
                        alt={item.type}
                      ></img>
                    </div>

                    <div className="box__info">
                      <h5>{item.type.toUpperCase()} ROOM</h5>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faPerson} className="icon" />
                        </span>
                        <span>Max: {item.max_person} Person(s)</span>
                      </p>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faBed} className="icon" />
                        </span>
                        <span>Bed: King-size or twin beds</span>
                      </p>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faEye} className="icon" />
                        </span>
                        <span>View: Ocen</span>
                      </p>
                    </div>

                    <Link to={`/rooms-details/${index}`} onClick={goTop}>
                      <button>VIEW DETAIL</button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Zoom>
    </>
  );
};

export default RoomsDetails;
