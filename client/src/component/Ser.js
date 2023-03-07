import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import CardServ from "./CardServ";

function Ser({ ping, setping }) {
  const servicess = useSelector((state) => state.service?.serviceList);
  console.log(servicess);

  return (
    <div>
      <video
        id="voiture"
        src="https://thumbs.gfycat.com/GoodnaturedThirdBear-mobile.mp4"
        autoPlay
      />
      <form
        className="box3"
        method="get"
        action="https://grandcarrentalv1.themegoods.com/car-list-right-sidebar/"
      >
        <div class="carsearch2">
          <div className="box4">
            <select id="brand5" name="brand">
              <option value="">Any Brand</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Lexus">Lexus</option>
              <option value="Mercedes Benz">Mercedes Benz</option>
              <option value="MINI">MINI</option>
              <option value="Porsche">Porsche</option>
            </select>
            <span className="box5"></span>
          </div>

          {/* <div className="box6"><select id="brand1" name="type">
	    		<option value="">Our Suppliers</option><option value="Coupe">Coupe</option><option value="Sedan">Sedan</option><option value="SUV">SUV</option></select>
    		<span className="box7"></span>
    	</div> */}
          <div className="box8">
            <select id="brand6" name="sort_by">
              <option value="price_low">Price Low to High</option>
              <option value="price_high">Price High to Low</option>
              <option value="model">Sort By Model</option>
              <option value="popular">Sort By Popularity</option>
              <option value="review">Sort By Review Score</option>
            </select>
            <span className="ti-exchange-vertical"></span>
          </div>
          <div className="box9">
            <input
              id="brand8"
              type="submit"
              className="button"
              value="Search"
            />
          </div>
        </div>
      </form>
      <div id="hassine">
        {" "}
        <a href="">Agence ben hassine </a>
      </div>
      <div className="Serice-May">
        <div className="fat">
          {servicess?.map((el) => (
            <CardServ el={el} ping={ping} setping={setping} />
          ))}
        </div>
      </div>{" "}
    </div>
  );
}

export default Ser;

{
  /* <Card style={{ width: '40rem' , height:"32rem" ,top: "-81px", display:"flex",margin:"10px", background:" rgb(197 197 197)" }}>
    <a href='/'><Card.Img id="photo" variant="top" src={el.img} />
     <Card.Body>
       <Card.Title id='nes'>{el.name}</Card.Title>
       {/* <Card.Title id='nes1'>{el.product}</Card.Title> 
       
       <button id='nes2'> <h1 id='see'>See More </h1></button>
     </Card.Body> </a> 
   </Card>) */
}
