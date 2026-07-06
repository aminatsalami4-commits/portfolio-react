import React from 'react'
import Card6 from "../components/Card6.jsx"

import img1 from '../assets/me-contact.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { FaEnvelope } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { BiCertification } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="mt-5" style={{height: "auto", overflow: "hidden"}}>

      <div className="mb-3">
        <h3 className='text-danger text-center mb-0' style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px", paddingTop: "1rem"}}><b>Resume</b></h3>
          <h2 className='text-white text-center'  style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}>A brief review of my background, qualifications and skills</h2>
      </div>

      <div className="row d-flex gap-5">
        <div className="col-md-4 d-flex flex-column ps-2">
          <Card6 
            img={img1}
            title1="Professional Summary"
            body="Transforming ideas into digital realities: a summary of my expertise.
            A passionate developer with a keen eye for detail and a commitment to creating exceptional user experiences."
            title2="Contact Information"
            body2={
              <>
                <div className="d-flex align-items-center gap-3 mb-1">
                  <i className="p-2">< FaLocationDot size={20} color='white' /></i>
                  <p className="card-text text-light">Lagos, Nigeria</p>
                </div>

                <div className="d-flex align-items-center gap-3 mb-1">
                  <i className="p-2">< FaEnvelope size={20} color='white' /></i>
                  <p className="card-text text-light">aminatsalami4@gmail.com</p>
                </div>

                <div className="d-flex align-items-center gap-3 mb-1">
                  <i className="p-2">< FaPhone size={20} color='white' /></i>
                  <p className="card-text text-light">+234 702 657 8749</p>
                </div>

                <div className=" d-flex align-items-center gap-3">
                  <i className="p-2">< FaLinkedin
                   size={20} color='white' /></i>
                  <p className="card-text text-light">linkedin.com/in/salami-aminat-62749b192/</p>
                </div>
              </>
            }

            title3="Technical Skills"
            body3={
              <>
                <div className="">
                  <div className="d-flex justify-content-between mt-3">
                    <span className="fw-semibold text-light">Web Development</span>
                    <span className="fw-semibold text-light">85%</span>
                  </div>

                  <div className="progress" 
                  style={{height: "10px", backgroundColor: "#998989", borderRadius: "10px"}}>
                    <div className="progress-bar" role="progressbar" style={{height: "10px", width: "85%", backgroundColor: "#dc3545", borderRadius: "10px"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="d-flex justify-content-between mt-5">
                    <span className="fw-semibold text-light">Software Engineering</span>
                    <span className="fw-semibold text-light">70%</span>
                  </div>

                  <div className="progress" 
                  style={{height: "10px", backgroundColor: "#998989", borderRadius: "10px"}}>
                    <div className="progress-bar" role="progressbar" style={{height: "10px", width: "70%", backgroundColor: "#dc3545", borderRadius: "10px"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between mt-5">
                    <span className="fw-semibold text-light">UI/UX Design</span>
                    <span className="fw-semibold text-light">65%</span>
                  </div>

                  <div className="progress" 
                  style={{height: "10px", backgroundColor: "#998989", borderRadius: "10px"}}>
                    <div className="progress-bar" role="progressbar" style={{height: "10px", width: "65%", backgroundColor: "#dc3545", borderRadius: "10px"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                </div>

              </>
            }

          />
        </div>

        <div className="col-md-5 d-flex flex-column bg-black rounded position-relative" style={{ marginTop: '3rem', height: '100%', width: '36rem'}}>
          
          <div>
            <div className="d-flex align-items-center gap-2 ms-2 mt-3 mb-2">
              <i className="">< FaEnvelope size={20} color='white' /></i>
              <h3 className="text-danger mt-1">Professional Experience</h3>
            </div>
              
            <div className="d-flex align-items-center">
              <div>
                <div className='bg-danger position-absolute' style={{top: "4rem", left: "1.2rem", height: "18px", width: "18px", borderRadius: "50%"}}></div>
                <div className='position-absolute border border-2 border-light opacity-25' style={{top: "5.08rem", left: "1.65rem", height: "5.2rem"}}></div>
              </div>

              <div className="ms-5 text-white">
                <h5 className="mb-3">Gauth Expert Online Tutors</h5>
                <h6 className="mb-3">Mathematic Tutor</h6>
                <p className="mb-3">2021 - Date</p>
              </div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <div>
                <div className='bg-danger position-absolute' style={{top: "12.2rem", left: "1.2rem", height: "18px", width: "18px", borderRadius: "50%"}}></div>
                <div className='position-absolute border border-2 border-light opacity-25' style={{top: "13.28rem", left: "1.65rem", height: "6.7rem"}}></div>
              </div>

              <div className="ms-5 text-white">
                <h5 className="mb-3">International College of Arts, Science and Technology (ICAST)</h5>
                <h6 className="mb-3">Mathematic Tutor</h6>
                <p className="mb-3">2017 - 2020</p>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex align-items-center gap-2 ms-2 mt-3 mb-2">
              <i className=""> <MdCastForEducation size={20} color='white' /></i>
            <h3 className="text-danger mt-1">Education</h3>
            </div>
              
            <div className="d-flex align-items-center">
              <div>
                <div className='bg-danger position-absolute' style={{top: "25.2rem", left: "1.2rem", height: "18px", width: "18px", borderRadius: "50%"}}></div>
                <div className='position-absolute border border-2 border-light opacity-25' style={{top: "26.28rem", left: "1.65rem", height: "6.7rem"}}></div>
              </div>

              <div className="ms-5 text-white">
                <h5 className="mb-3">Federal University of Agriculture, Abeokuta, FUNAAB</h5>
                <h6 className="mb-3">Bachelor of Science in Mathematics</h6>
                <p className="mb-3">2011 - 2015</p>
              </div>
            </div>
          </div>
          

          <div>
            <div className="d-flex align-items-center gap-2 ms-2 mt-3 mb-2">
              <i className=""><BiCertification size={20} color='white' /></i>
            <h3 className="text-danger mt-1">Certifications</h3>
            </div>
              
            <div className="d-flex align-items-center">
              <div>
                <div className='bg-danger position-absolute' style={{top: "38.5rem", left: "1.2rem", height: "18px", width: "18px", borderRadius: "50%"}}></div>
                <div className='position-absolute border border-2 border-light opacity-25' style={{top: "39.58rem", left: "1.65rem", height: "2.7rem"}}></div>

                <div className='bg-danger position-absolute' style={{top: "43.5rem", left: "1.2rem", height: "18px", width: "18px", borderRadius: "50%"}}></div>
                <div className='position-absolute border border-2 border-light opacity-25' style={{top: "44.58rem", left: "1.65rem", height: "2.7rem"}}></div>

                <div className='bg-danger position-absolute' style={{top: "48.5rem", left: "1.2rem", height: "18px", width: "18px", borderRadius: "50%"}}></div>
                <div className='position-absolute border border-2 border-light opacity-25' style={{top: "49.58rem", left: "1.65rem", height: "2.7rem"}}></div>
              </div>

                <div className="d-flex flex-column">
                  <div className="ms-5 text-white">
                    <h5 className="mb-3">Lagos School of Programming. LASOP</h5>
                    <p className="mb-3">2026</p>
                  </div>

                  <div className="ms-5 text-white">
                    <h5 className="mb-3">Lagos School of Programming. LASOP</h5>
                    <p className="mb-3">2026</p>
                  </div>

                  <div className="ms-5 text-white">
                    <h5 className="mb-3">Lagos School of Programming. LASOP</h5>
                    <p className="mb-3">2026</p>
                  </div>
                </div>
            </div>
          </div>
          
      



        </div>
      </div>
          

    </div>

  )
}

export default Resume