import React from 'react';
import weatherImg from '../public/weater.png';
import apiTranslateImg from '../public/Apitranslate.jpg';
import pizzaImg from '../public/pizza.jpg';
import clockImg from '../public/soat.jpg';

function Project() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8 backdrop-blur-md">
      {[{
        img: weatherImg,
        title: "Weather Project",
        description: "This project is built with React and shows the weather. You can set the language to Uzbek, Russian, and English. The project is responsive and works on iPads, desktops, and mobile devices.",
        codeLink: "https://github.com/mmfx001/weather",
        demoLink: "https://weather-two-rose.vercel.app/"
      }, {
        img: apiTranslateImg,
        title: "API Translate Project",
        description: "This project is built with React and displays data coming from an API. You can set the language to Uzbek, Russian, and English.",
        codeLink: "https://github.com/mmfx001/ApiTranslate",
        demoLink: "https://api-translate-ivory.vercel.app/"
      }, {
        img: pizzaImg,
        title: "Pizza Project",
        description: "This project is built with HTML, CSS, and JavaScript. It shows the pizza menu, admin section, and basket section.",
        codeLink: "https://github.com/mmfx001/pizza",
        demoLink: "https://pizza-seven-delta.vercel.app/index.html"
      }, {
        img: clockImg,
        title: "Clock Project",
        description: "This project shows a digital clock.",
        codeLink: "#",
        demoLink: "#"
      }].map((project, index) => (
        <div key={index} className="backdrop-blur-3xl flex flex-col p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img src={project.img} alt={project.title} className="rounded-md mb-4 h-48 object-cover" />
          <h2 className="text-xl font-semibold mb-2 text-center">{project.title}</h2>
          <p className="text-gray-200 mb-4">{project.description}</p>
          <div className="flex justify-between">
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Code</a>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">Live Demo</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
