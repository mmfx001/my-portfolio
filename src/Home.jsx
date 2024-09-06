import React from 'react';

function Home() {
  const styles = `
    @keyframes borderAnimation {
      0% { border-color: #cbd5e1; }  /* slate-500 */
      33% { border-color: #0047ab; } /* cobalt */
      66% { border-color: #003366; } /* dark blue */
      100% { border-color: #ffffff; } /* white */
    }

    .animated-border {
      border: 5px solid;
      border-radius: 20px;
      animation: borderAnimation 3s infinite linear;
    }
  `;

  return (
    <div 
      className={`flex flex-col justify-center items-center w-full h-screen text-center bg-slate-800 bg-cover bg-center`}
      style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/026/527/622/original/circuit-board-connection-and-falling-down-binary-code-on-blue-background-digital-rain-of-binary-numbers-numbers-flowing-between-lines-moving-electrons-on-motherboard-internet-technology-concept-video.jpg')` }}
    >
      <style>{styles}</style>
      <div className='w-[50%] h-[40%] bg-[rgba(0,0,0,0.6)] rounded-3xl shadow-2xl flex flex-col items-center justify-center animated-border'>
        <h1 className={`text-5xl font-bold text-white`}>
          SHERMATOV <span className='ml-5'>DILBEK</span>
        </h1>
        <p className='text-2xl mt-4 text-white'>
          FrontEnd Developer
        </p>
      </div>
    </div>
  );
}

export default Home;
