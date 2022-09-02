import React from "react";

function Card(props) {
  return (
    <article className="card">
      <i className={props.iconClass} ></i>
      <h5>{props.title}</h5>
      <small>{props.desc}</small>
    </article>
  );
}

export default Card;
