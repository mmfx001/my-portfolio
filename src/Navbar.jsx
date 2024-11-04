import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex flex-col w-full md:w-72 backdrop-blur-md  shadow-2xl'>
      {/* Profile Section */}
      <div className='relative w-full h-60 hidden md:flex  items-center justify-center'>
        <img
          className='w-32 h-32 rounded-full shadow-lg object-cover absolute top-6'
          src="https://cdn3.iconfinder.com/data/icons/roles-computer-it/128/front-end_developer-2-512.png"
          alt="Profile"
        />
        <div className='absolute bottom-3 w-full flex justify-center'>
          <p className='text-white text-xl font-semibold bg-opacity-70 px-4 py-1 rounded-lg shadow-md'>
            Dilbek Shermatov
          </p>
        </div>
      </div>
      {/* Navigation Links */}
      <div className='flex flex-wrap items-center md:flex-col md:items-center md:mt-0 justify-between'>
        {['', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <Link
            key={item}
            className='flex items-center p-3 md:p-0  focus:border-b-2  md:w-full md:justify-center h-14 text-gray-300 text-xs md:text-lg font-medium hover:text-white transition-all duration-300 ease-in-out'
            to={`/${item}`}
          >
            {item === '' ? 'HOME' : item.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="flex-1 flex-col backdrop-blur-md bg-opacity-80 mt-28 p-4 rounded-lg shadow-lg hidden md:flex">
        <p className="text-base font-semibold flex gap-2">
          <span className="text-stone-500">Address :</span>
          <span className="text-gray-200">Toshkent Viloyati</span>
        </p>
        <p className="text-base font-semibold flex gap-2">
          <span className="text-stone-500">Phone :</span>
          <span className="text-gray-200">+998 (88) 706 09-03</span>
        </p>
      </div>

    </div>
  );
}

export default Navbar;
