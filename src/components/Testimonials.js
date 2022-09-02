import React from 'react';
import client1 from '../assets/client-1.jpg';
import client2 from '../assets/client-1.jpg';
import client3 from '../assets/client-1.jpg';
import client4 from '../assets/client-1.jpg';
import TestimonialCard from './TestimonialCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';


function Testimonials() {

  const data= [
    {
      imgUrl: client1,
      clientName: 'Kainat Ali',
      clientReview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Iure facilis nam ipsam neque totam asperiores porro vero sunt maiores voluptatibus.
      Iure facilis nam ipsam neque totam asperiores porro `,
    },
    {
      imgUrl: client2,
      clientName: 'Seerat Ali',
      clientReview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Iure facilis nam ipsam neque totam asperiores
      .`,
    },
    {
      imgUrl: client3,
      clientName: 'Kainat Ali',
      clientReview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Iure facilis nam ipsam neque totam asperiores porro vero sunt maiores voluptatibus.
      Iure facilis nam ipsam neque totam asperiores `,
    },
    {
      imgUrl: client4,
      clientName: 'Kainat Ali',
      clientReview: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Iure facilis nam ipsam neque totam asperiores porro vero sunt maiores voluptatibus.
      Iure facilis nam ipsam neque totam asperiores porro vero sunt maiores voluptatibus.
      Iure facilis nam ipsam neque totam asperiores porro vero sunt maiores voluptatibus.`,
    },
  ];

  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      
        <Carousel className="container testimonials-container">
        {

data.map((data,index)=>{
  return <TestimonialCard  imgUrl={data.imgUrl} clientName={data.clientName} clientReview={data.clientReview} />
})
}
        </Carousel>
      
        
      
    </section>
  )
}

export default Testimonials