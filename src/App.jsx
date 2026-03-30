import './App.css'
import Achevment from './Components/Achevment/Achevment'
import Footer from './Components/Footer/Footer'
import Getstarted from './Components/Getstarted/Getstarted'
import Hero from './Components/Hero/Hero'

import Navbar from './Components/Navbar/Navbar'
import Tools from './Components/Tools/Tools'
import Transparent from './Components/Transparent/Transparent'

const getTools = async () => {
  const res = await fetch('/tools.json')
  return res.json();
}

const toolsPromise = getTools();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Achevment></Achevment>

      <Tools toolsPromise={toolsPromise}></Tools>

      <Getstarted></Getstarted>
      <Transparent></Transparent>
      <Footer></Footer>
    </>
  )
}

export default App
