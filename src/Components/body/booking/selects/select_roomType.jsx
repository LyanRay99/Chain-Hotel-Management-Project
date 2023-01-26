import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_INFO } from "../../../../Store/reducers/R_rooms";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const SelectRoomType = (props) => {
  //* Completed: Ta cần tạo 1 array như options đã được comment bên dưới
  //* 1 - Ta tạo array trống sau đó map roomTypeData và push array trống đó
  const options = [];
  const check1 = ((props) => {
    props.roomType.map((item) => {
      options.push({
        value: item.type,
        label: item.type,
      });
    });
  })(props);

  //* Get value from Select
  const dispatch = useDispatch();

  const getData = (choice) => {
    dispatch(GET_INFO({ choice, data: "roomType" }));
  };

  return (
    <Select
      components={{ DropdownIndicator }}
      options={options}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "grey" : "$colorPrimary",
        }),
      }}
      classNames={{
        control: (state) => (state.isFocused ? "selectActive" : "select"),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#e5c993",
          primary: "#8e7037",
        },
      })}
      onChange={getData}
    />
  );
};

//* Custom icon Down Arrow for Select
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon={faCaretDown} />
    </components.DropdownIndicator>
  );
};
