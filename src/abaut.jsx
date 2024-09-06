import React from 'react';

const About = () => {
  const styles = `
    @keyframes hoverAnimation {
      0% { border-color: #1e3a8a; }
      50% { border-color: #3b82f6; }
      100% { border-color: #1e3a8a; }
    }

    .hover-animate {
      border: 3px solid transparent;
      transition: all 0.3s ease;
    }

    .hover-animate:hover {
      border-color: #3b82f6; /* Blue color for hover */
      animation: hoverAnimation 1s infinite alternate;
    }
  `;

  return (
    <div className="w-full h-screen flex flex-col items-center p-16 bg-gray-800 text-white">
      <style>{styles}</style>
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-5xl font-bold text-blue-500 mb-6 text-center">ABOUT ME</p>
        <hr className="border-blue-500 mb-8" />
        <div className="flex flex-col md:flex-row gap-8">
          {/* Personal Info Section */}
          <div className="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg hover-animate">
            <p className="text-4xl font-semibold text-blue-500 mb-6">Frontend Developer</p>
            <p className="text-xl text-gray-300 mb-4">
              I'm 16 years old and joined Frontend in early 2024. I now code in React and Tailwind CSS. I am passionate about creating beautiful and functional websites.
            </p>
            <p className="text-xl text-gray-300">
              Since the beginning of 2024, I started making projects using HTML and CSS through Figma. and now I  progressed to building my own applications using JSON Server, React, and Tailwind CSS.
            </p>
          </div>

          {/* Personal Information Section */}
          <div className="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg hover-animate">
            <p className="text-4xl font-semibold text-blue-500 mb-6">Personal Information</p>
            <p className="text-xl font-semibold flex gap-2">
              <span className="text-blue-300">Name:</span>
              <span className="text-gray-400">Dilbek</span>
            </p>
            <p className="text-xl font-semibold flex gap-2">
              <span className="text-blue-300">Age:</span>
              <span className="text-gray-400">16</span>
            </p>
            <p className="text-xl font-semibold flex gap-2">
              <span className="text-blue-300">Residence:</span>
              <span className="text-gray-400">Uzbekistan</span>
            </p>
            <p className="text-xl font-semibold flex gap-2">
              <span className="text-blue-300">Address:</span>
              <span className="text-gray-400">Toshkent Viloyati</span>
            </p>
            <p className="text-xl font-semibold flex gap-2">
              <span className="text-blue-300">Phone:</span>
              <span className="text-gray-400">+998 (88) 706 09-03</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
