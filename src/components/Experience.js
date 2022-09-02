import React from 'react'
import ExperienceCard from './ExperienceCard';

function Experience() {
  const frontendData = [
    {
      title: 'HTML',
      desc: 'Experienced'
    },
    {
      title: 'CSS',
      desc: 'Experienced'
    },
    {
      title: 'BootStrap',
      desc: 'Intermediate'
    },
    {
      title: 'JavaScript',
      desc: 'Experienced'
    },
    {
      title: 'React',
      desc: 'Experienced'
    }, 
    {
      title: 'Tailwind',
      desc: 'Intermediate'
    }
  ];

  const backendData = [
    {
      title: 'PHP',
      desc: 'Experienced'
    },
    {
      title: 'NodeJs',
      desc: 'Experienced'
    },
    {
      title: 'MongoDB',
      desc: 'Intermediate'
    },
    {
      title: 'C#',
      desc: 'Experienced'
    },
    {
      title: 'MySql',
      desc: 'Experienced'
    }, 
    {
      title: 'Express',
      desc: 'Intermediate'
    }
  ];

  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
           {
            frontendData.map((card, index)=>{
              return <ExperienceCard title={card.title} desc={card.desc} />
            })
           }
          </div>
        </div>
        <div className="experience-backend">
        <h3>Backend Development</h3>
          <div className="experience-content">
           {
            backendData.map((card, index)=>{
              return <ExperienceCard title={card.title} desc={card.desc} />
            })
           }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience