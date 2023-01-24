import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const Selects = (props) => {
  //* Completed: Ta cần tạo 1 array như options đã được comment bên dưới
  //* 1 - Ta tạo array trống sau đó map roomTypeData và push array trống đó
  const options = [];
  const check1 = ((props) => {
    if (props.branchName !== null && props.branchName !== undefined) {
      props.branchName.map((item) => {
        options.push({
          value: item.nameBranchVN,
          label: item.nameBranchVN,
        });
      });
    } else if (props.roomType !== null && props.roomType !== undefined) {
      props.roomType.map((item) => {
        options.push({
          value: item.type,
          label: item.type,
        });
      });
    } else if (props.roomTypes !== null && props.roomTypes !== undefined) {
      props.roomTypes.map((item) => {
        options.push({
          value: item.name,
          label: item.name,
        });
      });
    } else if (props.customer === true) {
      for (let i = 1; i < 5; i++) {
        options.push({
          value: i,
          label: i,
        });
      }
    }
  })(props);

  //   const options = [
  //     { value: "chocolate", label: "Chocolate" },
  //     { value: "strawberry", label: "Strawberry" },
  //     { value: "vanilla", label: "Vanilla" },
  //   ];

  //* Get value from Select
  const [branchValue, setBranchValue] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomKind, setRoomTKind] = useState("");
  const [customerAmount, setCustomerAmount] = useState("");

  // const getBranch = (choice) => {
  //   setBranchValue(choice);
  //   console.log(choice.value);
  // };

  // const branchValue = useSelector(
  //   (state) => state.RS_rooms.checkAvailable.branchValue
  // );

  const getDataSelect = (choice) => {
    if (props.branchName !== null && props.branchName !== undefined) {
      // console.log(1);
      setBranchValue(choice);
    } else if (props.roomType !== null && props.roomType !== undefined) {
      // console.log(2);
      setRoomType(choice);
    } else if (props.roomTypes !== null && props.roomTypes !== undefined) {
      // console.log(3);
      setRoomTKind(choice);
    } else if (props.customer === true) {
      // console.log(4);
      setCustomerAmount(choice);
    }
  };

  const setValueSelect = (choice) => {
    if (props.branchName !== null && props.branchName !== undefined) {
      // console.log(1);
      // setBranchValue(choice);
      return branchValue;
    } else if (props.roomType !== null && props.roomType !== undefined) {
      // console.log(2);
      // setRoomType(choice);
      return roomType;
    } else if (props.roomTypes !== null && props.roomTypes !== undefined) {
      // console.log(3);
      // setRoomTKind(choice);
      return roomKind;
    } else if (props.customer === true) {
      // console.log(4);
      // setCustomerAmount(choice);
      return customerAmount;
    }
  };

  // useEffect(() => {
  //   console.log(branchValue);
  //   console.log(roomType);
  //   console.log(roomKind);
  //   console.log(customerAmount);
  // }, [customerAmount]);

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
      onChange={getDataSelect}
      value={branchValue}
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
