import React from "react";

function TestimonialCard(props) {
  return (
    <article className="testimonial-card">
      <div className="client-avatar">
        <img src={props.imgUrl} alt="" />
      </div>
      <h3 className="client-name">{props.clientName}</h3>
      <small className="client-review">{props.clientReview}</small>
    </article>
  );
}

export default TestimonialCard;
