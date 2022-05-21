import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/otoabasi-udo-910400214/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Titiess" target="_blank"><FaGithub /></a>
        <a href="https://dribbble.com/Tities" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials