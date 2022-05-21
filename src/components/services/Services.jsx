import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Experience & Design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Website Design & Re-design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mobile First & Responsive Design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>UI & Interaction Design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Testing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Research & Analysis.</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}
        <article className='service'>
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service_list'>
          <li>
              <BiCheck className='service_list-icon'/>
              <p>Website Development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Website Development Using React.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>eCommerce Development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Development Intergration & Platform Engineering.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Fixing Of Bugs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> Revamping Of Other Websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Creating WordPress sites using pluggins and elementors.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Hosting Of Websites.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        <article className='service'>
          <div className="service_head">
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Consulting & Strategy.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Migration.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Upgrade.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Integration.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Content Implementation.</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}

      </div>
    </section>
  )
}

export default Services