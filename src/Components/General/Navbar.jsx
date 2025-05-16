import React from "react";
import YourSvg from "../Svg_files/pinglogo.svg";
import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
    return (
        <div className="navBar">
            <div>

            <img src={YourSvg} alt="Your SVG" className="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            </div>
        </div>
    );
}

export default NavBar;