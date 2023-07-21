import React from 'react';
import desktopImg from '../images/image-web-3-desktop.jpg';
import '../sass/componentStyling/hero.scss';

export default function Hero(){
    return(
        <section className="hero">
            <div className="img-container">
            <img src={desktopImg} alt="hero" />
            </div>
            <div className="hero-text">
                    <h1 className="hero-title">The Bright Future of Web 3.0?</h1>
                    <div className="hero-text-button">
                        <p className="hero-paragraph"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                        But is it really fulfilling its promise?</p>
                        <button className="hero-button">Read More</button>
                    </div>
                    </div>

        </section>
            )

}