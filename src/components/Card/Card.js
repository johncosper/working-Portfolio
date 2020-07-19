import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" style={{ backgroundImage: props.image ? `src(${props.image})` : "none"}}>
    
    <img src={props.image} alt={props.name} style={{height: 200}, {width: 250}}/>
    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      
      <a href= {props.href} target="_">
        <button className={`card-btn btn-primary`} {...props}>{props.name}</button>
      </a>

    </div>
  );
}

export default Card;