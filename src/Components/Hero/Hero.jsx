import React from 'react';
import heroleftbanner from "../../assets/banner.png"
import { FaTools } from 'react-icons/fa';
import playicone from '../../assets/playicone.png'


const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto md:mt-20'>

            <div className='flex flex-col-reverse md:flex-row m-5 gap-8'>

                {/* LEFT BANNER  */}
                <div className='space-y-5 flex flex-col justify-center'>

                    <p className='pt-2 pb-2 pl-4 pr-4 bg-[#E1E7FF] w-79 rounded-full text-center flex items-center gap-2'>
                        <FaTools></FaTools>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>
                            New: AI-Powered Tools Available
                        </span>
                    </p>


                    <h1 className='text-5xl lg:text-7xl font-extrabold max-w-158 text-[#101727] '>Supercharge Your Digital Workflow</h1>

                    <p className=' md:text-lg max-w-158'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>

                    {/* Button */}
                    <div className='flex gap-3 '>

                        <button className='pl-4 pr-4 pt-3 pb-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>Explore Products</button>


                        {/* <button className='btn bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent te rounded-full  '><span><img src={playicone}></img></span> Watch Demo</button> */}

                        <button className=" px-2 lg:px-4 border-2 border-#9514FA text-[#4F39F6] rounded-full flex items-center gap-0.5 md:gap-2  transition font-bold">
                            <img src={playicone} alt="" />
                            <span>Watch Demo</span>
                        </button>

                    </div>

                </div>


                {/* Right Banne */}
                <div className='flex justify-end w-full'>
                    <img src={heroleftbanner} alt="" className="" />
                </div>

            </div>

        </div>
    );
};

export default Hero;