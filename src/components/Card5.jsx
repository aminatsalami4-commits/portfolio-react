import React from 'react'
import { Link } from 'react-router-dom'

function Card5({ title, description, form, button }) {

  return (
    <div className="card mx-auto bg-dark"  style={{ marginTop: '3rem', height: '30rem', width: '33rem', position: 'relative'}}>
      <div className="card-body text-start text-white">
        <h5 className="card-title" style={{fontFamily: "'Roboto', sans-serif", fontSize: "24px"}}>{title}</h5>
        <p className="card-text text-light">{description}</p>
        <div className="card-body d-flex flex-column py-2 align-items-start gap-3">{form}</div>
      </div>
        <button className="text-black btn btn-danger btn-lg border rounded-pill" type='submit' style={{position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)'}}>{button}</button>
    </div>

  )
}

export default Card5