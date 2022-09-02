import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';



function Nav() {

  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a className={activeNav === '#'? 'active': ''} href=""><AiOutlineHome /></a>
      <a className={activeNav === '#about'? 'active': ''} onClick={()=>setActiveNav('#about')} href="#about"><AiOutlineUser /></a>
      <a className={activeNav === '#experience'? 'active': ''} onClick={()=>setActiveNav('#experience')} href="#experience"><BiBook /></a>
      <a className={activeNav === '#services'? 'active': ''} onClick={()=>setActiveNav('#services')} href="#services"><RiServiceLine /></a>
      <a className={activeNav === '#contact'? 'active': ''} onClick={()=>setActiveNav('#contact')} href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav