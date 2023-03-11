import React from 'react'
import './project.css'

function Project() {
  return (
    <div className="project">
      <div className="project_img">
        <img className='pro_img' src="https://www.urbansciencemep.com/_next/static/images/project2-6173d2e661e4f2bcec88e0ceaac8f29b.jpg" alt="" />
      </div>
      <div className="project_content">
        <h1 className='pro_h1'>Projects</h1>
      </div>
      <div className="pro_mid">
        <div className="letter_holder">
          <h2 className='m'>M</h2>
          <h2 className='e'>E</h2>
          <h2 className='p'>P</h2>
        </div>
      </div>
    </div>
  )
}

export default Project