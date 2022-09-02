import React from 'react'
import CTA from './CTA'
import me from '../assets/me-1.png';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello, I am</h5>
        <h1>Seerat Ali</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>

        <HeaderSocials />

        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header