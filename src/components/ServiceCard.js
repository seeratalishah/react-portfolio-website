import React from "react";
import ServiceDetails from "./ServiceDetails";

function ServiceCard(props) {
  const data = [
    {
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
  ];
  return (
    <article className="service-card">
      <div className="service-head">
        <h3>{props.title}</h3>
      </div>

      <ul className="service-list">
        {
          data.map((data, index)=>{
            return <ServiceDetails desc={data.desc} />
          })
        }
      </ul>
    </article>
  );
}

export default ServiceCard;
