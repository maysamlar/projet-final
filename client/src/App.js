import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userCurrent } from "./component/JS/userslice/userSlice";
import Profil from "./component/Profil";
import PrivateRoute from "./Privaterouter.js/Privateroute";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

import Services from "./component/Services";
import { getproduct } from "./component/JS/productslice";
import { getservice } from "./component/JS/serviceslice";
import Ser from "./component/Ser";
import { getproduit } from "./component/JS/Produitslice";
import Produit from "./component/Produit";
import Galerie from "./component/Galerie";

import { getcommande } from "./component/JS/commandeSlice";
import Contacte from "./component/Contacte";
import Cardprod from "./component/Cardprod";
import About2 from "./component/About2";

function App() {
  const isAuth = localStorage.getItem("token");
  const [ping, setping] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(getservice());
    dispatch(getproduit());
    dispatch(getcommande());
  }, [ping]);
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ser" element={<Ser ping={ping} setping={setping} />} />
        <Route
          path="/produit"
          element={<Produit ping={ping} setping={setping} />}
        />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/contacte" element={<Contacte />} />
        <Route path="/about2" element={<About2 />} />
        <Route
          path="/register"
          element={<Register ping={ping} setping={setping} />}
        />
        <Route
          path="/login"
          element={<Login ping={ping} setping={setping} />}
        />
        <Route element={<PrivateRoute />}>
          <Route
            exact
            path="/profil"
            element={<Profil ping={ping} setping={setping} />}
          />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
