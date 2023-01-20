import { useSelector } from "react-redux";
import { Zoom } from "react-awesome-reveal";
import { SupSlider } from "../../Components/headers/supSlider";

export const Term = () => {
  const term = useSelector((state) => state.RS_terms.term);

  return (
    <>
      {/* Completed: Slider phụ của mỗi page, supSlider truyền vào để component SupSlider biết được title hiện tại*/}
      <SupSlider supSlider="TERM" />

      <Zoom triggerOnce={true}>
        {/* Completed: Body */}
        <section className="section">
          <div className="term">
            <h3 className="term__title">
              TERMS & CONDITIONS FOR HOTEL ACCOMMODATION
            </h3>

            <div className="term__body">
              {term.map((item, index) => (
                <div className="term__body__box" key={index}>
                  <h4>{item.title}</h4>

                  <ol>
                    {item.content.map((content, index) => (
                      <li key={index}>
                        {content.content_LV1}
                        <ul>
                          {content.content_LV2.map((contentLV2, index) => (
                            <li key={index}>{contentLV2}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Zoom>
    </>
  );
};
