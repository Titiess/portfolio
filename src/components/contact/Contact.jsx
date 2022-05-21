import React from 'react';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import  { useRef as UseRef  } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_95qzmdv', 'template_ln1tx8d', form.current, 'FrZQybKDkNeR8YTqo')
    e.target.reset()
  };
  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>odanieludo1@gmail.com</h5>
            <a href="mailto:odanieludo1@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>OtoabasiUdo</h5>
            <a href="https://m.me/otoabasi.udo.73" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+234 7087372150</h5>
            <a href="https://api.whatsapp.com/send?phone+2347087372150" target="_blank">Send a message</a>
          </article>
          </div>
          <div>
            {/*END OF CONTACT OPTIONS*/}
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name="email" placeholder='Your Email' required />
              <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>

            </form>
          </div>
        </div>
      
    </section >
  )
}

export default contact