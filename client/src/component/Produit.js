import React from "react";
import { useSelector } from "react-redux";
import Nesr from "./Nesr";
import Newwwmod from "./Newwwmod";

function Produit({ ping, setping }) {
  const produits = useSelector((state) => state.produit?.produitList);
  console.log(produits);

  return (
    <div>
      <img
        id="voiture"
        src="https://cdnb.artstation.com/p/assets/images/images/029/682/375/original/rahul-gupta-audi-turntable-wireframe-gif-optimized.gif?1598329987"
      />

      <form
        className="box3"
        method="get"
        action="https://grandcarrentalv1.themegoods.com/car-list-right-sidebar/"
      >
        <div class="carsearch1">
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
              id="brand7"
              type="submit"
              className="button"
              value="Search"
            />
          </div>
        </div>
      </form>

      <div>
        <h1 id="tanger">
          {" "}
          <a href="">Agence Tanger</a>{" "}
        </h1>
      </div>

      <div className="Serice-nou">
        <div className="fati">
          {produits?.map((el) => (
            <div className="card-prod-container">
              <img src={el?.img} alt="" />
              <div className="prod-info-box1">
                <h1 id="info">{el?.name}</h1>
                <h3 id="info1">{el?.product}</h3>
                <p id="info2">{el?.description}</p>
                <img
                  id="kiko"
                  src="https://www.mamicar.com/assets/images/oil.png"
                />
                <img
                  id="kiko1"
                  src="https://www.mamicar.com/assets/images/transmission.png"
                />
                <img
                  id="kiko2"
                  src="https://www.mamicar.com/assets/images/car-door.png"
                />
                <img
                  id="kiko3"
                  src="https://www.mamicar.com/assets/images/person.png"
                />
              </div>
              <div className="prod-info-box2">
                <h1>{el?.prix}</h1>
                {/* <Nesr el={el}/>  */}
                <Newwwmod el={el} ping={ping} setping={setping} />
                {/* <button  id="prod5">Réservez</button>  */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produit;
