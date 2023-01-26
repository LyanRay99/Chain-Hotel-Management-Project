//* Library
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Zoom } from "react-awesome-reveal";

//* Components UI
import { SupSlider } from "../../Components/headers/supSlider";

const Faqs = () => {
  const faqs = useSelector((state) => state.RS_faqs.faqs);

  return (
    <>
      {/* Completed: Slider phụ của mỗi page, supSlider truyền vào để component SupSlider biết được title hiện tại*/}
      <SupSlider supSlider="FAQS" />

      <Zoom triggerOnce={true}>
        {/* Completed: Body */}
        <section className="section">
          <div className="FAQS">
            <h3 className="FAQS__title">FAQs</h3>

            <div className="FAQS__container">
              <Accordion defaultActiveKey="0">
                {faqs.map((item, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <div className="FAQS__container__header">
                      <Accordion.Header>{item.title}</Accordion.Header>
                      <FontAwesomeIcon icon={faCaretDown} className="icon" />
                    </div>
                    <Accordion.Body>
                      {item.content.map((content, index) => (
                        <div className="FAQS__content" key={index}>
                          <p className="FAQS__content__question">
                            {content.question}
                          </p>
                          <p className="FAQS__content__answer">
                            {content.answer}
                          </p>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </Zoom>
    </>
  );
};

export default Faqs;
