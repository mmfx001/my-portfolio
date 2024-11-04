import React from 'react';

const About = () => {


  return (
    <div className="w-full h-screen flex flex-col items-center p-16 backdrop-blur-md text-white">
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-5xl font-bold text-black mb-6 text-center">ABOUT ME</p>
        <hr className="border-black mb-8" />
        <div className="flex flex-col md:flex-row gap-8">
          {/* Personal Info Section */}
          <div className="flex-1 backdrop-blur-3xl shadow-stone-300 hover:scale-105 hover:shadow-lg duration-300 hover:shadow-stone-400 p-6 rounded-lg shadow-md hover-animate">
            <p className="text-4xl font-semibold text-black mb-6">Frontend Developer</p>
            <p className="text-xl text-gray-300 mb-4">
            I'm Shermatov Dilbek, I was born in 2008. Frontend Development I entered this field in 2023 and now I can write fullstack codes and won 1st place in 2 hackathon competitions and made more than 10 websites, besides that I made big real projects
            </p>
            <p className="text-xl text-gray-300">
              Sand I have created more than 10 websites, also I have done big real projects some of which I have done with my team I am the team lead of my team and I wrote these in REACT.JS and NEXT.JS
            </p>
          </div>

          {/* Personal Information Section */}
          <div className="flex-1  backdrop-blur-3xl shadow-stone-300 hover:scale-105 hover:shadow-lg duration-300 hover:shadow-stone-400 p-6 rounded-lg shadow-md hover-animate">
            <p className="text-4xl font-semibold text-black mb-8">Personal Information</p>
            <p className="text-xl font-semibold flex gap-2 mb-2">
              <span className="text-stone-800 ">Name:</span>
              <span className="text-stone-300">Dilbek</span>
            </p>
            <p className="text-xl font-semibold flex gap-2 mb-2">
              <span className="text-stone-800 ">Age:</span>
              <span className="text-stone-300">16</span>
            </p>
            <p className="text-xl font-semibold flex gap-2 mb-2">
              <span className="text-stone-800 ">Residence:</span>
              <span className="text-stone-300">Uzbekistan</span>
            </p>
            <p className="text-xl font-semibold flex gap-2 mb-2">
              <span className="text-stone-800 ">Address:</span>
              <span className="text-stone-300">Toshkent Viloyati</span>
            </p>
            <p className="text-xl font-semibold flex gap-2">
              <span className="text-stone-600 ">Phone:</span>
              <span className="text-stone-300">+998 (88) 706 09-03</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
