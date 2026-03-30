import './App.css'
import Achevment from './Components/Achevment/Achevment'
import Footer from './Components/Footer/Footer'
import Getstarted from './Components/Getstarted/Getstarted'
import Hero from './Components/Hero/Hero'

import Navbar from './Components/Navbar/Navbar'
import Transparent from './Components/Transparent/Transparent'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Achevment></Achevment>
      <Getstarted></Getstarted>
      <Transparent></Transparent>
      <Footer></Footer>
    </>
  )
}

export default App
