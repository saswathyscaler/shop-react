import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between">
        <div className="flex items-center">
        <a href="/" className="text-white text-xl font-semibold">
          Home
        </a>
      </div>

      <div className="flex space-x-4">
        <a href="/login" className="text-white">
          Login
        </a>
        <a href="/register" className="text-white">
          Register
        </a>
        <button className="text-white">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
