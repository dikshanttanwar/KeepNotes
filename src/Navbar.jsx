import React from 'react'
import {Link} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import Logo from '../public/logo.png'

const Navbar = () => {
  return (
    <div className='border-b-gray-300 border-[1px] w-full flex items-center justify-between p-2 pr-16 pl-16'>

        <div className='w-10 h-10 cursor-pointer'>
                <Link to='/' ><img className='w-full h-full' src={Logo} alt="" /></Link>
        </div>

        <div className='w-auto flex gap-14 '>
        <Link className='font-medium text-gray-700 text-base ' to='/'>Home</Link>
        <Link className='font-medium text-gray-700 text-base ' to='/notes'>Notes</Link>
        {/* <Link className='font-medium text-gray-700 text-lg ' to='/trash'>Trash</Link> */}
        </div>

        <div className='w-8 h-8 cursor-pointer'>
        <FaUserCircle className='w-full h-full'/>
        </div>

    </div>


  )
}

export default Navbar
