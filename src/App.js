import './sass/App.scss';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import TrendingTopics from './components/TrendingTopics';


 export default function App(){
    return(
      <div className="App">
        <Navbar />
        <div className="hero-newsletter-container">
        <Hero />
        <Newsletter />
      </div>
          <TrendingTopics />
        
        </div>
    )

 }

