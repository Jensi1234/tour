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
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
        alt="Profile"
        className="profile-picture"
      />
      <div className="profile-details">
        <h2>Jane </h2>
        <p>Email: jane@gmail.com</p>
       
      </div>
    </div>

        <Footer />
        </>
    )
}

export default Profile;
