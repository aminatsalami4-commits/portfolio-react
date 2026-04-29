import React from 'react'

function Card2({ img, title, description }) {
  return (
    <div className="w-100">
      <div className="card border-0 text-center w-100" style={{
        backgroundColor: "#242424",
        boxShadow: "0 0 20px rgba(248, 5, 5, 0.27)",
        maxWidth: "47rem",
        height: "auto"
      }}>
        <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center'>
          <img 
            className="card-img-top img-fluid m-2" 
            style={{
              height: "auto",
              minHeight: "12rem",
              width: "100%",
              maxWidth: "18rem",
              borderRadius: "2%",
              objectFit: "cover"
            }} 
            src={img} 
            alt={title} 
          />
          <div className="card-body text-center text-white d-flex flex-column justify-content-center">
            <h4 className="card-title text-danger">{title}</h4>
            <h6 className="card-text fw-light">{description}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card2