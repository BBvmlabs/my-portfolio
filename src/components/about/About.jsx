import React from 'react'
import './about.css'
import ME1 from '../../assets/my/half.jpeg'


const About = () => {
  return (
    
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me1">
          <div className="about_me-image">
            <img src={ME1} alt="" style={{padding:"10px",borderRadius:'20px'}} />
          </div>
        </div>

        <div className="about_content">
        <h2> Hello!... I'm </h2>
        
        <h1>Badhri Narayanan Sankar</h1>
         
        <p>    I recently completed my MSc in Computer Science at Bishop Heber College.
          I am passionate about software development and have a strong proficiency in Python. My short-term goal is to become a Python Developer, where I can leverage my skills in HTML, CSS, GIT, OOPs, API, Requests, Beautiful Soup, Django, Cloud, Debugging.
          My long-term aspiration is to become a Full Stack Developer, continuously expanding my knowledge and expertise to handle both front-end and back-end development seamlessly.
          I am always eager to learn new technologies and stay updated with the latest trends in the tech industry. I believe in the power of collaboration and enjoy working in a team environment to solve complex problems and create innovative solutions.
          In my free time just working with My own projects and lisining Music , which helps me unwind and find inspiration for creative problem-solving.
          I am excited to bring my skills and enthusiasm to new challenges and opportunities in the field of Software development.
        </p>
       
          <a href="#contact" className='btn btn-1' >Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default About
