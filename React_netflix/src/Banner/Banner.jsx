import React, { useState,useEffect } from "react";
import "./Banner.css";
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { API_KEY , IMG_URL } from "../Constants/Constants";
import axios from "../axios";

function Banner() {
  const [movie,setMovie]=useState()
  const randomInteger = Math.floor(Math.random() * 12);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then((response)=>{
      console.log(randomInteger)
      console.log(response.data.results[randomInteger])
      setMovie(response.data.results[randomInteger])
    })
    
  }, [])
  
  return (
    <>
    <div className="banner  w-full h-[780px] mb-10 " style={{backgroundImage:`url(${movie?IMG_URL+movie.backdrop_path:''})`}}>
    <div className="shadetop w-full h-[70px]"></div>
    {/* <div className="shadetop w-full h-[70px]"></div> */}

        <div className="details text-white mt-[230px] relative">
        
          <h1 className="font-bold text-5xl ">{movie ? (movie.title.toUpperCase()):''}</h1>
          
          <h1 className="mt-4">{movie ? movie.overview:''}</h1>
          <div className="flex mt-5 ">
              <button className="py-3 px-8 rounded hover:bg-slate-200 bg-white text-black flex justify-center align-middle"><FaPlay size={20} />&nbsp;Play</button>
              <button className="more-info px-7 py-3 bg-gray-400 ml-2 rounded flex justify-center align-middle"><IoMdInformationCircleOutline size={27} />&nbsp; More Info</button>
          </div>
        </div>
        <div className="shade w-full h-[40px]"></div>
        {/* <div className="shade w-full h-[50px]"></div> */}

    </div>

    </>
   
  )
}

export default Banner