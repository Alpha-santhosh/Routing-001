import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <header>
                <div className="hcontact">
                    <a href="" className='Con'>0509418224</a>
                    <a href="" className='Con'>enquiry@urbansciencemep.com</a>
                </div>
            </header>
            <nav>
                <div className="logo">
                    <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="Logo" />
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Project">Project</Link></li>
                    <div className="dropdown">
                        <li>Service</li>
                        <div className="dropdown-content">
                            <li className='li'><Link to="/BulidingService">Building Services</Link></li>
                            <li className='li'><Link to="/FireSystem">Fire System</Link></li>
                            <li className='li'><Link to="/FabSystem">Fabricated System</Link></li>
                        </div>
                    </div>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>

                <button className='navbtn'>Enquire Now</button>
            </nav>
        </div>
    )
}

export default Navbar