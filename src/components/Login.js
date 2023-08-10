import React from 'react'
  import { useState} from 'react';
  import { useNavigate } from 'react-router-dom';
  import './Login.css'
  import { Link } from "react-router-dom";
 
  

  const Login = () => {
      const navigate = useNavigate();
      const [user,setUsers] = useState({
        email: "",
        password: ""
      })
    
      const handleChange = e =>{
        const{name,value} = e.target
        setUsers({
          ...user,
          [name]: value
        })
      }

  

  const handleLogin=async (e)=>{
      e.preventDefault()
      const res=await fetch('http://localhost:3000/Login', 
      {
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify
          ({
          email:user.email,
          password:user.password,
          })
    })
    if(res.status===500)
    {
      alert('Wrong email or password')
      
    }
    else if(res.status===404)
    {
      alert('Data not found')
      
    }
    else
    {
      alert("Successfully Logged in");
      navigate('/Home')
      setUsers({
        email:'',password:''
      })
      }
    

  }

  
    const handleSignUpClick = () => {
      navigate('/');
    };
    return (
     
    
      <div className='login-container'>
        <h2>Login Page</h2>
        <form className="login-form">
         <div className="form-group">
          <label htmlFor="email" className='email'>Email:</label>
          <input
            type="text"
            id="email"
            name='email'
            value={user.email}
           
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
           
            onChange={handleChange}
          />
        </div>
        <div className='btn1'>
        <button onClick={handleLogin}>Login</button>
        </div>
        </form>

        <div className='p1'>
        <p>Don't have an account? <span onClick={handleSignUpClick} className="sign-up-link"><Link to="/">Register</Link></span></p>
      </div>
        </div>
      
      
    );
  }

  export default Login;
