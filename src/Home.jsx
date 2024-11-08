import React from 'react';

function Home() {


  return (
    <div 
      className={`flex flex-col md:mt-0 mt-[-115px] justify-center items-center  w-full h-screen text-center bg-cover bg-center`}
    >
      <div className='w-[83%] md:w-[50%] h-[40%] backdrop-blur-md shadow-stone-300 md:mb-24  mb-0 rounded-3xl shadow-lg flex flex-col items-center justify-center animated-border'>
        <h1 className={`text-2xl md:text-5xl font-bold text-black`}>
          SHERMATOV <span>DILBEK</span>
        </h1>
        <p className='text-xl md:text-2xl mt-4 text-white'>
          FrontEnd Developer
        </p>
      </div>
    </div>
  );
}

export default Home;
