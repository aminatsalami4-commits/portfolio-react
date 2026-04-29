import React from 'react'
import Card2 from "../components/Card2.jsx"
import Card3 from "../components/Card3.jsx"

import img1 from '../assets/CR.jfif'
import img2 from '../assets/UI-UX.jpg'
import img3 from '../assets/me-full-stack.jpg'

const Services = () => {
  return (
    <div className='mt-5 pb-5'>
      <div className="mb-5">
        <h3 className='text-danger text-center mb-0' style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px", paddingTop: "1rem"}}><b>Services</b></h3>
        <h2 className='text-white text-center' style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}>Transforming ideas into digital realities</h2>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">

          <div className="col-12 col-md-10 col-lg-9 d-flex justify-content-center">
            <Card2 
              img={img1}
              title="SOFTWARE ENGINEER"
              description="Building robust, scalable applications with clean code and best practices. Specialized in developing efficient solutions using modern programming languages and design patterns. I focus on code quality, performance optimization, and maintainability to ensure long-term project success."
            />
          </div>

          <div className="col-12 col-md-10 col-lg-9 d-flex justify-content-center">
            <Card3
              title="UI/UX DESIGNER"
              description="Creating beautiful, intuitive interfaces that users love to interact with. I design user-centered experiences with careful attention to usability, accessibility, and visual aesthetics. From wireframes to high-fidelity prototypes, I ensure every interaction feels seamless and delightful."
              img={img2}
            />
          </div>

          <div className="col-12 col-md-10 col-lg-9 d-flex justify-content-center">
            <Card2 
              img={img3}
              title="FULL-STACK WEB DEVELOPER"
              description="End-to-end web solutions from frontend to backend with modern technologies. I build complete web applications using React, Node.js, and various databases. Delivering responsive designs, secure APIs, and scalable architectures that drive business growth."
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services