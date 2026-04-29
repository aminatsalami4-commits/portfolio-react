import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/error404.gif'


function Error() {

    const container = {
        width: '100%',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
    }

    const imgContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '1000%',
    }

    const btn = {
        textAlign: 'center',
        padding: '8px 12px',
        borderRadius: '10px',
        backgroundColor: "hsl(300, 100%, 50%)",
        fontSize: '1rem',
        fontweight: '600',
        border: 'none',
        cursor: 'pointer',
    }

  return (
    <div style={container}>
        <div style={imgContainer}>
            <img src={img} alt="Error 404" style={{width: "50rem"}}/>
        </div>

        <div style={{textAlign: "center"}}>
            <Link to="/">
                <button style={btn}>
                    Back to Homepage
                </button>
            </Link>
        </div>
        
    </div>
  )
}

export default Error