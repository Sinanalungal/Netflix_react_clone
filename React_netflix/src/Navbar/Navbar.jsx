import React from 'react'
import "./Navbar.css"
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  return (
    <div id='nav' className='navbar w-full flex text-white'>
        <div className="logo flex mt-6 fixed left-[60px] w-[90px] ">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt=""  />
          
          <div className='nav-options text-sm font-semibold left-44 fixed '><ul className='flex flex-row'>
          <li className=' hover:text-zinc-400'>Home</li>
          <li className=' hover:text-zinc-400'>TV Shows</li>
          <li className=' hover:text-zinc-400'>Movies</li>
          <li className=' hover:text-zinc-400'>New & Popular</li>
          <li className=' hover:text-zinc-400'>My List</li>
          <li className=' hover:text-zinc-400'>Browse by Languages</li>
          </ul></div>
        </div>
        
        <div className='avthar w-[30px] right-[155px] fixed top-[20px] flex items-center '>
        
          <div className='mr-5'><IoIosSearch size={25}/>
          </div>
          <div className='mr-5'><FaRegBell size={20}/>
          </div>
          <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
          <div>
            < RiArrowDropDownFill size={30} />
          </div>
        </div>
    </div>
  )
}

export default Navbar