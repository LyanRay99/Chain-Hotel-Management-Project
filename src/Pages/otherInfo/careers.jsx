import React from "react";
import { useSelector } from "react-redux";
import { SupSlider } from "../../Components/headers/supSlider";
import { ListBranch } from "../../Components/body/contact/listBranch";

export const Careers = () => {
  const careers = useSelector((state) => state.RS_careers.careers);
  const listBranch = useSelector((state) => state.RS_rooms.Rooms);

  return (
    <>
      {/* Completed: Slider phụ của mỗi page, supSlider truyền vào để component SupSlider biết được title hiện tại*/}
      <SupSlider supSlider="CAREERS" />

      {/* Completed: Body */}
      <section className="section">
        <div className="careers">
          <div className="careers__container">
            {/* Info */}
            <div className="careers__container__info">
              <h4 className="careers__container__info__title">
                {careers.info.title}
              </h4>
              <p className="careers__container__info__content">
                {careers.info.content}
              </p>
            </div>

            {/* Benefits */}
            <div className="careers__container__benefits">
              <h4 className="careers__container__benefits__title">
                {careers.benefits.title}
              </h4>

              <div className="careers__container__benefits__content">
                {careers.benefits.content.map((item, index) => (
                  <div className="box" key={index}>
                    <img
                      src={require(`../../Assets/${item.image}`)}
                      alt={item.imageTitle}
                    ></img>

                    <p className="boxTitle">{item.imageTitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="careers__container__contact">
              <div className="careers__container__contact__info">
                <h4>{careers.joinUs.title}</h4>

                {careers.joinUs.content.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}

                {listBranch.map((item, index) => (
                  <ListBranch item={item} key={index} />
                ))}
              </div>

              <div className="careers__container__contact__image">
                <img
                  src={require(`../../Assets/${careers.joinUs.image}`)}
                  alt={careers.joinUs.image}
                ></img>
              </div>
            </div>

            {/* Opportunities */}
            <div className="careers__container__opportunities">
              <h4>{careers.opportunity.title}</h4>

              <p>{careers.opportunity.content}</p>

              <div className="careersFrame">
                <div className="careersFrame__parent">
                  <div className="careersFrame__parent__child">
                    {careers.opportunity.opportunities.map((item, index) => (
                      <div className="box" key={index}>
                        <h5 className="box__title">{item.position}</h5>
                        <p className="box__content">
                          <b>Department: </b>
                          {item.department}
                          <span></span>
                          <b>Employment Type: </b>
                          {item.employmentType}
                        </p>

                        <p className="box__description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="careersIntership-SECTION">
        <section className="section">
          {/* Internship */}
          <div className="careersIntership">
            <div className="careersIntership__image">
              <img
                src={require(`../../Assets/${careers.internship.image}`)}
                alt={careers.internship.image}
              ></img>
            </div>

            <div className="careersIntership__info">
              <h4>{careers.internship.title}</h4>
              <p>{careers.internship.content}</p>
              <button>APPLY NOW</button>
            </div>
          </div>
        </section>
      </div>

      <div className="careersReview__SECTION">
        <div className="careersReview__SECTION__bgc">
          <section className="section">
            {/* Review */}
            <div className="careersReview">
              <h4>{careers.review.title}</h4>

              <div className="careersReview__container">
                {careers.review.content.map((item, index) => (
                  <div className="box" key={index}>
                    <p>{item.reviewContent}</p>
                    <p>{item.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="section">
        <div className="careers">
          {/* Notes */}
          <div className="careers__container__note">
            <div className="careers__container__note__frame">
              {careers.note.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
