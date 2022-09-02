import React from 'react'

function ExperienceCard(props) {
  return (
    <article className="experience-card">
    <i class="fa-solid fa-circle-check"></i>
    <div>
     <h4>{props.title}</h4>
     <small className='text-light'>{props.desc}</small>
    </div>
    
  </article>
  )
}

export default ExperienceCard;