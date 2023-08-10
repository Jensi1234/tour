import "./ContactForm.css"
import { useState } from "react";

import axios from 'axios';

function ContactForm(){

   
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
    )
    }
export default ContactForm;