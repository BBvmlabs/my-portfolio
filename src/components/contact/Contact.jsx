import React, { useRef } from 'react';
import './contact.css';
import { GrMail } from 'react-icons/gr';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_75fiyko', 'template_fr496fi', form.current, 'grPF7WVoKagMMEZVr')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Let's get Connect</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GrMail className='contact__option-icon' color='#f44336' />
            <h4>Email</h4>
            <a href="mailto:badhrinarayanansankar@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* ===========End of Contact option ============== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-1'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
