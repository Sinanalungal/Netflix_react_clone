import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import CardItems from './Cardrow/Cardrow'
import Footer from './Footer/Footer'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
    <Navbar/>
    <Banner></Banner>
    <CardItems/>
    <Footer></Footer>
    </>
  )
}

export default App
