import React from 'react';
import logo from '../images/logo.svg';
import '../sass/componentStyling/navbar.scss';

export default function Navbar(){
    return(
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    )
 }