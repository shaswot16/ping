import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className='footerContainer'>
      <div className='socialMedia'>
        follow us on <FaFacebook className='icon facebook' />
        <FaInstagram className='icon instagram' />
      </div>
      
      <div className='pingLogo'>
        ping logo
      </div>
      <div className='about'>
        <h1>Ping Company</h1>
        <p>
          Ultimate solution for your cctv installment requirement
        </p>
      </div>
      <div className='newletter'>
        <form>
          <label for="newsletter">Subscribe : </label>
          <input type='email' id='newsletter' name='newsletter' />
          <button type="button">Subscribe</button>

        </form>
      </div>
    </footer>
  );
}