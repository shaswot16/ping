import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className='footerContainer'>
      <div className='col-1'>
        <h3>USEFUL LINKS</h3>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className='col-2'>
        <h3>NEWSLETTER</h3>
        <form>
          <input type="email" placeholder='Your Email Address' required></input>
          <br></br>
          <button type="submit"><span></span>SUBSCRIBE NOW</button>
        </form>
      </div>
      <div className='col-3'>
        <h3>CONTACT</h3>
        <p>123, XYZ Road, BSK 3 </p><p>Melbrone, Australia</p>
        <div className='socialMedia'>
          <FaFacebook className='icon facebook' />
          <FaInstagram className='icon instagram' />
          <FaTwitter className='icon twitter' />
        </div>
      </div>
    </footer>
  );
}