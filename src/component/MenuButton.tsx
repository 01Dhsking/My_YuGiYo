import React from 'react'
import { useState } from 'react';

export const MenuButton =  ({goal}: string) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    function handleMouseEnter() {
      setIsHovered(true);
    }

    function handleMouseLeave() {
      setIsHovered(false);
    }

  return (
    <div className='w-1/2 h-20 bg-blue-100 rounded flex
     justify-center items-center m-5 font-bold shadow-md'
     style={{ backgroundColor: isHovered ? '#a7f3d0' : 'transparent'}}>
        <button
          className='py-3 px-10'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ color: isHovered ? 'white' : 'black'}}>
            {goal}
        </button>
    </div>
  )
}

