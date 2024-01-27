import React, { useState } from "react"
import "./Cardrow.css"
import { useEffect } from "react"
import axios from "../axios"
import { API_KEY } from "../Constants/Constants"
import { IMG_URL } from '../Constants/Constants'
import ModalDiv from "../Modal/Modal"
// import ModalInFunctionalComponent from "../Modal/Modal"

// function CardItems(props) {
//     const [movielist,setMovieList]=useState()
//     // const [modalIsOpen,setModal]=useState(false)
    
//     useEffect(() => {
//       axios.get(props.url).then((response)=>{
//         console.log(response.data.results)
//         setMovieList(response.data.results)
        
//       })
//     }, [])
//     // function modalClicked(id){
//     //   setModal(true)
//     //   // setModalvideo(id)
//     // }
//     return (
//       <>
      
//       <div className="carditems ml-16 py-8 text-white" >
//         <h1 className="text-2xl ml-2 font-medium">{props.title}</h1>
//         <div className="cardsdiv mt-3 flex overflow-scroll">
//           {movielist?movielist.map((item)=>{
//             return(<img onClick={()=>setModalIsOpenToTrue()} src={`${IMG_URL+item.backdrop_path}`} alt="" />)
//           }):''}
            
            
//         </div>
//       </div>
//       <ModalInFunctionalComponent/>
//       </>
     
//     )
//   }
  
//   export default CardItems


// import React, {useState} from 'react';
import Modal from 'react-modal';


function CardItems (props){

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [movielist,setMovieList]=useState()
    const [videoId,setVideoId]=useState()
    const [videoDetails,setVideoDetails]=useState()
    
    useEffect(() => {
      axios.get(props.url).then((response)=>{
        console.log(response.data.results)
        setMovieList(response.data.results)
        
      })
    }, [])
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : '#000000'      
        }
    };

    const setModalIsOpenToTrue =(item)=>{
        setModalIsOpen(true)
        axios.get(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data.results[0].key)
          setVideoId(response.data.results[0].key)
          setVideoDetails(item)
        })
        // console.log(id)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
        setVideoId()

    }

    return(
        <>
            <div className="carditems ml-16 py-8 text-white" >
              <h1 className="text-2xl ml-2 font-medium">{props.title}</h1>
              <div className="cardsdiv mt-3 flex overflow-scroll">
                {movielist?movielist.map((item)=>{
                  return(<img onClick={()=>setModalIsOpenToTrue(item)} src={`${IMG_URL+item.backdrop_path}`} alt="" />)
                }):''}
                  
                  
              </div>
            </div>

            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                <button className="text-white right-0 font-extrabold" onClick={setModalIsOpenToFalse}>x</button>
                <ModalDiv  id={videoId} about={videoDetails}/>
            </Modal>
        </>
    )
}
export default CardItems