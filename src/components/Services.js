import React from 'react'
import ServiceCard from './ServiceCard';

function Services() {
  const data = [
    {
      title: 'UI/UX Design'
    },
    {
      title: 'Web Development'
    },
    {
      title: 'Live Website'
    }
  ];
  return (
    <section id='services'>
      <h5>What Services I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
       {
        data.map((data, index)=>{
          return <ServiceCard title={data.title} />
        })
       }
      </div>
    </section>
  )
}

export default Services