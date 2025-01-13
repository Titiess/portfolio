import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Titi porfolio.png'
import IMG2 from '../../assets/Titi porfolio1.png'
import IMG3 from '../../assets/Tech Hashira.png'



const data = [
 {
  id: 1,
  image: IMG1,
  title:'My React Portfolio site',
  github:'https://github.com/Titiess/portfolio',
  demo:'https://youtu.be/7bDqx8AYPzw'
},
 {
  id: 2,
  image: IMG2,
  title:'EaglesHub Website',
  github:'https://github.com/Titiess/EaglesHub',
  demo:'https://youtu.be/RIn8NiiYAQQ'
},
 {
  id: 3,
  image: IMG3,
  title:'Tech Hashira WordPress site',
  github:'https://github.com',
  demo:'https://youtu.be/cKIBMHR3f5E'
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