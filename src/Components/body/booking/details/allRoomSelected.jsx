import { useDispatch } from "react-redux";
import {
  CHANGEBOOKINGSTEP,
  CHANGEBOOKINGSTYLE,
} from "../../../../Store/reducers/R_rooms";

export const AllRoomSelected = () => {
  const dispatch = useDispatch();

  return (
    <div className="allRoomSelected">
      <h5>ALL ROOMS ARE SELECTED</h5>
      <p>You have chosen all of your rooms would you like to continue?</p>
      <button
        onClick={() => {
          dispatch(CHANGEBOOKINGSTEP(0));
          dispatch(CHANGEBOOKINGSTYLE(0));
        }}
      >
        CONTINUE
      </button>
    </div>
  );
};
