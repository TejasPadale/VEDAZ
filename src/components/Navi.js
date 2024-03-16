import React, { useState } from 'react';

function Navi() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen flex items-center bg-purple-900 justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-2xl text-white font-bold mr-6 lg:mr-72">
        <h1>Vedaz</h1>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
        <div className="text-lg font-semibold text-white  lg:flex-grow">
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Home
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Astrologers
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Horoscope
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Puja
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Kundli
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Love calculator
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Compatibility
          </a>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </div>
      </div>
    </nav>
  );
}
export default Navi;