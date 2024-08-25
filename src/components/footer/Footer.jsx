import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

import footerimg from "../../assets/BBfooter.png"


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Badhri's Portfolio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#achievement">Achievement</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/badhrins/" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/BBVMLABS" target="_blank"><FaGithub/></a>
     
      </div>

      <div className="footer__copyright">
  <small>&copy; Designed By <img src={footerimg} alt="Logo" className="footer-logo" />
    
  </small>
</div>

    </footer>
  )
}

export default Footer