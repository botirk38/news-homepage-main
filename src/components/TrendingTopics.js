import React from 'react';
import retro from '../images/image-retro-pcs.jpg';
import laptops from '../images/image-top-laptops.jpg';
import gaming from '../images/image-gaming-growth.jpg';
import '../sass/componentStyling/trendingTopics.scss';

export default function TrendingTopics(){
    return(
        <section className="trending-topics">
            <div className="trending-topics-item">
                <img src={retro} alt="retro" />
                    <div className="trending-topics-item-text">
                        <h1>01</h1>
                        <h2>Reviving Retro PCs</h2>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
            </div>
            <div className="trending-topics-item">
                <img src={laptops} alt="laptops" />
                    <div className="trending-topics-item-text">
                        <h1>02</h1>
                        <h2>Top 10 Laptops of 2022</h2>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
            </div>

            <div className="trending-topics-item">
                    <img src={gaming} alt="gaming-growth" />
                    <div className="trending-topics-item-text">
                        <h1>03</h1>
                        <h2>The Growth of Gaming</h2>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
            </div>


            </section>


            )

}