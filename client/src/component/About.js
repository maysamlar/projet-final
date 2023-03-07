import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
function About() {

  return (
    <div className='about' id='hello1' >

    <h1 id='us'><Link style={{textDecoration:"none", color:"black"}} to="/about2"> <span>A</span>bout <span>Us</span></Link> </h1>
<p id='us1'> McarRental, hire car or car hire agency is a company that rents automobiles for short periods of time to the public, 
  generally ranging from a few hours to a few weeks.</p>
<div><button  id="us2"> <Link  style={{textDecoration:"none",color:"white"}}to="/services"> Our services </Link> </button>

</div>
    
    <Carousel className="slide">
      <Carousel.Item  interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/Mercedes-C-Class-Estate-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1461638023147-7d732b807d9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>





              </div>
   
  )
}

export default About