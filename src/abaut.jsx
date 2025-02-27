import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full flex flex-col items-center p-4  md:px-16 md:h-screen backdrop-blur-md text-white">
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">ABOUT ME</p>
        <hr className="border-black mb-12" />
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Personal Info Section */}
          <div className="flex-1 backdrop-blur-3xl shadow-stone-300 hover:scale-105 hover:shadow-lg duration-300 hover:shadow-stone-400 p-6 rounded-lg shadow-md">
            <p className="text-3xl md:text-4xl font-semibold text-black mb-4">Frontend Developer</p>
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              I'm Shermatov Dilbek, born in 2008. I entered the field of Frontend Development in 2023 and now can write fullstack code. I won 1st place in 2 hackathon competitions and created over 10 websites.
            </p>
            <p className="text-lg md:text-xl text-gray-200">
              I have created more than 10 websites and have done big real projects, mainly in REACT.JS and NEXT.JS.
            </p>
          </div>

          {/* Personal Information Section */}
          <div className="flex-1 backdrop-blur-3xl border-t border-gray-600 md:border-none shadow-stone-300 hover:scale-105 hover:shadow-lg duration-300 hover:shadow-stone-400 p-6 rounded-lg shadow-md">
            <p className="text-3xl md:text-4xl font-semibold  md:text-black mb-4">Personal Information</p>
            <p className="text-lg items-center font-semibold flex gap-2 mb-2">
            <FaUser className="md:text-black" />
              <span className="md:text-black">Name:</span>
              <span className="text-stone-200">Dilbek</span>
            </p>
            <p className="text-lg items-center font-semibold flex gap-2 mb-2">
            <FaUser className="md:text-black" />

              <span className="md:text-black">Age:</span>
              <span className="text-stone-200">16</span>
            </p>
        
            <p className="text-lg items-center font-semibold flex gap-2 mb-2">
            <FaMapMarkerAlt className="md:text-black" />
              <span className="md:text-black">Address:</span>
              <span className="text-stone-200">Toshkent Viloyati</span>
            </p>
            <p className="text-lg items-center font-semibold flex gap-2">
            <FaPhone className="md:text-black" />
              <span className="md:text-black">Phone:</span>
              <span className="text-stone-200">+998 (88) 706 09-03</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
