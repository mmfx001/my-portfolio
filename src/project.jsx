import React from 'react';
import shop from '../public/shopp.jpg';
import mars from '../public/mars.jpg';
import map from '../public/unversty.jpg';
import weather from '../public/weather.jpg';
import chatapp from '../public/chatapp.jpg';

function Project() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8 backdrop-blur-md">
      {[{
        img: shop,
        title: "Shoppogram Project",
        description: "Mazkur loyihadan maqsad Xunari bor aholini ish bilan ta'minlash.Bu loyihada e'lonlarni joylashtirishingiz yoki e'lonlarni ko'rishingiz va o'zingiz xohlagan buyurtmalarni joylashtirishingiz yoki buyurtmalarni qabul qilishingiz va sotuvchilar yoki xaridorlar bilan suhbatlashishingiz mumkin. Bir nechta boshqa qulayliklar mavjud. responsive hozircha toliq emas",
        codeLink: "https://github.com/mmfx001/shoppogram",
        demoLink: "https://shoppogram-12v5.vercel.app/"
      }, {
        img: mars,
        title: "Mars IT School Project",
        description: "Bu loyiha Mars IT Schoolning o'quvchilar, o'qtuvchilar va adminlar foydalanishi uchun yaratilingan website. responsive 100%",
        codeLink: "https://github.com/mmfx001/ApiTranslate",
        marscorelink: "https://marscore-git-main-dilbeks-projects.vercel.app/",
        marsadminlink: "https://mars-adminn-git-master-dilbeks-projects.vercel.app/",
      }, {
        img: map,
        title: "Universty Project",
        description: "Bu loyiha Universty uchun qilingan.Faqat bu hozircha localni yani run qilsangiz ishlaydi! responsive 100%",
        codeLink: "https://github.com/mmfx001/unversty.git",
        demoLink: "https://universty.vercel.app/"
      }
      , {
        img: weather,
        title: "Weather Project",
        description: "Bu loyiha istalgan shaxarni ob-havosini korasstadi va i18n bor yani 3 xil til! responsive 100%",
        codeLink: "https://github.com/mmfx001/weather",
        demoLink: "https://weather-two-rose.vercel.app/"
      } ,{
        img: chatapp,
        title: "Chat-App Project",
        description: "Bu loyihada odamlar bilan suhbatlashishingiz mumkun bu loyihada ovozli habr video habarlar ham yuborish imkooniyati bor. responsive 100%.",
        codeLink: "https://github.com/mmfx001/chatapp",
        demoLink: "https://chat-app-pavx-git-master-dilbeks-projects.vercel.app/"
      }].map((project, index) => (
        <div key={index} style={{ backdropFilter: 'blur(42px)' }} className="backdrop-blur-3xl justify-between shadow-stone-400 flex flex-col p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className='w-full'>
            <img src={project.img} alt={project.title} className="rounded-md mb-4 md:h-36  w-full object-cover" />
            <h2 className="text-xl font-semibold mb-2 text-white text-center">{project.title}</h2>
            <p className="text-gray-200 mb-4">{project.description}</p>
          </div>
          <div className="flex justify-between">
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Code</a>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">Live Demo</a>
            )}
          </div>
          {project.marscorelink && (
            <div className="mt-4">
              <a href={project.marscorelink} target="_blank" rel="noopener noreferrer" className="text-blue-500">Mars Core Link</a>
            </div>
          )}
          {project.marsadminlink && (
            <div className="mt-2">
              <a href={project.marsadminlink} target="_blank" rel="noopener noreferrer" className="text-blue-500">Mars Admin Link</a>
            </div>
          )}
          {project.marsspacelink && (
            <div className="mt-2">
              <a href={project.marsspacelink} target="_blank" rel="noopener noreferrer" className="text-blue-500">Mars Space Link</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Project;
