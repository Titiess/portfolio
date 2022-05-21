import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar1.jpg'
import AVTR3 from '../../assets/avatar1.jpg'
import AVTR4 from '../../assets/avatar1.jpg'


// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name: 'Aleksandra Badea',
    review: 'Otoabasi did a perfect job. He immediately fixed an issue I was trying to fix. He was very responsive and professional. He provided also feedback on what else I need to change on the website. Highly recommend! Thank you, Otoabasi for your help!'
  
  },
  {
    avatar:AVTR1,
    name: 'John Udo',
    review: 'Nice job done. I love the project it\'s looking really simple and responsive. Thank you!'
  
  },
  {
    avatar:AVTR1,
    name: 'Godwin Joseph',
    review: 'I personally recommend this developer. He finish my project a day before the deadline and he was also very quick to fix all the issues I found, it\'s nice working with him. '
  
  },
  {
    avatar:AVTR1,
    name: 'Edidiong Umoren',
    review: 'I started my blog with no website building skills or WordPress knowledge, I basically knew nothing about everything but the writing aspect of my business. But Otoabasi swopped in and took the wheels. He handled building my blog like a pro and I couldn\'t have asked for a more expert hand. I recommend Otoabasi a full one hundred percent and even over to any beginner to professional who wants their blog built or managed.'
  
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonals</h2>

       <Swiper className="container testimonals_container"
           // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
   >
        {data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonal'>
            <div className="client_avatar">
              <img src={avatar} alt="avatar one" />
            </div>
            <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
     </SwiperSlide>
          )
        })}
         
       </Swiper>

    </section>
  )
}

export default Testimonials