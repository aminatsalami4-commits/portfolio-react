import React from 'react'
import img from "../assets/load-loading.gif"

const Loading = () => {
  return (
    <div className="loading">
      <img src={img} style = {{width: "10rem"}} alt="Loading..." />
    </div>
  )
}

export default Loading
