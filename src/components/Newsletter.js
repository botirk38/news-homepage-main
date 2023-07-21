import React from "react";
import "../sass/componentStyling/newsletter.scss";

export default function Newsletter() {

    return(
        <section className="newsletter">
            <h1>New</h1>
            <div className="newsletter-item">
                <h2>Hydrogen VS Electric Cars</h2>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <br/>
            <div className="newsletter-item">
                <h2> The Downsides of AI Artistry</h2>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <br/>
            <div className="newsletter-item">
                <h2>Is VC Funding Drying Up?</h2>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>                
            </section>
            )

}