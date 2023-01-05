import React, { useState } from "react";
import listRooms from "../../../Data/list_room.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHotel,
  faMap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const ContactBody = () => {
  const [listChainHotels, setListChainHotels] = useState(listRooms);

  return (
    <div className="contact">
      <div className="contact__info">
        <h3 className="contact__info__title">CONTACT</h3>
        <p className="contact__info__content">
          If you have any questions, feel free to message us. We are always here
          to answer your questions. Or you can exchange them directly with us at
          the panorama hotels branches below.
        </p>

        <div className="contact__info__listChainHotels">
          {listChainHotels.map((item) => (
            <ul className="branch">
              <li>
                <FontAwesomeIcon icon={faHotel} className="icon" />
                {item.nameBranchEN}
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faMap} className="icon" />
                    {item.addressEN}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    {item.phone}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    {item.email}
                  </li>
                </ul>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="contact__feedback">
        <div className="contact__feedback__account">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
        </div>

        <div className="contact__feedback__subject">
          <input type="text" placeholder="Subject"></input>
        </div>

        <div className="contact__feedback__content">
          <textarea placeholder="Write what do you want!"></textarea>
        </div>

        <button className="contact__feedback__send">SEND</button>
      </div>
    </div>
  );
};
