import React from 'react';
import './footer.css'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>otoabasiUdo</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonals">Testimonals</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/otoabasi-udo-910400214/" target="_blank"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/otoabasidaniel/" target="_blank"><FiInstagram /></a>
        <a href="https://x.com/titiudo94475?s=21" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Otoabasi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer