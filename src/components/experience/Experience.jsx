import React, { useState } from 'react';
import './experience.css';
import { IoLogoHtml5 } from 'react-icons/io';
import { SiCss3 } from 'react-icons/si';
import { AiFillCloud } from 'react-icons/ai';
import { FaDatabase } from 'react-icons/fa';
import IMG1 from '../../assets/py-logo.png';
import INTRN1 from '../../assets/certficate/intern1.png';
import INTRN2 from '../../assets/certficate/intern2.png';
import INTRN3 from '../../assets/certficate/forage1.png';
import INTRN4 from '../../assets/certficate/forage2.png';
import CERT1 from '../../assets/certficate/guvi.png';
import CERT2 from '../../assets/certficate/cisco1.png';
import CERT3 from '../../assets/certficate/ec.png';
import Badge1 from '../../assets/certficate/badge1.png';
import INTRNlogo from '../../assets/certficate/internlogo.png';
import Modal from './Modal'; // Adjust path as needed

const Experience = () => {
  const [modal, setModal] = useState({ isOpen: false, src: '', alt: '' });

  const openModal = (src, alt) => {
    setModal({ isOpen: true, src, alt });
  };

  const closeModal = () => {
    setModal({ isOpen: false, src: '', alt: '' });
  };

  return (
    <section id="experience">
      <h5>Skills & Abilities</h5>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoHtml5 size="1.5em" color="#ff5722" />
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <SiCss3 size="1.5em" color="#0027ff" />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <div className="centered">
                <img src={IMG1} alt="Python Logo" style={{ width: '27px', height: '27px' }} />
              </div>
              <h4>Python</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">
              <FaDatabase size="1.5em" color="#00A3FF" />
              <h4>SQL</h4>
              <small className="text-light">Basics</small>
            </article>
            <article className="experience__details">
              <AiFillCloud size="1.5em" color="" />
              <h4>Cloud</h4>
              <small className="text-light">Basics</small>
            </article>
          </div>
        </div>
      </div>
      <h6>Internship & Job Simulation</h6>
      <h3>Click on View to See Certification</h3>
      <div className="container achievement__container2">
        <article className='achievement__item'>
          <img
            src={INTRNlogo}
            alt="Ec intrn"
            onClick={() => openModal(INTRN1, "EC intrn")}
            style={{ marginTop:'50px', marginBottom:'57px',cursor: 'pointer' }}
          />
          <h3>Ethical Hacking and Cyber Security</h3>
          <div className="achievement__item-cta">
            <button
              className='btn btn-1'
              onClick={() => openModal(INTRN1, "EC intrn")}
            >
              View
            </button>
          </div>
        </article>
        <article className='achievement__badge'>
          <img
            src={INTRN2}
            alt="python intrn"
            onClick={() => openModal(INTRN2, "python intrn")}
            style={{ cursor: 'pointer' }}
          />
          <h3>Python Development</h3>
          <div className="achievement__item-cta">
            <button
              className='btn btn-1'
              onClick={() => openModal(INTRN2, "python intrn")}
            >
              View
            </button>
          </div>
        </article>
        <article className='achievement__badge'>
          <img
            src={INTRN3}
            alt="Networking Basics"
            onClick={() => openModal(INTRN3, "Ethical Hacking Essentials (EHE)")}
            style={{ cursor: 'pointer' }}
          />
          <h3>Software Engineering Lite Job Simulation</h3>
          <div className="achievement__item-cta">
            <button
              className='btn btn-1'
              onClick={() => openModal(INTRN3, "Ethical Hacking Essentials (EHE)")}
            >
              View
            </button>
          </div>
        </article>
        <article className='achievement__badge'>
          <img
            src={INTRN4}
            alt="Networking Basics"
            onClick={() => openModal(INTRN4, "Ethical Hacking Essentials (EHE)")}
            style={{ cursor: 'pointer' }}
          />
          <h3>Software Engineering Lite Job Simulation on Web Development</h3>
          <div className="achievement__item-cta">
            <button
              className='btn btn-1'
              onClick={() => openModal(INTRN4, "Ethical Hacking Essentials (EHE)")}
            >
              View
            </button>
          </div>
        </article>
      </div>
      <h6>Certifications</h6>
      <h3>Click on View to See Certification</h3>
      <div className="container achievement__container">
        <article className='achievement__item'>
          <img
            src={CERT1}
            alt="Python Certification from GUVI"
            onClick={() => openModal(CERT1, "Python Certification from GUVI")}
            style={{ marginTop:'50px' ,cursor: 'pointer' }}
          />
          <h3>Python Certification from GUVI</h3>
          <div className="achievement__item-cta">
            <button
              className='btn btn-1'
              onClick={() => openModal(CERT1, "Python Certification from GUVI")}
            >
              View
            </button>
          </div>
        </article>
        <article className='achievement__badge'>
          <img
            src={Badge1}
            alt="Networking Basics"
            onClick={() => openModal(Badge1, "Networking Basics")}
            style={{ cursor: 'pointer' }}
          />
          <h3>Networking Basics</h3>
          <div className="achievement__item-cta">
            <button
              className='btn btn-1'
              onClick={() => openModal(CERT2, "Networking Basics")}
            >
              View
            </button>
          </div>
        </article>
        <article className='achievement__badge'>
          <img
            src={CERT3}
            alt="Networking Basics"
            onClick={() => openModal(CERT3, "Ethical Hacking Essentials (EHE)")}
            style={{ marginTop:'50px',cursor: 'pointer' }}
          />
          <h3>Ethical Hacking Essentials (EHE)</h3>
          <div className="achievement__item-cta">
            <button
              className='btn btn-1'
              onClick={() => openModal(CERT3, "Ethical Hacking Essentials (EHE)")}
            >
              View
            </button>
          </div>
        </article>
        
      </div>

      {/* Modal */}
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        src={modal.src}
        alt={modal.alt}
      />
    </section>
  );
};

export default Experience;
