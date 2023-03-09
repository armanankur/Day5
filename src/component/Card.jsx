import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.user.image} alt="img not found" />

          <h4>{props.user.designation}</h4>
          <h2>{props.user.name}</h2>
          <p>{props.user.description}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
