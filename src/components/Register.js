import React from "react";
import "./Register.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";


const Register=()=> {

    const navigate=useNavigate()
    const [user,setUsers]=useState({
    username:'',
    email:'',
    password:''
    })
    

    
    
    let name,value
    const handleChange=(e)=>{
    name=e.target.name
    value=e.target.value
    
    setUsers({...user,[name]:value})
    }
    
    
    const handleSignUp=(e)=>{
        e.preventDefault()
        
            axios.post('http://localhost:3000/',user)
            .then(res=>{
              if(res.data.success)
              {
                alert("User Registered successfully")
                setUsers({
                  username:'',
                  email:'',
                  password:''
                  
              })   
              }
              else{
                alert("Email already exist")
              }
            })
           
    
    }

    const handleLogin=()=>{
      navigate('/Login')
    }


  return (
    <div className='register'>
      
    <div className='signup-container'>
      <h2>Sign-Up Page</h2>
      <form className="signup-form" >
      <div className="form-group">
        <label htmlFor="username" className='username'>Username:</label>
        <input
          type="text"
          id="username"
          name='username'
          value={user.username}
          placeholder='Username'
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className='email'>Email:</label>
        <input
          type="text"
          id="email"
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className='password'>Password:</label>
        <input
          type="password"
          id="password"
          name='password'
          value={user.password}
          placeholder='Password'
          onChange={handleChange}
        />
      </div>
      <div className='btn1'>
      <button onClick={handleSignUp}><Link to="./Login">Sign Up</Link></button>
      </div>  
      </form>
      <div className='p3'>
      <p>Click here to <span onClick={handleLogin} className="login-link"><Link to="./Login">Log In</Link></span></p>
</div>
      </div>
      
    </div>
  );
}

export default Register;