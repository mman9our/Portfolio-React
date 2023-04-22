import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me about__me2">
          <div className="about_me_image">
            <img src={ME} alt="About Image" />
          </div>
          </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h4>Experience</h4>
              <small>2+Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h4>Clients</h4>
              <small>5+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h4>Projects</h4>
              <small>10+ Completed</small>
            </article>
          </div>


        

          
            <p>I'm Software Engineering student, Enthusiastic full-stack developer.
            I build both web & mobile applications with modern technologies, Experienced working for individual projects.
            See my recent shares Articles on <span><a href="https://t.me/telluaa" target="_blank">Telegram.</a> </span></p>
          
          <a href="#" className='btn btn-primary'>Let's talk</a>
        </div>

      </div>
   </section>
  )
}

export default About