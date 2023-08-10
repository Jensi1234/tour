import React, { Component } from 'react'
import "./Destination"

class DestinationData extends Component{
    render(){
        return(
            
             <div className={this.props.className}>
                <div className='des-text'>
                    <h2 data-aos="zoom-in-down" data-aos-duration="1000">{this.props.heading}</h2>
                    <p>{this.props.text}
                    </p>
                </div>
                <div className='image'>
                    <img alt="img" src={this.props.img1}></img>
                    <img alt="img" src={this.props.img2}></img>
                </div>
                </div>
            // </div>
        )
    }
}

export  default DestinationData;