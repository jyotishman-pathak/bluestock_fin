import React, { useState } from 'react';
import logo from '../../assets/Copy of SITE1.png'; // Ensure the path is correct

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
     
      <button
        className="fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-md sm:hidden"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
  className={`fixed top-0 left-0 h-[963px] w-[240px] transform transition-transform duration-300 ease-in-out ${
    isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
  } sm:translate-x-0 sm:opacity-100 bg-customGray`} // Use custom color class
>


        <div className="relative p-4">
          {/* Company Logo */}
          <div
            className="absolute"
            style={{
              top: '17.06px',
              left: '40px',
              width: '141px',
              height: '24.08px',
              padding: '0px',
              gap: '0px',
              opacity: 1, 
            }}
          >
            <img 
              src={logo} 
              alt="Bluestock Logo" 
              style={{ width: '100%', height: '100%' }} 
            />
          </div>

          {/* Menu Section */}
          <div className="absolute" style={{ top: '101.33px', left: '40px', width: '34px', height: '11.03px', opacity: 0.5 }}>
            <h2 className="text-[11px] font-normal leading-[11px] tracking-[1px] text-left" style={{ fontFamily: 'Poppins' }}>MENU</h2>
          </div>
          <ul className="mt-[120px] space-y-4">
            <li className="hover:bg-gray-200 p-2 rounded">Dashboard</li>
            <li className="hover:bg-gray-200 p-2 rounded">Manage IPO</li>
            <li className="hover:bg-gray-200 p-2 rounded">IPO Subscription</li>
            <li className="hover:bg-gray-200 p-2 rounded">IPO Allotment</li>
          </ul>

          {/* Others Section */}
          <div className="absolute" style={{ top: '178.57px', left: '40px', width: '107px', height: '18.06px', opacity: 0.6 }}>
            <h2 className="text-[11px] font-normal leading-[11px] tracking-[1px] text-left" style={{ fontFamily: 'Poppins' }}>OTHERS</h2>
          </div>
          <ul className="mt-[60px] space-y-4">
            <li className="hover:bg-gray-200 p-2 rounded">Settings</li>
            <li className="hover:bg-gray-200 p-2 rounded">API Manager</li>
            <li className="hover:bg-gray-200 p-2 rounded">Accounts</li>
            <li className="hover:bg-gray-200 p-2 rounded">Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
