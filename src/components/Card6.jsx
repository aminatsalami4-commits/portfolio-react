import React from 'react'

function Card6({ img, title1, body, title2, body2, title3, body3, }) {
  return (
    <div className="card mx-auto bg-dark" style={{ marginTop: '3rem', height: '100%', width: '20rem'}}>
        
        <div className="card-body text-start text-white">
            <img src={img} alt="Aminat Adetunji" className="card-img-top mb-3 my-3 mx-auto" style={{height: '18rem', width: '18rem', borderRadius: '50%', objectFit: 'cover'}} />
            <h5 className="card-title text-danger ps-3" style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px"}}>{title1}</h5>
            <p className="card-text text-light mb-4 mx-auto ps-3">{body}</p>
            <h5 className="card-title text-danger ps-3" style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px"}}>{title2}</h5>
            <div className="card-text mb-4 d-flex flex-column align-items-start gap-1 ps-3">{body2}</div>

            <h5 className="card-title text-danger ps-3" style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px"}}>{title3}</h5>
            <p className="card-text text-light mb-4 ps-3">{body3}</p>    
        </div>
    </div>
    
  )
}

export default Card6