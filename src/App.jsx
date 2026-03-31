
import './App.css'
import Achevment from './Components/Achevment/Achevment'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'
import Getstarted from './Components/Getstarted/Getstarted'
import Hero from './Components/Hero/Hero'

import Navbar from './Components/Navbar/Navbar'
import Tools from './Components/Tools/Tools'
import Transparent from './Components/Transparent/Transparent'
import Toolscard from './Components/Toolscard/Toolscard'
import {  useState } from 'react'

const getTools = async () => {
  const res = await fetch('/tools.json')
  return res.json();
}

const toolsPromise = getTools();

function App() {

  const [activeTab, setActiveTab] = useState("tools")
  const [carts, setCarts] = useState([])
  // console.log(carts)

  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Hero></Hero>
      <Achevment></Achevment>



      <div className="tabs tabs-box justify-center bg-transparent pt-10">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 font-bold text-lg"
          aria-label="Tools"
          onClick={() => setActiveTab("tools")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 font-bold text-lg"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>




      {activeTab === "tools" && <Tools toolsPromise={toolsPromise} carts={carts} setCarts={setCarts}></Tools>
      }

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} ></Cart>}


      <Getstarted></Getstarted>
      <Transparent></Transparent>
      <Footer></Footer>
    </>
  )
}

export default App
