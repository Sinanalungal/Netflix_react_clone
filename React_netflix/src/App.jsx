import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import CardItems from './Cardrow/Cardrow'
import Footer from './Footer/Footer'
import YouTube from 'react-youtube'
import Modal from 'react-modal';
import {trending,action,originals,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies,Documentaries} from './urls'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
    <Navbar/>
    <Banner/>
    <CardItems  url={trending} title='Trending on Netflix'/>
    <CardItems  url={action} title='Action on Netflix'/>
    <CardItems  url={originals} title='Orginals on Netflix'/>
    <CardItems  url={ComedyMovies} title='Comedy Movies on Netflix'/>
    {/* <CardItems  url={HorrorMovies} title='Horror Movies on Netflix'/> */}
    <CardItems  url={ActionMovies} title='Action Movies on Netflix'/>
    {/* <CardItems  url={RomanceMovies} title='Romance Movies on Netflix'/> */}
    <CardItems  url={Documentaries} title='Documentaries on Netflix'/>
    <Footer/>
    </>
  )
}

export default App
