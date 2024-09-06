import React from 'react';

function Project() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 bg-slate-800">
      <div className="bg-slate-900 flex flex-col justify-between text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
        <img className="w-full h-48 object-cover rounded-md border-2 border-slate-600" src="./src/assets/weater.png" alt="Weather Project" />
        <p className="mt-4 text-slate-300">
          This project is built with React and shows the weather. You can set the language to Uzbek, Russian, and English. The project is responsive and works on iPads, desktops, and mobile devices.
        </p>    <a target='blank' href="https://github.com/mmfx001/weather" className="mt-4 inline-block text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors duration-300">
          Code ➡️
        </a>
        <a target='blank' href="https://weather-two-rose.vercel.app/" className="mt-4 inline-block text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors duration-300">
          Weather ➡️
        </a>
      </div>

      <div className="bg-slate-900 flex flex-col justify-between text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
        <img className="w-full h-48 object-cover rounded-md border-2 border-slate-600" src="./src/assets/Apitranslate.jpg" alt="API Translate Project" />
        <p className="mt-4 text-slate-300">
          This project is built with React and displays data coming from an API. You can set the language to Uzbek, Russian, and English.
        </p>
        <a target='blank' href="https://github.com/mmfx001/ApiTranslate" className="mt-4 inline-block text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors duration-300">
          Code ➡️
        </a>
        <a target='blank' href="https://api-translate-ivory.vercel.app/" className="mt-4 inline-block text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors duration-300">
          API Translate ➡️
        </a>
      </div>

      <div className="bg-slate-900 flex flex-col justify-between text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
        <img className="w-full h-48 object-cover rounded-md border-2 border-slate-600" src="./src/assets/pizza.jpg" alt="Pizza Project" />
        <p className="mt-4 text-slate-300">
          This project is built with HTML, CSS, and JavaScript. It shows the pizza menu, admin section, and basket section.
        </p>
        <a target='blank' href="https://github.com/mmfx001/pizza" className="mt-4 inline-block text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors duration-300">
          Code ➡️
        </a>
        <a target='blank' href="https://pizza-seven-delta.vercel.app/index.html" className="mt-4 inline-block text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors duration-300">
          Pizza ➡️
        </a>
      </div>

      <div className="bg-slate-900 flex flex-col justify-between text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
        <img className="w-full h-48 object-cover rounded-md border-2 border-slate-600" src="./src/assets/soat.jpg" alt="Clock Project" />
        <p className="mt-4 text-slate-300">
          This project is built with HTML, CSS, and JavaScript. It shows an alarm clock and timer. The project is responsive and works on iPads, desktops, and mobile devices.
        </p>
        <a target='blank' href="https://github.com/mmfx001/Soat.jsx" className="mt-4 inline-block text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors duration-300">
          Code ➡️
        </a><a target='blank' href="https://soat-jsx.vercel.app/" className="mt-4 inline-block text-blue-400 font-semibold hover:underline hover:text-blue-300 transition-colors duration-300">
          Clock ➡️
        </a>
      </div>
    </div>
  );
}

export default Project;
