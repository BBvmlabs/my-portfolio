import React from 'react'
import './achievement.css'
import IMG1 from '../../assets/port1.png'
 import IMG2 from '../../assets/port2.png'
import IMG3 from '../../assets/port3.png'

// import IMG6 from '../../assets/portfolio6.jpg'


const Achievement = () => {
  return (
    <section id='achievement'>
      <h5>My Work</h5>
      {/* <h2>Achievement</h2> */}

      <div className="container achievement__container">
        

      <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>College Enquiry Chatbot </h3>
          <div className="achievement__item-cta">
          <a href="https://github.com/BBvmlabs/College-Chatbot.git" className='btn btn-1 ' target='_blank'>Code</a>
          </div>
        </article>
        
        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Movie Streaming </h3>
          <div className="achievement__item-cta">

          <a href="https://github.com/BBvmlabs/Movie-Streaming.git" className='btn btn-1 ' target='_blank'>Code</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG3} alt="" 
            style ={{marginTop:'25px'}}/>
          </div>
          <h3 >Loan Calculator</h3>
          <div className="achievement__item-cta">
          <a src={IMG3}className='btn btn-1 ' target='_blank'>Under Development</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Achievement