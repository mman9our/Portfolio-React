import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h4>What Skills I Have</h4>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>            
                <h4>HTML</h4>
                <div className='text-desc text-light'>Semantic</div>
                <small className='text-light'>Advanced</small>
                </div>
            </article>
              
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>CSS</h4>
                <div className='text-desc text-light'>BEM, StyledComponent</div>
                
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>Tailwind</h4>
                <div className='text-desc text-light'>Tailwind UI, Custom UI</div>
                
            <small className='text-light'>Advanced</small>
            </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>TypeScript</h4>
          <small className='text-light'>Intermediate</small>
          </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>ReactJs</h4>
                <div className='text-desc text-light'>Webpack, Vite, CRA</div>
                
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>Flutter</h4>
                <div className='text-desc text-light'>GetX | (Android/IOS)</div>
                  <small className='text-light'>Advanced</small>
                  </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>Animations</h4>
                <div className='text-desc text-light'>Framer Motion, Lottie Files</div>
                  <small className='text-light'>Intermediate</small>
                  </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>Global States</h4>
                <div className='text-desc text-light'>Redux, GetX</div>
                  <small className='text-light'>Intermediate</small>
                  </div>
            </article>
          </div>
        </div>
        
        

        <div className="experience__backend">
           <h3>Backend Development</h3>
             <div className="experience__content">

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Frameworks</h4>
                <div className='text-desc text-light'>Laravel, NextJs</div>
                
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>TypeORM</h4>
                
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>Database</h4>
                <div className='text-desc text-light'>MySQL, Oracle, Firebase</div>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>Security/Auth</h4>
                <div className='text-desc text-light'>Validations, JWT, Sessions</div>
                
            <small className='text-light'>Advanced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>REST APIs</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>Design Pattern</h4>
                <div className='text-desc text-light'>MVC, MVVM</div>
                
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>NodeJs</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
                <h4>Laravel</h4>
                <div className='text-desc text-light'>APIs, Resources, Auth</div>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
      </div>
      </div>
      
    </section>
  )
}

export default Experience