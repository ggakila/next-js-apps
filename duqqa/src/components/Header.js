import React from 'react'
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import {MdOutlineFavoriteBorder} from "react-icons/md";


export default function Header() {
  return (
    <div className='flex w-full bg-black px-24 text-gray-300 justify-between items-center py-5'> 
      <div className='header--logo'>
        <h1 className='text-6xl font-bold font-tilt'>duqqa</h1>
      </div>
      <input className='w-1/5 p-3 border border-gray-200 rounded-xl' type="text" placeholder='Search product...'></input>
      <div className='flex shrink gap-10 text-xl'>
        <MdOutlineFavoriteBorder />
        <AiOutlineShoppingCart/>
        <AiOutlineUser/>
      </div>
    </div>
  )
}
