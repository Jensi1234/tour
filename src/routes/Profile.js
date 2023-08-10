import React from 'react'
import Navbar from "../components/Navbar";

import Footer from '../components/Footer';

import './Profile.css';

function Profile(){
    return(
        <>
        <Navbar />
    
    <div className="profile-container">
      <img
        src="https://i.pinimg.com/564x/58/67/95/58679583481018931679ba70915bd381.jpg" // Replace with the URL of your profile picture
        alt="Profile"
        className="profile-picture"
      />
      <div className="profile-details">
        <h2>John Doe</h2>
        <p>Email: john.doe@example.com</p>
       
        <p>Location: New York, USA</p>
        {/* Add other information about the user */}
      </div>
    </div>

        <Footer />
        </>
    )
}

export default Profile;
