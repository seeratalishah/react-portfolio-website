import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs';

function Footer() {
  return (
    <footer>
        <a href="#" className='footer-logo'>Seerat Ali</a>

        <ul className='footer-links'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-social-media-links">
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'><BsGithub/></a>
        <a href="https://twitter.com" target='_blank'><BsTwitter/></a>
        </div>

        <div className="footer-copyright">
          <small>Seerat Ali &copy; all rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer