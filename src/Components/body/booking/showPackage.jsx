import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { PackageStandar } from "./packageStandar";

function CustomToggle({ children, eventKey }) {
  const [ActiveKey, setActiveKey] = useState(true);
  const changeActiveKey = () => {
    setActiveKey(!ActiveKey);
  };

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <div>
      <p
        onClick={() => {
          decoratedOnClick();
          changeActiveKey();
        }}
      >
        {children}
      </p>

      <div className={ActiveKey === false ? "iconPlus" : "iconMinus"}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
}

export const BookingAccordion = (props) => {
  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">SHOW MORE PACKAGE</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <PackageStandar item={props.item} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
