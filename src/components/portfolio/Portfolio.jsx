import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio0.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
 {
  id: 1,
  image: IMG1,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-visualzation'
},
 {
  id: 2,
  image: IMG1,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-visualzation'
},
 {
  id: 3,
  image: IMG1,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-visualzation'
},
 {
  id: 4,
  image: IMG1,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-visualzation'
},
 {
  id: 5,
  image: IMG1,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-visualzation'
},
 {
  id: 6,
  image: IMG1,
  title:'Crypto Currency Dashboard & Financial Visualization',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-visualzation'
},
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
       
      {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id} className='portfolio_item' >
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article> 
          )
        })
      }
      
      </div>
    </section>
  )
}

export default Portfolio