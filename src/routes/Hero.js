import React from 'react'
import "./Hero.css";

function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img src= {props.heroImg}alt="HerpImg"></img>
        </div>
        {/* <div className={props.cName}>
            <img src= {props.img}alt="Img"></img>
        </div>
       */}
      <div className='hero-text'>
        <h1 data-aos="zoom-in" data-aos-duration="3000">{props.title}</h1>
        <p data-aos="zoom-out-up" data-aos-duration="3000">{props.text}</p>
        <a  className={props.btnClass}>
            {props.buttonText}
          {/* < Travel/>  */}
        </a>

      </div>
        </>
    );
}

export default Hero;
