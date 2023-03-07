import React from "react";
import Newwwmod from "./Newwwmod";

const CardServ = ({ el, ping, setping }) => {
  const newLocal = <button id="prod5">Réservez</button>;
  return (
    <div className="card-serv-container">
      <img src={el.img} alt="" />
      <div className="serv-info-box1">
        <h1 id="info">{el.name}</h1>
        <h3 id="info1">{el.product}</h3>
        <p id="info2">{el.description}</p>
        <img id="kiko" src="https://www.mamicar.com/assets/images/oil.png" />
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
      <div className="serv-info-box2">
        <h1>{el.prix}</h1>
        <Newwwmod el={el} ping={ping} setping={setping} />
      </div>
    </div>
  );
};

export default CardServ;
