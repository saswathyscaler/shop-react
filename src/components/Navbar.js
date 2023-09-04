import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "../pages/Profile";

// import {useCart} from "../context/CartContext"

import { useSelector } from "react-redux";
// import store from "../utils/store";


const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const login = location.pathname === "/login";
  const register = location.pathname === "/register";

  const cartItems = useSelector((store) => store.cart.items);


  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [showProfile, setShowProfile] = useState(false);
  // const { cart } = useCart();
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("message");
    setIsLoggedIn(false);
    navigate("/");
  };
  if ( login || register) {
    return null;
  }
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-16 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex space-x-4">
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-white text-lg cursor-pointer mt-3"
          />
          <span className="absolute top-2 left-3 bg-red-500 rounded-full text-white px-1 text-xs">
          {cartItems.length}  
          </span>
        </div>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-white px-4 py-2 rounded hover:text-slate-500"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="text-white text-sm cursor-pointer"
          >
            Login
          </button>
        )}
        <CgProfile
          className="text-white text-3xl cursor-pointer mt-1"
          onClick={toggleProfile}
        />
      </div>
      {showProfile && <Profile  />}
    </nav>
  );
};

export default Navbar;
