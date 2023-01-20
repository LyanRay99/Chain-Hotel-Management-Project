import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHotel,
  faMap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const ListBranch = (props) => {
  return (
    <ul className="branch">
      <li>
        <FontAwesomeIcon icon={faHotel} className="icon" />
        {props.item.nameBranchEN}
        <ul>
          <li>
            <FontAwesomeIcon icon={faMap} className="icon" />
            {props.item.addressEN}
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            {props.item.phone}
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            {props.item.email}
          </li>
        </ul>
      </li>
    </ul>
  );
};
