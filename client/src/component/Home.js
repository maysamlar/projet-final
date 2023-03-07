import React from 'react';

import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import About from './About';
import May from './May';
import Footerr from './Footerr';
 
const Home = () => {
    return <div>
<div>
{/* <img id='pro' src="https://i.pinimg.com/originals/87/ec/a2/87eca2bddbf7dacb416605be90a1600b.gif"/> */}
       
          <img id='rent' src='https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/IMG_3496bfree.jpg'/> 

<h4 id='best'> Find Best<span> Car </span>With  Best <span>Price</span></h4>
<p id="best1"><span>C</span>ustomer satisfaction is our motto</p>
<form className="box3" method="get" action="https://grandcarrentalv1.themegoods.com/car-list-right-sidebar/"><div class="carsearch">
  <div className="box4"><select id="brand" name="brand">
	    		<option value="">Any Brand</option><option value="Audi">Audi</option><option value="BMW">BMW</option><option value="Lexus">Lexus</option><option value="Mercedes Benz">Mercedes Benz</option><option value="MINI">MINI</option><option value="Porsche">Porsche</option></select>
    		<span className="box5"></span>
    	</div><div className="box6"><select id="brand1" name="type">
	    		<option value="">Our Suppliers</option><option value="Coupe">Coupe</option><option value="Sedan">Sedan</option><option value="SUV">SUV</option></select>
    		<span className="box7"></span>
    	</div>
    	<div className="box8"><select id="brand2" name="sort_by"><option value="price_low">Price Low to High</option><option value="price_high">Price High to Low</option><option value="model">Sort By Model</option><option value="popular">Sort By Popularity</option><option value="review">Sort By Review Score</option></select>
    		<span className="ti-exchange-vertical"></span>
    	</div>
    	<div className="box9">
    		<input id="brand3" type="submit" className="button" value="Search"/>
    	</div>
     
    </div>
</form>

</div>
<div>
<About/></div>
    <May/>
	<Footerr/>
    </div>
    
 
     

}

export default Home;