import React from 'react'
import aboutMe from '../assets/about-me-img.png';
import Card from './Card';



function About() {

  const data = [
    {
      icon_class: 'fa-solid fa-award',
      title: 'Experience',
      desc: '3+ years experience'
    },
    {
      icon_class: 'fa-solid fa-user-group',
      title: 'Clients',
      desc: '20+ worldwide'
    },
    {
      icon_class: 'fa-solid fa-folder-open',
      title: 'Projects',
      desc: '50+ completed'
    }
  ];

  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={aboutMe} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            {
              data.map((card, index)=>{
                return (<Card iconClass={card.icon_class} title={card.title} desc={card.desc} />)
              })
            }
           
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet dolore quaerat neque, 
            est quasi obcaecati labore debitis iste? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Hic, molestiae atque perferendis esse a expedita itaque doloribus assumenda praesentium!
          </p>

          <a href="#" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About