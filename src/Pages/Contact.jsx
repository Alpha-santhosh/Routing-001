import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="Con_left">
        <h1 className='Contact_h1'>| Connect With Us</h1>
        <div className="enquiry">
          <h5>Enquiry </h5>
          <div className="detail">
            <div className="mail"> enquiry@urbansciencemep.com</div>
            <div className="phone"> 0509418224</div>
          </div>
          <hr />
        </div>
        <div className="enquiry">
          <h5>Procurement Team</h5>
          <div className="detail">
            <div className="mail">  urbansciencemep@gmail.com</div>
            <div className="phone"> +971 543565450</div>
          </div>
          <hr />
        </div>
        <div className="enquiry">
          <h5>General Enquiry</h5>
          <div className="detail">
            <div className="phone">  0509418224</div>
          </div>
          <hr />
        </div>
      </div>
      <form action="">
        <label htmlFor="">Name</label>
        <input required type="text" />

        <label htmlFor="">Email</label>
        <input required type="email" />

        <label htmlFor="">Country</label>
        <select name="country" id="sound" class="selection"><option>UAE</option><option>India</option><option>etc</option></select>

        <label htmlFor="">Contact number</label>
        <input required type="number" />

        <label htmlFor="">Expected date</label>
        <input required type="date" />
        
        <label htmlFor="msg">Message</label>
        <textarea name="msg" id='textbo' cols="70" rows="10"></textarea>

        <button class="submit_btn">Submit</button>
      </form>
    </div>
  )
}

export default Contact