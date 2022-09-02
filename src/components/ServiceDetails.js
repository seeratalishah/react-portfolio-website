import React from "react";

function ServiceDetails(props) {
  return (
    <li className="service-detail">
      <i class="fa-solid fa-check"></i>
      <p>{props.desc}</p>
    </li>
  );
}

export default ServiceDetails;
