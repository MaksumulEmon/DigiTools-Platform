import React from 'react';
import userpng from "../../assets/user.png"
import packagepng from "../../assets/package.png"
import rocketpng from "../../assets/rocket.png"

const Getstarted = () => {
    return (
        <div className='bg-[#f9fafc] mt-20'>


            <div className='container mx-auto lg:p-20  '>

                <div className=' text-center '>
                    <h1 className='text-[#101727] text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382] mt-4'>Start using premium digital tools in minutes, not hours</p>
                </div>


                {/* 3 Card layer */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  mt-10'>

                    <div className='relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-soild border-[#f1f1f1FF] bg-white m-4 space-y-2'>

                        <div className=" p-3   rounded-full flex justify-center items-center mt-8" style={{
                            background: "linear-gradient(180deg, rgba(79,57,246,0.1) 0%, rgba(149,20,250,0.1) 100%)",
                        }}>
                            <img src={userpng} alt="" className='  object-contain rounded-full' />
                        </div>

                        <h3 className='text-2xl font-bold max-w-60'>Create Account</h3>
                        <p className='text-[#627382] text-center '>Sign up for free in seconds. No credit card required to get started.</p>


                        {/* Relative Bar */}
                        <div className='absolute top-4 right-6 w-12 h-12  flex items-center justify-center rounded-full px-4 py-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>
                            01
                        </div>


                    </div>






                    <div className=' relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-soild border-[#f1f1f1FF] bg-white m-4 space-y-2'>

                        <div className=" p-3   rounded-full flex justify-center items-center mt-8" style={{
                            background: "linear-gradient(180deg, rgba(79,57,246,0.1) 0%, rgba(149,20,250,0.1) 100%)",
                        }}>
                            <img src={packagepng} alt="" className=' object-contain rounded-full' />
                        </div>

                        <h3 className='text-2xl font-bold max-w-60'>Choose Products</h3>
                        <p className='text-[#627382] text-center '>Browse our catalog and select the tools that fit your needs.</p>


                        {/* Relative Bar */}
                        <div className='absolute top-4 right-6 w-12 h-12  flex items-center justify-center rounded-full px-4 py-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>
                            02
                        </div>
                    </div>




                    <div className='relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-soild border-[#f1f1f1FF] bg-white m-4 space-y-2'>

                        <div className=" p-3   rounded-full flex justify-center items-center mt-8" style={{
                            background: "linear-gradient(180deg, rgba(79,57,246,0.1) 0%, rgba(149,20,250,0.1) 100%)",
                        }}>
                            <img src={rocketpng} alt="" className='  object-contain rounded-full' />
                        </div>

                        <h3 className='text-2xl font-bold max-w-60'>Start Creating</h3>
                        <p className='text-[#627382] text-center '>Download and start using your premium tools immediately.</p>


                        {/* Relative Bar */}
                        <div className='absolute top-4 right-6 w-12 h-12  flex items-center justify-center rounded-full px-4 py-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>
                            03
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Getstarted;