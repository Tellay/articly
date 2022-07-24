import React from 'react';

import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='w-full h-[calc(100%+92px)] flex flex-col justify-center items-center'>
      <ReactLoading type='bars' color='#61dcfb' width={25} height={25} />
      <h1 className='font-black text-white text-[72px]'>Error</h1>
      <p className='text-[#A8A8B3] text-[18px]'>It looks like the page you were trying to visit doesn't exist.</p>
      <Link to={"/"}>
        <button className='w-[260px] h-[64px] mt-8 bg-[#EBA417] rounded-full font-bold text-[20px] text-[#121214] hover:opacity-50'>Vist home page!</button>
      </Link>
    </div>
  );
}

export default Error;