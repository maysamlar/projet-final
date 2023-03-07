import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcommande } from "./JS/commandeSlice";
import "./new.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Newwwmod({ el, ping, setping }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date = new Date();
  const user = useSelector((state) => state.user.user);
  const [newcommande, setnewcommande] = useState({
    nameclient: user?.name,
    nameproduct: el.name,
    img: el.img,
    date: date,
    prix: el.prix,
    status: "non -payé",
  });
  return (
    <div style={{ position: "absolute", width: "52rem" }}>
      <div className="container2">
        <details>
          <summary>
            <div className="but">Réserver</div>
            <div className="details-modal-overlay" />
          </summary>
          <div className="details-modal">
            <div className="details-modal-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                  fill="black"
                />
              </svg>
            </div>
            <div
              className="details-modal-title"
              style={{ backgroundColor: "#eb960e" }}
            >
              <h1 style={{ fontSize: "20px" }}>MCarRental</h1>
            </div>
            <div className="details-modal-content">
              <p className="descbox">
                <div className="descbox1">
                  <img src={el.img} />
                </div>

                <div className="descbox2">
                  <h3>{el.name}</h3>
                  <p>
                    {" "}
                    <ul>
                      <li> TVA / Taxes locales (19%)</li>
                      <li> Assurrances de base (RC, Incendie)</li>
                      <li> KM illimité</li>
                      <li> Dépôt de garantie de1800 TND </li>{" "}
                    </ul>
                  </p>
                  <h6>price :</h6>
                  {el.prix}
                  <h1 id="pipi"> choisir la date de réservation </h1>
                  <input
                    style={{
                      width: "20rem",
                      height: " 3rem",
                      position: "absolute",
                      left: "721px",
                      top: "375px",
                    }}
                    id="lilo"
                    type="date"
                  />
                  <div>
                    <button id="cann">Cancel</button>
                    <button
                      id="can"
                      onClick={() => {
                        dispatch(addcommande(newcommande));

                        Swal.fire("commande validé", "success");
                        setping(!ping);
                        navigate("/");
                      }}
                    >
                      valider ma réservation
                    </button>{" "}
                  </div>
                </div>
              </p>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Newwwmod;
