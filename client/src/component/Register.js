import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "./JS/userslice/userSlice";
import { Link, useNavigate } from "react-router-dom";
const Register = ({ ping, setping }) => {
  const navigate = useNavigate();
  const [Register, setRegister] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    img: "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <img
        id="log"
        src="https://static.wixstatic.com/media/9b6c7d_8352a6ee5a454a98a5278f9628ccc4ca.png/v1/fill/w_360,h_293,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9b6c7d_8352a6ee5a454a98a5278f9628ccc4ca.png"
      />
      <h1 className="rote1">
        <span>M</span>CarRental
      </h1>

      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">
            {" "}
            <span>R</span>egister
          </h2>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setRegister({ ...Register, name: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="lastName"
            required=""
            autofocus=""
            onChange={(e) =>
              setRegister({ ...Register, lastName: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setRegister({ ...Register, email: e.target.value })
            }
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
            onChange={(e) =>
              setRegister({ ...Register, password: e.target.value })
            }
          />

          <button
            style={{ background: "#eb960e" }}
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              dispatch(userRegister(Register));
              dispatch(setping(!ping));
              navigate("/");
            }}
          >
            Register
          </button>
          <h5 id="slim">
            u already have account <Link to="/login">sign in</Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Register;
