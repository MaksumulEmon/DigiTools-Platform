
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
import { useState } from 'react'
import Transfrom from './Components/Transfrom/Transfrom'

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
          className={`tab rounded-full w-40 font-bold text-lg border-none ${activeTab === "tools" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
          aria-label="Tools"
          onClick={() => setActiveTab("tools")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 font-bold text-lg ${activeTab === "cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>



      {activeTab === "tools" && <Tools toolsPromise={toolsPromise} carts={carts} setCarts={setCarts}></Tools>
      }

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} ></Cart>}


      <Getstarted></Getstarted>
      <Transparent></Transparent>
      <Transfrom></Transfrom>
      <Footer></Footer>


    </>
  )
}

export default App
