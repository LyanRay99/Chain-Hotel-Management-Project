import React from "react";
import { useSelector } from "react-redux";
import { ContactFeedback } from "./contactFeedback";
import { ListBranch } from "./listBranch";

export const ContactBody = () => {
  const listHotel = useSelector((state) => state.RS_rooms.Rooms);

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
          {listHotel.map((item, index) => (
            <ListBranch item={item} key={index} />
          ))}
        </div>
      </div>

      <ContactFeedback title="contact" />
    </div>
  );
};
