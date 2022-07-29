import React from 'react';
import dayjs from 'dayjs';

function New({ title, description, publishedAt, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className='w-full cursor-pointer'>
      <p className='text-[16px] text-[#A8A8B3]'>{dayjs(publishedAt).format("D MMMM YYYY")}</p>
      <h1 className='font-bold text-[24px] text-white hover:underline'>{title}</h1>
      <p className='text-[16px] text-[#A8A8B3]'>{description}</p>
      <div className='w-full h-[1px] bg-[#323238] my-[32px]'></div>
    </a>
  );
}

export default New;