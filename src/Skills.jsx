import React from 'react';

function Skills() {
  const skills = [
    { name: 'GitHub', src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', value: 60 },

    { name: 'React', src: 'https://www.technogiq.com/careers/wp-content/uploads/2022/01/React-removebg-preview.png', value: 80 },
    { name: 'NEXT.JS', src: 'https://static-00.iconduck.com/assets.00/next-js-icon-2048x1234-85gmuivx.png', value: 80 },
    { name: 'HTML', src: 'https://static-00.iconduck.com/assets.00/html5-icon-2018x2048-st7q7lm6.png', value: 80 },
    
    { name: 'CSS', src: 'https://img.icons8.com/color/512/css3.png', value: 80 },
    { name: 'NODE.JS', src: 'https://www.svgrepo.com/show/376337/node-js.svg', value: 80 },
    { name: 'Tailwind', src: 'https://images.squarespace-cdn.com/content/v1/658304bceabeda35f23becd0/1720663374462-ARM8XKCQ9VYB6MOA9S5X/tailwind', value: 65 },
    { name: 'JavaScript', src: 'https://static.vecteezy.com/system/resources/thumbnails/027/127/560/small_2x/javascript-logo-javascript-icon-transparent-free-png.png', value: 75 }
  ];

  return (
    <div className='p-12 backdrop-blur-md text-white min-h-screen'>
      <h1 className='text-3xl md:text-5xl font-bold mb-8 text-stone-300 text-center'>My Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skills.map((skill) => (
          <div key={skill.name} className='backdrop-blur-3xl shadow-lg rounded-lg shadow-stone-600 p-6 transition-transform transform hover:scale-105'>
            <img className='w-20 h-20 object-contain mb-4 mx-auto ' src={skill.src} alt={skill.name} />
            <h2 className='text-xl font-semibold text-center'>{skill.name}</h2>
            <div className='relative mt-4'>
              <div className='w-full h-4 bg-stone-500 rounded-full'>
                <div
                  className='h-full bg-stone-800 rounded-full transition-all duration-500'
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
              <span className='absolute inset-0 flex items-center justify-center text-xs font-semibold text-white'>
                {skill.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
