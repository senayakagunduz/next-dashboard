// src/components/Offcanvas.js
import React, { useState } from 'react';
import './Offcanvas.css'; // CSS dosyanızı ekleyin
const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Trigger buton */}
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={toggleOffcanvas}
      >
        Toggle Offcanvas
      </button>
      {/* Offcanvas */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ease-in-out duration-300 z-50 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleOffcanvas}
      />
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white p-4 transform transition-transform ease-in-out duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <p>Offcanvas Content</p>
      </div>
    </div>
  );
};
export default Offcanvas;
