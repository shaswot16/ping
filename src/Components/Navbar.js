import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from './Svg_files/pinglogo.svg';
import YourSvg from "./Svg_files/pinglogo.svg";

import './Navbar.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const [scrolling,setScrolling]=useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">
                    <img src={YourSvg} alt="Your SVG" />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    ##
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar