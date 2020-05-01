import React from "react";

import "./CheckBox.css";

const CheckBox = (props) => {
  return (
    <>
      <input type="checkbox" className="checkbox" />
      {props.children}
    </>
  );
};

export default CheckBox;
