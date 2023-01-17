import React from "react";
import { SupSlider } from "../../Components/headers/supSlider";
import { ContactBody } from "../../Components/body/contact/contactBody";
import { ContactMap } from "../../Components/body/contact/contactMap";

export const Contact = () => {
  return (
    <>
      {/* TODO: Slider phụ của mỗi page, supSlider truyền vào để component SupSlider biết được title hiện tại*/}
      <SupSlider supSlider="CONTACT US" />

      {/* TODO: Body của phần Contact */}
      <section className="section">
        <ContactBody />
      </section>

      {/* TODO: Phần map (google-map-react) */}
      <ContactMap />
    </>
  );
};
