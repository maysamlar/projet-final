import React from 'react'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


function Services() {
    const products=useSelector((state)=>state.product?.productList);
    console.log(products)
  return (
    <div>
<img id='pro' src="https://i.pinimg.com/originals/87/ec/a2/87eca2bddbf7dacb416605be90a1600b.gif"/>
<h1 id="agency">Our Agency</h1>
{/* <form className="box3" method="get" action="https://grandcarrentalv1.themegoods.com/car-list-right-sidebar/"><div class="carsearch2">
  
      
      <div className="box6"><select id="brand1" name="type">
	    		<option value="">Our Suppliers</option><option value="Coupe">Coupe</option><option value="Sedan">Sedan</option><option value="SUV">SUV</option></select>
    		<span className="box7"></span>
    	</div> 
    
    	<div className="box9">
    		<input id="brand8" type="submit" className="button" value="Search"/>
    	</div>
      </div>
</form> */}



 
    <div className='pink' style={{backgroundColor:"rgb(11 11 11 / 99%)",height:"4571px"}}>
   
          <div className='product' >   
{products?.map((el)=> <Link to={el.destination}> <Card style={{ width: '40rem' , height:"32rem" ,top: "-81px", display:"flex",margin:"10px", background:" rgb(197 197 197)" }}>
     <Card.Img id="photo" variant="top" src={el.img} />
      <Card.Body>
        <Card.Title id='nes'>{el.name}</Card.Title>
        {/* <Card.Title id='nes1'>{el.product}</Card.Title> */}
        <button id='nes2'> <h1 id='see'>See More </h1></button>
      </Card.Body> 
    </Card> 
    </Link>
    )}
    </div></div> </div>
  )
}

export default Services