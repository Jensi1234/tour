import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "./Hero.js";
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
function Home(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="https://www.goodfreephotos.com/albums/united-arab-emirates/dubai/night-skyline-dubai-united-arab-emirates-uae.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText=" Travel Plan"
        utl="/Home"
        btnClass="show"
        
        />
       <Destination />
       <Trip />
       <Footer />
        </>
    )
}

export default Home;
