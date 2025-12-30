import React from 'react'
import HeroText from './herotext.jsx';
import Arrow from './arrow.jsx';

export const leftcontent = () => {
  return (
      <div className='h-full  flex flex-col justify-between w-1/3'>
        <HeroText/>
        <Arrow/>
    
    </div>
  )
}
export default leftcontent;