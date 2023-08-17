import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
    <div className="flex items-center">
    
      <img src={logo} alt="logo" className='w-16' />
      </div>

      <div className="flex items-center bg-white rounded-lg shadow-md px-2 py-1">
        <input
          type="text"
          placeholder="Search for products, brands, and more"
          className="w-full bg-transparent focus:outline-none"
        />
        <button className="text-blue-500">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

       <div className="flex space-x-4">
        <div className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="text-white text-lg cursor-pointer" />
          <span className="absolute top-0 left-2 bg-red-500 rounded-full text-white px-1 text-xs">3+</span>
        </div>
        <div className="text-white text-sm cursor-pointer">Login</div>
      </div>
    </nav>
  );
};

export default Navbar;
