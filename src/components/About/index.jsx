import React from 'react';  

import Hello from "../../assets/hello.svg";
import Woman from "../../assets/woman.svg";

function About() {
  return (
    <div className='w-full h-[calc(100%+92px)] flex items-center px-[168px]'>
      <div className='flex flex-col'>
        <div className='flex items-center'>
          <img className='w-[26px] h-[26px] mr-[17px]'src={Hello} alt="Hello Emoji" />
          <h3 className='font-bold text-[24px] text-[#E1E1E6]'>Hey, welcome</h3>
        </div>

        <h1 className='mt-[42px] font-black text-[72px] text-white'>News about <br /> the <span className='text-[#61DCFB]'>World</span>!</h1>
        <p className='my-[30px] text-[24px] text-[#E1E1E6]'>If you like my work you can buy <br /> <span className='font-bold text-[#61DCFB]'>me a coffe</span></p>
        <button className='w-[260px] h-[64px] bg-[#EBA417] rounded-full font-bold text-[20px] text-[#121214] hover:opacity-50'>Buy me a coffe</button>
      </div>

      <img className='w-[334px] ml-[152px]' src={Woman} alt="Woman Image" />
    </div>
  );
}

export default About;