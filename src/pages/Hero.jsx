import React from 'react'
import { useNavigate } from 'react-router-dom';
import TypedText from '../components/TypedText';

import img5 from '../assets/me-about.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="row align-items-center min-vh-100">
        <div className="col-12 col-lg-6 text-white">
          <div className="mt-5 pt-5">
            <h1 className="pt-0">Aminat Adetunji</h1>
            <div className="pt-3">
              <h3>I am a <TypedText /></h3>
            </div>
            <p>Welcome to my portfolio website! Feel free to explore my projects and skills.</p>
            <p className="text-white" style={{fontFamily: "'Poppins', sans-serif", fontSize: 20}}>
              My job is to build your website so that it is functional and user-friendly but at the same time attractive. My aim is to bring across your message and identity in the most creative way.
            </p>
          </div>

          <div className="d-flex flex-column flex-sm-row gap-5 mt-5 mb-4 mb-lg-0">
            <button type="button" className="btn btn-danger btn-lg rounded-pill text-black" onClick={() => navigate('/portfolio')}>
              <b>View My Work</b>
            </button>
            <button type="button" className="btn btn-danger btn-lg rounded-pill text-black" onClick={() => navigate('/contact')}>
              <b>Get In Touch</b>
            </button>
          </div>
        </div>

        <div className="col-12 col-lg-6 mt-4 mt-lg-0 pb-5">
          <div className="border border-dark rounded-3 shadow-lg overflow-hidden mx-auto" style={{ maxWidth: '28rem' }}>
            <img src={img5} alt="Aminat Adetunji" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero