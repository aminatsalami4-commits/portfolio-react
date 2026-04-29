import React from 'react'

function Card4({ title, description, body }) {
  return (
    <div className="card mx-auto bg-dark" style={{ marginTop: '3rem', height: '30rem', width: '24rem'}}>
        
      <div className="card-body text-start text-white">
        <h5 className="card-title" style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px"}}>{title}</h5>
        <p className="card-text text-light mb-4">{description}</p>
        <div className="card-body d-flex flex-column align-items-start gap-3">{body}</div>
                  
      </div>
    </div>
    
  )
}

export default Card4