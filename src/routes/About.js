import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "./Hero.js";
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
function About(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-midd"
        heroImg="https://images.unsplash.com/photo-1536683402757-75f8d0dfa419?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>

        </>
    )
}

export default About;
