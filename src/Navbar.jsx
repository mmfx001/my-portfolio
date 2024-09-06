import React from 'react';
import { Link } from 'react-router-dom';
import photo from "../public/myphot-removebg-preview.png"

function Navbar() {
  return (
    <div className='flex flex-col w-64 bg-gray-900 h-screen shadow-2xl'>
      {/* Profile Section */}
      <div className='relative w-full h-60 bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center border-b border-gray-600'>
        <img className='w-44 h-40 rounded-full shadow-lg object-cover absolute top-6' src={photo} alt="Profile" />
        <div className='absolute bottom-3 w-full flex justify-center'>
          <p className='text-white text-xl font-semibold bg-slate-700 bg-opacity-70 px-4 py-1 rounded-lg shadow-md'>
            Dilbek
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className='flex flex-col mt-4'>
        {['', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <Link
            key={item}
            className='flex items-center justify-center h-14 text-gray-300 text-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out'
            to={`/${item}`}
          >
            {item === '' ? 'HOME' : item.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg hover-animate mt-20">
          
         
     
            <p className="text-base font-semibold flex gap-2">
              <span className="text-blue-300">Address:</span>
              <span className="text-gray-400">Toshkent Viloyati</span>
            </p>
            <p className="text-base font-semibold flex gap-2">
              <span className="text-blue-300">Phone:</span>
              <span className="text-gray-400">+998 (88) 706 09-03</span>
            </p>
          </div>
    </div>
  );
}

export default Navbar;
