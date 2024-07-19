import React from 'react';
import { FaBell } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-200 fixed top-0 left-[240px] w-[calc(100%-240px)] bg-white z-10">
      {/* Search Bar */}
      <div className="relative w-[625px] h-8">
        <input
          type="text"
          className="w-full h-full rounded-lg p-2 border-[1.5px] border-[#627B87] focus:outline-none"
          placeholder="Search..."
        />
      </div>
      
      {/* Notification and User Area */}
      <div className="flex items-center space-x-4 ml-auto w-[218px] h-8">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
          V
        </div>
        <span className="hidden md:block text-black">Hi, Vishal</span>
        <FiChevronDown className="hidden md:block text-black" />
        <FaBell className="text-black" />
      </div>
    </nav>
  );
};

export default Header;
