import React from "react";
import "../css/MainPage.css";
import { Link } from 'react-router-dom';


function MainPage() {
  return (
    <div className="banners">
      <div className="contents">
        <h1>SERVING ALL YOUR TELECOMMUNICATION NEEDS</h1>
        <p>Carried out by Licensed Installer</p>
        <div>
          <Link to="/offers">
            <button><span></span>Current Offers</button>
          </Link>

          <Link to="/products">
            <button><span></span>Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
