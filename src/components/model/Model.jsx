import React from "react";
import "./Model.css";
function Model({ model, children }) {
  return <>{model ? children : <></>}</>;
}

export default Model;
