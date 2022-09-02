import React from 'react';
import CV from '../assets/my-cv.png';

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} className='btn' >Download</a>
        <a href="#contact" className='btn btn-primary' >Lest's Talk</a>
    </div>
  )
}

export default CTA;