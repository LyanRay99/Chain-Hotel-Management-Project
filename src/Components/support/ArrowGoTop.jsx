// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import Zoom from "react-reveal/Zoom";
// import Reveal from "react-reveal/Reveal";

// export const ArrowGoTop = () => {
//   const [goTop, setGoTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // console.log(window.scrollY)
//       window.scrollY > 350 ? setGoTop(true) : setGoTop(false);
//     };

//     window.addEventListener("scroll", handleScroll);
//   }, [goTop]);

//   return (
//     goTop && (
//       <Zoom>
//         <div
//           className="arrowGoTop"
//           onClick={() => {
//             window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//           }}
//         >
//           <FontAwesomeIcon className="arrowGoTop__icon" icon={faChevronUp} />
//         </div>
//       </Zoom>
//     )
//   );
// };
