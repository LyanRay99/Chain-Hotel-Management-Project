import React from "react";

export const ContactMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.883257431004!2d108.23027283886776!3d16.071546739459432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142182e92da4189%3A0x6c81c812834b1bdb!2zVmluY29tIFBsYXphIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1672926739095!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title=" Google map"
      ></iframe>
    </div>
  );
};
