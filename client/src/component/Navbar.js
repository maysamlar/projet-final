import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./JS/userslice/userSlice";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="box">
      <div className="lien">
        {" "}
        <div className="above_top_bar">
          <div className="page_content_wrapper">
            <div className="social_wrapper">
              <ul>
                <li className="facebook">
                  <a href="#">
                    <i className="fa fa-facebook-official" />
                  </a>
                </li>
                <li className="twitter">
                  <a href="http://twitter.com/#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="youtube">
                  <a title="Youtube" href="#">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li className="pinterest">
                  <a title="Pinterest" href="http://pinterest.com/#">
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
                <li className="instagram">
                  <a title="Instagram" href="http://instagram.com/theplanetd">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="top_contact_info">
              <div className="company_address">
                <svg
                  id="map"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <div id="top_contact_address">
                  <span className="ti-location-pin" />
                  184 rue ali Gabes
                </div>
              </div>
              <div>
                <svg
                  id="mobile"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <div id="tel">
                  <a href="tel:75390244">
                    <span className="mobile" />
                    75.270.650
                  </a>
                </div>
              </div>
              <div>
                <svg
                  id="alarme"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-alarm"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                </svg>
                <div id="top_contact_hours">
                  <span className="ti-alarm-clock" />
                  Mon-Dim 09.00 - 17.00
                </div>
              </div>
            </div>
            <br className="clear" />
          </div>
        </div>{" "}
      </div>
      <h1 id="car">
        <span>M</span>CarRental
      </h1>
      {/* <img  id="car"src="https://grandcarrentalv1.b-cdn.net/wp-content/themes/grandcarrental/images/logo@2x_white.png"/> */}
      <div className="nav">
        <ul>
          <li className="dropdown">
            <i className="dropbtn">
              {" "}
              <Link to="/">Home</Link>
            </i>
          </li>
          <li className="dropdown">
            <i className="dropbtn">
              {" "}
              <Link to="#hello1">About</Link>
            </i>
          </li>
          <li className="dropdown">
            <i className="dropbtn">
              {" "}
              <Link to="/galerie">Gallery</Link>
            </i>
          </li>
          <li className="dropdown">
            <i className="dropbtn">
              {" "}
              <Link to="/services">Services</Link>
            </i>
          </li>
          <li className="dropdown">
            <i className="dropbtn">
              {" "}
              <Link to="/contacte">Contact</Link>
            </i>
          </li>
          {/* {user ? (
            <li>
              <Link to="/profil">profil</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Connexion</Link>
            </li>
          )} */}
        </ul>
      </div>

      {user ? (
        <div className="gry">
          <Link to="/profil">
            <span>
              <button id="saly" onClick={() => setshow(!show)}>
                <img src={user ? user.img : <h1>...Loading</h1>} />
              </button>
            </span>
          </Link>

          {show ? (
            <ul className="kas">
              <li>
                <button
                  id="logout"
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                >
                  logout
                </button>
              </li>
            </ul>
          ) : null}
        </div>
      ) : (
        <Link to="/login">
          <button id="olpo">
            <svg
              id="alia"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="35"
              fill="currentColor"
              class="bi bi-person-fill-lock"
              viewBox="0 0 16 16"
            >
              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
            </svg>{" "}
            <h1 id="ijo">Connexion</h1>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
