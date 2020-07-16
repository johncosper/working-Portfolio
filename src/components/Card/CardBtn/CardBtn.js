  import React from "react";
import "./CardBtn.css";

function CardBtn(props) {
  return (
  <a href= {props.href} target="_">
  <button className={`card-btn btn-primary`} {...props}>{props.name}</button>
  </a>
  );
}

export default CardBtn;