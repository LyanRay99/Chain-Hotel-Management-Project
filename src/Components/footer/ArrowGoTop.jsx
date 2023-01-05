import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const ArrowGoTop = () => {
  //   const [goTop, setGoTop] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       // console.log(window.scrollY)
  //       window.scrollY > 400 ? setGoTop(true) : setGoTop(false);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //   }, [goTop]);

  return (
    // <AnimationOnScroll
    //   initiallyVisible={false}
    //   scrollableParentSelector="#parent"
    //   animateIn="animate__wobble"
    // >
    //   <div
    //     className="arrowGoTop"
    //     // onClick={() => {
    //     //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //     // }}
    //   >
    //     <FontAwesomeIcon className="arrowGoTop__icon" icon={faChevronUp} />
    //   </div>
    // </AnimationOnScroll>

    <AnimationOnScroll
      initiallyVisible={false}
      scrollableParentSelector="#parent"
      animateIn="animate__wobble"
    >
      <h2>Look what i am doing</h2>
    </AnimationOnScroll>

    // goTop && (
    //   <div
    //     className="arrowGoTop"
    //     onClick={() => {
    //       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //     }}
    //   >
    //     <FontAwesomeIcon className="arrowGoTop__icon" icon={faChevronUp} />
    //   </div>
    // )
  );
};
