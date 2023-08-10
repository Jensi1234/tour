import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "./Hero.js";
import Footer from '../components/Footer';
// import ContactForm from '../components/ContactForm';
import { useState } from "react";
import "./ContactForm.css"
import axios from 'axios';

function Contact(){

    
    const [user,setUsers]=useState({
        username:'',
        email:'',
        subject:'',
        message:'',
        })
        
    
        
        
        let name,value
        const handleChange=(e)=>{
        name=e.target.name
        value=e.target.value
        
        setUsers({...user,[name]:value})
        }
        
        
        const handlesubmit=(e)=>{
            e.preventDefault()
            
                axios.post('http://localhost:3000/contact',user)
                .then(res=>console.log(res))
                setUsers({
                    username:'',
                    email:'',
                    subject:'',
                    message:'',
                
            })     
        
        }
    
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-midd"
        heroImg="https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="Contact"
        btnClass="hide"
        />
        {/* <ContactForm/> */}
        <div className="form-container">
            <h1   data-aos="zoom-in-down" data-aos-duration="1000">Send a message to us!</h1>
            <form>
                <input 
                     type="text"  
                    id="username" 
                    name='username'
                    value={user.username} 
                    placeholder="Username"  
                    onChange={handleChange} 
                   >
                </input>

                <input
                     type="text" 
                    id="email" 
                    name='email'
                    value={user.email}  
                    placeholder="Email" 
                    onChange={handleChange} 
                   >
                </input>

                <input
                     type="text" 
                     id="subject" 
                     name='subject'
                     value={user.subject}  
                     placeholder="Subject" 
                     onChange={handleChange} 
                   >
                </input>

                <textarea 
                
                     id="message" 
                     name='message' 
                    placeholder="Message" 
                    value={user.message} 
                    onChange={handleChange} 
                    rows="4" 
                         >
                </textarea>
             <button  onClick={handlesubmit}>Send Message</button>
               {/* <button  >Send Message</button> */}
            </form>
             
        </div>
    



        <Footer />
        </>
    )
}

export default Contact;
