import React from 'react'
import "./Destination.css"
import DestinationData from './DestinationData'
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


const Destination = () => {
    // useEffect(() => {
    //   AOS.init(); // Initialize AOS library
    // }, []);
    
    return(
        <div className="destination" >
            <div data-aos="zoom-in-down" data-aos-duration="1000">
            <h1  > Popular Destination</h1>
            </div>
            <p>Tours give you the opportunity to see a lot , within a time frame.</p>

          <DestinationData
          className="first-des"
          heading="Santorini,Cappadocia"
          text="Santorini, a picturesque island in the Cyclades, is renowned for its enchanting beauty. The iconic whitewashed architecture contrasting against the azure sea, spectacular caldera views, ancient ruins, and delectable Mediterranean cuisine make it a top travel destination.
          Cappadocia, located in Turkey, is a surreal destination known for its unique rock formations, fairy chimneys, and hot air balloon rides."
          img1="https://images.unsplash.com/photo-1631152282084-b8f1b380ccab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
          img2="https://cdn.wallpapersafari.com/92/59/FgPnCD.jpg"
          />

<DestinationData
             className="first-des-reverse"
          heading="Jordan, Mudhdhoo Island, Maldives"
          text="Jordan captivates with its history, landscapes, and hospitality. Petra's rose-red city and Wadi Rum's desert amaze travelers. The Dead Sea's buoyancy is a natural wonder. A must-visit for its cultural treasures.
       Mudhdhoo Island in the Maldives is known for its mesmerizing bioluminescence. At night, the waters around the island light up with a natural glow, creating a magical and enchanting experience for visitors."
          img1="https://images.squarespace-cdn.com/content/v1/55d979ace4b039657c2fef6a/1664257168477-051AHC7FAG6KL0QVN2LM/jordan-151.jpg?format=1000w"
          img2="https://media.istockphoto.com/id/522078955/photo/bio-luminescence-illumination-of-plankton-at-maldives.jpg?s=612x612&w=0&k=20&c=4-3Abf3B-R8JCaqR799pwQTOFnX8iWdOZ1jqFhIP_GM="
          />
        

        </div>
        
    )
}

export default Destination