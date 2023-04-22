import React from 'react';
import './skills.css';

function Skills() {
  return (
    <section className="skills section">
      <h5 className="section__subtitle">My Skills</h5>
      <h2 className="section__title">Skills</h2>

      <div className="skills__container container grid">
        <div className="skills__data">
          <div className="skills__info">

            <div className="skills__box">
              <i className='bx bx-bowl-hot skills__icon'></i>
              <h3 className="skills__title">Problem Solving</h3>
            </div>

            <div className="skills__box">
              <i className='bx bx-chat skills__icon'></i>
              <h3 className="skills__title">Communication</h3>
            </div>

            <div className="skills__box">
              <i className='bx bx-desktop skills__icon'></i>
              <h3 className="skills__title">Self Learning</h3>
            </div>

            <div className="skills__box">
              <i className='bx bx-objects-horizontal-right skills__icon'></i>
              <h3 className="skills__title">Leadership</h3>
            </div>

            <div className="skills__box">
              <i className='bx bx-group skills__icon'></i>
              <h3 className="skills__title">Teamwork</h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
