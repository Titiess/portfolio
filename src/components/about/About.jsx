import React from 'react';
import './about.css'
import ME from '../../assets/ppics.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
           <div className="about_me-image">
             <img src={ME} alt="About Image" />
           </div>
        </div>
        <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                  <FaAward className='about_icon' />
                  <h5>Experience</h5>
                  <small>3+ years Working</small>
              </article>

              <article className='about_card'>
                  <FiUsers className='about_icon' />
                  <h5>Clients</h5>
                  <small>50+ Worldwide</small>
              </article>

              <article className='about_card'>
                  <VscFolderLibrary className='about_icon' />
                  <h5>projects</h5>
                  <small>30+ Completed</small>
              </article>
            </div>

            <p>
            I am an experienced Fullstack developer specialising in frontend tech like Wordpress,
             Html5, CSS3, Javascript and React alongside with some backend tech like PHP, MSQL, Nodejs and python with more than 3 years of experience. 
             I aim to create responsive, mobile and desk-top user friendly websites that take your business to the next level. 
             The services I render include;

(** Fixing of bugs
** Revamping of other websites
** Building website from scratch
** Making simple and complex animation using CSS3 and Sass
** Creating WordPress sites using pluggins and elementors
** Creating Blogs using WordPress
** Hosting( options included))
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section> 
  )
}

export default About