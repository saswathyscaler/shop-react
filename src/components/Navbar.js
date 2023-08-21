import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const msg = localStorage.getItem('message');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  const [search, setSearch] = useState("");


  const navigate = useNavigate();
const handleLogin=()=>{
navigate('/login')




}
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('message');
    setIsLoggedIn(false); 
    navigate('/'); 
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16 cursor-pointer" onClick={() => navigate('/')} />
      </div>
      {msg === 'Logged in as admin' && (
        <div className="space-x-4">
          <button onClick={() => navigate('/dashboard')} className="text-white text-sm cursor-pointer">
            All
          </button>
          <button onClick={() => navigate('/addproduct')} className="text-white text-sm cursor-pointer">
            Add
          </button>
        </div>
      )}

      <form >
      <input
        type="text"
        className="p-1 rounded border m-2"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        name="searchInput"
      />
      <button
        type="submit"
        className="p-1 bg-blue-700 text-white rounded-md hover:bg-blue-400"
      >
      <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>




     




      <div className="flex space-x-4">
        <div className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="text-white text-lg cursor-pointer" />
          <span className="absolute top-0 left-2 bg-red-500 rounded-full text-white px-1 text-xs">3+</span>
        </div>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="text-white px-4 py-2 rounded hover:text-slate-500">
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="text-white text-sm cursor-pointer">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;