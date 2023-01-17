import React from "react";
import { useSelector } from "react-redux";
import { SupSlider } from "../../Components/headers/supSlider";
import { AboutInfo } from "../../Components/body/about/aboutInfo";
import { AboutStatistic } from "../../Components/body/about/aboutStatistic";
import { AboutTeam } from "../../Components/body/about/aboutTeam";

export const About = () => {
  const aboutUsInfo = useSelector(
    (state) => state.RS_aboutUs.aboutUs.aboutUs_Page
  );

  return (
    <>
      {/* TODO: Slider phụ của mỗi page, supSlider truyền vào để component SupSlider biết được title hiện tại*/}
      <SupSlider supSlider="ABOUT US" />

      {/* TODO: Body của phần About */}
      <section className="section">
        <div className="about">
          {aboutUsInfo.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <div className="about__info" key={index}>
                  <div className="about__info__image">
                    <img
                      src={require(`../../Assets/${item.image}`)}
                      alt={item.title}
                    ></img>
                  </div>

                  <AboutInfo aboutInfo={item} />
                </div>
              );
            } else {
              return (
                <div className="about__info" key={index}>
                  <AboutInfo aboutInfo={item} />

                  <div className="about__info__image">
                    <img
                      src={require(`../../Assets/${item.image}`)}
                      alt={item.title}
                    ></img>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>

      <AboutStatistic />

      <section className="section">
        <AboutTeam />
      </section>
    </>
  );
};
