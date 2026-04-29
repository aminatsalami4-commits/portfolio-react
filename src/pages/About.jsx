import React, { useEffect } from 'react';
import Card from "../components/Card.jsx"
import { useNavigate } from 'react-router-dom';
import * as bootstrap from 'bootstrap';

import img1 from '../assets/me-about2.jpg'
import { GoDownload } from "react-icons/go";
import { LuMessageCircleMore } from "react-icons/lu";

const About = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    const tooltipList = Array.from(tooltipTriggerList).map(
      (el) => new bootstrap.Tooltip(el)
    );

    return () => {
      tooltipList.forEach(t => t.dispose())
    };

  }, [])


  return (
    <div className="container-fluid">
      {/* Add top spacing on medium/small screens to avoid overlap with hero */}
      <div className="d-lg-none pt-5"></div>

      <div className="row justify-content-center align-items-center">
        {/* Image section - hidden on small/medium, shown on large screens */}
        <div className="col-lg-4 d-none d-lg-block">
          <div className="d-flex justify-content-center">
            <Card
              img={img1}
              title="Aminat Adetunji"
              description="Freelancer & Full Stack Developer."
            />
          </div>
        </div>

        {/* Content section */}
        <div className="col-12 col-lg-8" style={{ paddingLeft: '3rem' }}>
          <div className="d-flex flex-column justify-content-center align-items-start">
            <div className="mb-4">
              <h3 className='text-danger' style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px", paddingTop: "1rem"}}><b>Discover</b></h3>
              <h2 className='text-white mb-3' style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}>About Me</h2>
              <p className='text-white' style={{fontFamily: "'Poppins', sans-serif", fontSize: "20px"}}>My name is Aminat Adetunji, I am a freelance Full Stack Developer based in Lagos, Nigeria. I am very passionate and dedicated to my work and I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
            </div>

            <ul className="list-unstyled text-white mx-auto row row-cols-1 row-cols-lg-2 g-3 border border-danger rounded p-3 p-lg-4 w-100 w-lg-75" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "small" }}>
              <li className="col">Name: Aminat Adetunji</li>
              <li className="col">Phone: +2347026578749</li>
              <li className="col">Email: aminatsalami4@gmail.com</li>
              <li className="col">Experience: Entry Level</li>
              <li className="col">Address: Lagos, Nigeria</li>
              <li className="col">Freelance: Available</li>
            </ul>

            {/* Buttons section */}
            <div className="d-flex flex-column flex-sm-row justify-content-md-center gap-2 gap-sm-5 mb-4 ms-sm-5" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <a href="myCV.pdf" download='AMINAT CV' style={{textDecoration: 'none'}}>
                <button type="download" className="btn btn-danger btn-lg d-flex align-items-center gap-2 text-black">
                  <GoDownload size={20} />
                  <b>Download CV</b>
                </button>
              </a>

              <button type="button" className="btn btn-danger btn-lg d-flex align-items-center gap-2 text-black" onClick={() => navigate("/contact")}>
                <LuMessageCircleMore size={20} />
                <b>Let's Talk</b>
              </button>
            </div>

            {/* Image section - shown on small/medium screens below buttons */}
            <div className="col-12 d-lg-none mb-4">
              <div className="d-flex justify-content-center">
                <Card
                  img={img1}
                  title="Aminat Adetunji"
                  description="Freelancer & Full Stack Developer."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 className='text-danger text-center mb-0' style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px", paddingTop: "1rem"}}><b>Skills</b></h3>
          <h2 className='text-white text-center mb-4' style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}>The core technologies I use to build modern web applications for startups and growing teams</h2>

          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4">

            <div className="bg-dark p-4 pb-5 rounded" style={{width: "100%", maxWidth: "26rem"}}>

              <h4 className='text-white text-start mt-3' style={{fontFamily: "'Poppins', sans-serif", fontSize: "22px"}}>Front-end Development</h4>

              <div className="">
                <div className="d-flex justify-content-between mt-5">
                  <span className="fw-semibold text-light">HTML/CSS</span>
                  <span className="fw-semibold text-light">85%</span>
                </div>

                <div className="progress"
                  style={{height: "10px", backgroundColor: "#998989", borderRadius: "10px"}}
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-tooltip"
                  title="Strong foundation in HTML and modern CSS for creating responsive and visually appealing web layouts."
                >
                  <div className="progress-bar" role="progressbar" style={{height: "10px", width: "85%", backgroundColor: "#dc3545", borderRadius: "10px"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>

              <div className="">
                <div className="d-flex justify-content-between mt-5">
                  <span className="fw-semibold text-light">JavaScript</span>
                  <span className="fw-semibold text-light">75%</span>
                </div>

                <div className="progress"
                  style={{height: "10px", backgroundColor: "#998989", borderRadius: "10px"}}
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-tooltip"
                  title="Dynamic and interactive functionality using modern JavaScript frameworks."
                >
                  <div className="progress-bar" role="progressbar" style={{height: "10px", width: "75%", backgroundColor: "#dc3545", borderRadius: "10px"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>

              <div className="">
                <div className="d-flex justify-content-between mt-5">
                  <span className="fw-semibold text-light">React</span>
                  <span className="fw-semibold text-light">80%</span>
                </div>

                <div className="progress"
                  style={{height: "10px", backgroundColor: "#998989", borderRadius: "10px"}}
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-tooltip"
                  title="Building dynamic user interfaces with React components and hooks."
                >

                  <div className="progress-bar" role="progressbar" style={{height: "10px", width: "80%", backgroundColor: "#dc3545", borderRadius: "10px"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-dark p-4 pb-5 rounded" style={{width: "100%", maxWidth: "26rem"}}>

              <h4 className='text-white text-start mt-3' style={{fontFamily: "'Poppins', sans-serif", fontSize: "22px"}}>Back-end Development</h4>

              <div className="">
                <div className="d-flex justify-content-between mt-5">
                  <span className="fw-semibold text-light">Node.js</span>
                  <span className="fw-semibold text-light">70%</span>
                </div>

                <div className="progress"
                  style={{height: "10px", backgroundColor: "#998989", borderRadius: "10px"}}
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-tooltip"
                  title="Building scalable backend services and APIs using Node.js."
                >
                  <div className="progress-bar" role="progressbar" style={{height: "10px", width: "70%", backgroundColor: "#dc3545", borderRadius: "10px"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>

              <div className="">
                <div className="d-flex justify-content-between mt-5">
                  <span className="fw-semibold text-light">Python</span>
                  <span className="fw-semibold text-light">60%</span>
                </div>

                <div className="progress"
                  style={{height: "10px", backgroundColor: "#998989", borderRadius: "10px"}}
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-tooltip"
                  title="Proficient in Python for backend development."
                >
                  <div className="progress-bar" role="progressbar" style={{height: "10px", width: "60%", backgroundColor: "#dc3545", borderRadius: "10px"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>

              <div className="">
                <div className="d-flex justify-content-between mt-5">
                  <span className="fw-semibold text-light">SQL</span>
                  <span className="fw-semibold text-light">60%</span>
                </div>

                <div className="progress"
                  style={{height: "10px", backgroundColor: "#998989", borderRadius: "10px"}}
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-tooltip"
                  title="Experienced in designing and managing databases with SQL."
                >
                  <div className="progress-bar" role="progressbar" style={{height: "10px", width: "60%", backgroundColor: "#dc3545", borderRadius: "10px"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About