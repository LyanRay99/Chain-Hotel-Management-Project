import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGEBOOKINGSTEP,
  CHANGEBOOKINGSTYLE,
  CHANGE_UICONFIRM,
} from "../../../../Store/reducers/R_rooms";
import { goTop } from "../../../../Components/support/goTop";

export const AllRoomSelected = () => {
  const dispatch = useDispatch();
  const confirm = useSelector((state) => state.RS_rooms.changeUIConfirm);

  return (
    <div className="allRoomSelected">
      {confirm === false ? (
        <React.Fragment>
          <h5>CONFIRM BOOK ROOM SELECTED</h5>
          <button
            onClick={() => {
              dispatch(CHANGE_UICONFIRM());
            }}
          >
            CONFIRM
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h5>ALL ROOMS ARE SELECTED</h5>
          <p>You have chosen all of your rooms would you like to continue?</p>
          <button
            onClick={() => {
              dispatch(CHANGEBOOKINGSTEP(0));
              dispatch(CHANGEBOOKINGSTYLE(0));
              goTop();
            }}
          >
            CONTINUE
          </button>
        </React.Fragment>
      )}
    </div>
  );
};
