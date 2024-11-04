import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex flex-col w-72 backdrop-blur-md h-screen shadow-2xl '>
      {/* Profile Section */}
      <div className='relative w-full h-60 bg-gradient-to-b  flex items-center justify-center'>
        <img className='w-44 h-40 rounded-full shadow-lg object-cover absolute top-6' src="https://cdn3.iconfinder.com/data/icons/roles-computer-it/128/front-end_developer-2-512.png" alt="Profile" />
        <div className='absolute bottom-3 w-full flex justify-center'>
          <p className='text-white text-xl font-semibold  bg-opacity-70 px-4 py-1 rounded-lg shadow-md'>
            Dilbek Shermatov
          </p>
        </div>
      </div>
      {/* Navigation Links */}
      <div className='flex flex-col mt-4'>
        {['', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <Link
            key={item}
            className='flex items-center justify-center h-14 text-gray-300 text-lg font-medium hover:bg-stone-500 hover:text-white transition-all duration-300 ease-in-out'
            to={`/${item}`}
          >
            {item === '' ? 'HOME' : item.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="flex-1 backdrop-blur-md bg-opacity-80 p-6 rounded-lg shadow-lg mt-20">
        <p className="text-base font-semibold flex gap-2">
          <span className="text-stone-500">Address :</span>
          <span className="text-gray-200">Toshkent Viloyati</span>
        </p>
        <p className="text-base font-semibold flex gap-2">
          <span className="text-stone-500 zinc-700">Phone :</span>
          <span className="text-gray-200">+998 (88) 706 09-03</span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
