import React from 'react';
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon' />
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon' />
               <div>
               <h4>CSS</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon' />
               <div>
               <h4>JAVASCRIPT</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon' />
               <div>
               <h4>BOOTSTRAP</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon' />
               <div>
               <h4>WordPress</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon' />
               <div>
               <h4>REACT</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon' />
               <div>
               <h4>Node JS</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon' />
               <div>
               <h4>PHP</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon'/>
               <div>
               <h4>MSQL</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article>
            <article className='experience_details'>
               <BsPatchCheckFill className='experience_details-icon' />
               <div>
               <h4>python</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
          </div>

        </div>
      </div>
    </section >
  )
}

export default Experience