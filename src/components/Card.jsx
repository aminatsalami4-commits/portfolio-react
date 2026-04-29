import React from 'react'

function Card({ img, title, description }) {
  return (
    <div>
    
        <div className="card mx-auto bg-dark align-items-center"  style={{ marginTop: '1rem', height: '33rem', width: '24rem', border: '2px solid black', borderRadius: '10px', boxShadow: '-5px 5px 10px rgba(248, 5, 5, 0.85)'}}>
            <img className="card-img-top img-fluid" style={{height: "27rem", width: "100%"}} src={img} alt="Title" />
            <div className="card-body text-center text-white">
                <h4 className="card-title" >{title}</h4>
                <h5 className="card-text" >{description}</h5>
            </div>
        </div>
    
    </div>
  )
}

export default Card