import React from 'react'
import './home.css'
function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <h1>Leading MEP & Facility management company in Dubai</h1>
          <p>Urban Science is always ready to accept your challenges <br />Meeting your goals is our main objective. Professional services for facility management & MEP works.</p>
          <div className="btns">
            <button className='camp_btn' > Campany Profile</button>
            <button className='vido_btn' > Watch Video</button>
          </div>
        </div>
        <div className="right">
          <img className='heroimg' src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home