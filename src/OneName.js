import React from "react";
import "./App.css";

function OneName(props) {
  let babyColor = "";
  if (props.sex == "m") {
    babyColor = "nameBoy";
  } else {
    babyColor = "nameGirl";
  }
  return <span onClick={props.clickName} class={babyColor}> {props.name} </span>;
}

export default OneName;
