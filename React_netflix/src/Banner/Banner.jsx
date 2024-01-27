import React from "react";
import "./Banner.css";
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";


function Banner() {
  return (
    <>
    
    <div className="banner  w-full h-[680px] mb-10 ">
    <div className="shadetop w-full h-[70px]"></div>
    {/* <div className="shadetop w-full h-[70px]"></div> */}

        <div className="details text-white mt-[19%] relative">
        
          <h1 className="font-bold text-5xl ">MOVIE NAME</h1>
          
          <h1 className="mt-4">ldfkgjdlfgldfjglkdfdjfgldfkjglkdfjglkfglkdfglfdlgljfdjgkjfkgkldfsdggfdfgfdgfdgffgjklkfdgkjdjdkfjkdfkjdjkfddfkjhjkdfjkddfsdfjkfdjklgljfdljkgjlkfdjkglkjlfdkgjdfgdf</h1>
          <div className="flex mt-5 ">
              <button className="py-3 px-8 rounded hover:bg-slate-200 bg-white text-black flex justify-center align-middle"><FaPlay size={20} />&nbsp;Play</button>
              <button className="more-info px-7 py-3 bg-gray-400 ml-2 rounded flex justify-center align-middle"><IoMdInformationCircleOutline size={27} />&nbsp; More Info</button>
          </div>
        </div>
        <div className="shade w-full h-[50px]"></div>
        <div className="shade w-full h-[50px]"></div>

    </div>

    </>
   
  )
}

export default Banner