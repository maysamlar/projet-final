import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "./JS/userslice/userSlice";

const Login = ({ ping, setping }) => {
  const navigate = useNavigate();

  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <img
        id="log"
        src="https://static.wixstatic.com/media/9b6c7d_8352a6ee5a454a98a5278f9628ccc4ca.png/v1/fill/w_360,h_293,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9b6c7d_8352a6ee5a454a98a5278f9628ccc4ca.png"
      />

      <h1 className="rote">
        <span>M</span>CarRental
      </h1>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">
            {" "}
            log<span>in</span>
          </h2>

          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) => setLogin({ ...Login, email: e.target.value })}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
            onChange={(e) => setLogin({ ...Login, password: e.target.value })}
          />
          <label class="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button
            className="btn btn-lg btn-primary btn-block"
            style={{ backgroundColor: "#eb960e" }}
            onClick={() => {
              setTimeout(() => {
                dispatch(userLogin(Login));
                navigate("/");
              }, 1000);
              setping(!ping);
            }}
          >
            login
          </button>
          <h5 id="slim">
            u already have account <Link to="/register">Register now</Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
