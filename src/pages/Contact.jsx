import React from 'react'
import { useState } from "react";
import emailjs from '@emailjs/browser';

import Card4 from "../components/Card4.jsx"
import Card5 from "../components/Card5.jsx"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";





const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // You can integrate EmailJS or API here later
    emailjs.send(
      'service_r89beqg',
      'template_1loizjn',
      {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      'Ai9s1ba5p_6Qw25Mj'
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FULL ERROR:", error);
        alert(error.text || "Failed to send message. Please try again.");
      });
  };
  
  return (
    <div className="my-5" style={{height: "auto", overflow: "hidden"}}>
      <div className="">
        <div>
          <h3 className='text-danger text-center mt-3 mb-0' style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px", paddingTop: "1rem"}}><b>Contact</b></h3>
            <h2 className='text-white text-center'  style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}>Let's take your project to the next level</h2>
        </div>

        <div className="container py-5">
          <div className="row justify-content-center">
            
            {/* Contact Info Card */}
            <div className="col-12 col-md-8 col-lg-6 mb-5">
              <Card4 
                title="Contact Info"
                description="Feel free to reach out via email or phone, I'm always open for discussions and collaborations. Let's bring your idea to life."
                body={
                  <>
                    <div className="contact-info d-flex align-items-center gap-4 mb-4">
                      <i className="rounded-circle bg-danger p-2 justify-content-center align-items-center">< FaLocationDot size={20} color='white' /></i>
                      <div className="d-flex flex-column align-items-start">
                        <h6 className="card-subtitle mb-1">Location</h6>
                        <p className="card-text text-light">Lagos, Nigeria</p>
                      </div>
                    </div>
                        
                    <div className="contact-info d-flex align-items-center gap-4 mb-4">
                      <i className="rounded-circle bg-danger p-2 justify-content-center align-items-center">< FaPhone size={20} color='white' /></i>
                      <div className="d-flex flex-column align-items-start">
                        <h6 className="card-subtitle mb-1">Phone Number</h6>
                        <p className="card-text text-light mb-1">+2347026578749</p>
                        <p className="card-text text-light mb-1">+2347043276107</p>
                      </div>
                    </div>

                    <div className="contact-info d-flex align-items-center gap-4">
                      <i className="rounded-circle bg-danger p-2 justify-content-center align-items-center">< FaEnvelope size={20} color='white' /></i>
                      <div className="d-flex flex-column align-items-start">
                        <h6 className="card-subtitle mb-1">Email Address</h6>
                        <p className="card-text text-light mb-1">aminatsalami4@gmail.com</p>
                        <p className="card-text text-light mb-1">info.zeedigitalsolutions@gmail.com</p>
                      </div>
                    </div>

                  </>
                }
              />
            </div>

            <div className="col-12 col-md-8 col-lg-6 mb-1">
              <div className="bg-black p-4 rounded">
                <h2 className="text-start text-danger mb-2" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "24px" }}>Get In Touch</h2>
                <p className="text-start text-light mb-4">
                  I’m always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out and I’ll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit}>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>

                   <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      id="message"
                      name="message"
                      style={{ height: "120px" }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>
                  
                  <div className="d-flex justify-content-center mb-1 pb-5">
                    <button type="submit" className="mx-auto btn btn-danger btn-lg border rounded-pill">
                      Send Message
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact