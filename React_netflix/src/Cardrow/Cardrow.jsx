import React from "react"
import "./Cardrow.css"

function CardItems() {
    return (
      <>
      <div className="carditems ml-16 py-8 text-white" >
        <h1 className="text-xl ml-2 font-medium">Popular Movies</h1>
        <div className="cardsdiv mt-3 flex overflow-scroll">
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
            <img src="../../public/Edge-of-tomorrow.jpeg" alt="" />
        </div>
      </div>
      </>
     
    )
  }
  
  export default CardItems