import React from 'react'
import { MenuButton } from "../component/MenuButton"
import { CircleUserRound } from 'lucide-react';
import { Gamepad2 } from 'lucide-react';
import { useState } from 'react';

export const MainMenu = () => {

  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-emerald-100">

      <div className='flex flex-col justify-center items-center 
        py-10 w-full mx-20 '>

        <div className=' mb-5 w-full  flex items-center border-8 border-emerald-300 
          rounded-full bg-lime-200 shadow-md'>

          <div className='h-20 w-32 ' />

          <div className='h-20 w-full flex flex-col justify-center items-center'>
            <Gamepad2 size="50"/>
            <h4 className='font-bold text-white'>YuGiYo</h4>
          </div>

          <div className='flex flex-col justify-center items-center 
            h-20 w-32 bg-emerald-200 rounded-full px-5'
            style={{ backgroundColor: isHovered ? '#a7f3d0' : 'transparent'}}>
            <CircleUserRound size="40" className="cursor-pointer" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}/>
            <h4 className='font-bold text-white'>Dhsking</h4>
          </div> 

        </div>
          <MenuButton goal="JOUER" />
          <MenuButton goal="RECOMMENCER" />
          <MenuButton goal="PARAMETRE" />
          <MenuButton goal="QUITTER" />
      </div>

    </div>
  )
}
