import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "./Hero.js";

import Footer from '../components/Footer';
import Trip from '../components/Trip';
import {data} from "./data.js";
import './Service.css';
function Service(){


    return(
        <>
          <Hero 
        cName="hero-midd"
        heroImg="https://images.unsplash.com/photo-1602693680104-b8ae3138c22b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        title="Service"
        btnClass="hide"
        />
          
        {/* <div className='trip'>

        <h1>Recent Trip</h1>
        <p>You can discover unique Destination using Google Maps.</p>
        </div> */}
          {/* <Navbar1  product={data} /> */}
          <Navbar/>
      
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;
