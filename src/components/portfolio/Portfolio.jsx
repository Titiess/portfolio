import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Titi porfolio.png'
import IMG2 from '../../assets/Titi porfolio1.png'
import IMG3 from '../../assets/Islanddao.png'



const data = [
  {
  id: 1,
  image: IMG3,
  title:'Island DAO Website',
  github:'https://github.com/Titiess/Island-DAO-rebrand.git',
  demo:'https://islanddao.org/'
},
 {
  
  id: 2,
  image: IMG1,
  title:'My React Portfolio site',
  github:'https://github.com/Titiess/portfolio',
  demo:'https://titiess.github.io/portfolio/#'
},
 {
  id: 3,
  image: IMG2,
  title:'EaglesHub Website',
  github:'https://github.com/Titiess/EaglesHub',
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