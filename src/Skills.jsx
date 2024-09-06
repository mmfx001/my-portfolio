import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', src: 'https://static-00.iconduck.com/assets.00/html5-icon-2018x2048-st7q7lm6.png', value: 80 },
    { name: 'CSS', src: 'https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png', value: 80 },
    { name: 'React', src: 'https://www.technogiq.com/careers/wp-content/uploads/2022/01/React-removebg-preview.png', value: 60 },
    { name: 'Tailwind', src: 'https://images.squarespace-cdn.com/content/v1/658304bceabeda35f23becd0/1720663374462-ARM8XKCQ9VYB6MOA9S5X/tailwind', value: 85 },
    { name: 'GitHub', src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', value: 60 },
    { name: 'JavaScript', src: 'https://static.vecteezy.com/system/resources/thumbnails/027/127/560/small_2x/javascript-logo-javascript-icon-transparent-free-png.png', value: 75 }
  ];

  return (
    <div className='p-12 bg-gradient-to-br from-gray-900 to-gray-700 text-white min-h-screen'>
      <h1 className='text-4xl font-bold mb-8 text-blue-400 text-center'>My Skills</h1>
      <div className='space-y-6'>
        {skills.map((skill) => (
          <div key={skill.name} className='flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105'>
            <img className='w-16 h-16 object-contain' src={skill.src} alt={skill.name} />
            <div className='flex-1'>
              <p className='text-xl font-semibold'>{skill.name}</p>
              <div className='relative mt-2'>
                <div className='w-full h-5 bg-gray-600 rounded-full'>
                  <div
                    className='h-full bg-blue-500 rounded-full'
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
                <span className='absolute inset-0 flex items-center justify-center text-xs font-semibold text-white'>
                  {skill.value}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
