import React from 'react'
import "./Body.css"
import YourSvg from "./Svg_files/pinglogo.svg";
import arrow from "./Images/arrow.png";
function Body() {
    return (
        <div className='body'>
                <div className='banner'>
                <div className='navBar'> 
                    <img src={YourSvg} alt="Your SVG" class="logo"/>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="Contact">Contact</a></li>
                        <li><a href="About">About</a></li>                        
                    </ul>
                </div>
                <div className="content">
                    <h1>SERVING ALL YOUR TELECOMMUNICATION NEEDS</h1>
                    <p>Carried out by Licensed Installer</p>
                    <div>
                        <button type="button"><span></span>GALLERY</button>
                        <button type="button"><span></span>SUBSCRIBE</button>
                    </div>
                </ div>
                </div>
                <section className="product"> 
        <h2 class="product-category">best selling</h2>
        <button class="pre-btn"><img src={arrow} alt=""></img></button>
        <button class="nxt-btn"><img src={arrow} alt=""></img></button>
        <div class="product-container">s
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="images/card6.jpg" class="product-thumb" alt=""></img>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="images/card7.jpg" class="product-thumb" alt=""></img>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="images/card8.jpg" class="product-thumb" alt=""></img>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="images/card9.jpg" class="product-thumb" alt=""></img>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="images/card10.jpg" class="product-thumb" alt=""></img>
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                </div>
            </div>
        </div>
    </section>
                </div>
    )
}

export default Body