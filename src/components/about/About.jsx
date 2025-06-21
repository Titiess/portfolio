import React from 'react';
import './about.css'
import ME from '../../assets/ttiti.jpg'
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
              <div>
            <p>
           I’m a Frontend Developer specializing in building modern, scalable, and responsive web applications using Next.js, React.js, Tailwind CSS, and TypeScript. With over 3 years of experience, I’ve helped startups and businesses bring their ideas to life through clean code, pixel-perfect UIs, and optimized performance.

                I focus on delivering seamless user experiences across all devices, from mobile to desktop. My frontend skillset is complemented by experience in integrating REST APIs, using headless CMSs like Sanity or Strapi, and deploying apps on platforms like Vercel or Netlify.

              <br />Here’s what I can help you with:
              <ul className='about_list'>
                  <li>Developing modern web apps with Next.js & React</li>
                  <li>Building fully responsive UIs with Tailwind CSS or Sass</li>
                  <li>Fixing frontend bugs and optimizing performance</li>
                  <li>Revamping outdated websites with modern tech</li>
                  <li>Creating dynamic sites using headless CMS</li>
                  <li>Blog development and integration with CMS platforms</li>
                  <li>Deployment, SEO optimization, and hosting setup</li>
              </ul>

            Let’s build something amazing together.
            </p></div>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section> 
  )
}

export default About