import React from 'react';

interface MenuButtonProps {
  goal: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ goal }) => {
  return (
    <div className='bg-red-400 rounded flex justify-center
    items-center m-5 font-bold shadow-md hover:bg-red-600'>
      <button className='py-3 px-10 hover:text-red-600'>
        {goal}
      </button>
    </div>
  );
};
