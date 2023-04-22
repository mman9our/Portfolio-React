import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG6 from '../../assets/portfolio6.jpg'   

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        
        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Zoom Clone App <span>2023</span></h3>
          <span className='text-desc-portfolio'>Flutter IOS&Android Firebase NoSQL.</span>
          <div className="portfolio-item-cta">           
            <a href="https://github.com/mman9our/zoom-clone" className='btn' target="_blank">GitHub</a>
          </div>
        </article>

        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>E-commerce Store <span>2022</span></h3>
          <span className='text-desc-portfolio'>HTML CSS JS Laravel PHP MySQL.</span>
          <div className="portfolio-item-cta">
            <a href="https://github.com/mman9our/Male-Fashion-Shop" className='btn' target="_blank">GitHub</a>
          </div>
        </article>

        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Mobile App Promo Video <span>2023</span></h3>
          <span className='text-desc-portfolio'>After Effect Blender Figma Photoshop.</span>

          <div className="portfolio-item-cta">

          <div className="portfolio-item-cta">
            <a href="" className='btn' target="_blank">GitHub</a>
            <a href="https://www.youtube.com/watch?v=UCumsnYtawY" className='btn btn-primary' target="_blank">Check it out</a>
            </div>
            
          </div>
        </article>

        
        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>WaFer Mobile App </h3>
          <span className='text-desc-portfolio'>Flutter Firebase GetX MySQL Laravel AI Models.</span>
          <div className="portfolio-item-cta">
            <a className='' >Soon</a>
            
          </div>
        </article>

        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Todo List App <span>2023</span></h3>
          <span className='text-desc-portfolio'>HTML CSS JS LocalStorage CRUD Opreation.</span>
          <div className="portfolio-item-cta">
            <a href="https://github.com/mman9our/Todo-App" className='btn' target="_blank">GitHub</a>
            <a href="https://funny-medovik-a85572.netlify.app/" className='btn btn-primary' target="_blank">Check it out</a>
            
          </div>
        </article>

        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>WaFer Dashboard Admin </h3>
          <span className='text-desc-portfolio'>HTML CSS JS PHP Laravel MySQL AWS.</span>
          <div className="portfolio-item-cta">
            <a className='' >Soon</a>

          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;