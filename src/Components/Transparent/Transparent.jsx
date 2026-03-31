import React from 'react';

const Transparent = () => {
    return (
        <div className='max-w-7xl mx-auto  lg:p-20'>

            <div className='m-5'>
                <h1 className='text-4xl  md:text-5xl font font-extrabold text-center' >Simple, Transparent Pricing</h1>
                <p className='text-[#627382] text-center mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>


            {/* Card Section */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-5 '>

                {/* Card 1 */}
                <div className="card  rounded-2xl bg-[#f9fafc] shadow-sm border-2 border-solid border-[#f2f2f2] mt-12">
                    <div className="card-body  ">

                        <div className="">
                            <h2 className="text-2xl font-bold">Starter</h2>
                            <p className='text-[#627382]'>Perfect for getting started</p>

                        </div>
                        <p className='text-4xl font-bold mt-4'>$29/<span>Month</span></p>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] font-medium'>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] font-medium'>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] font-medium'>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] font-medium'> AI-driven image enhancements</span>
                            </li>


                        </ul>
                        <div className="mt-6">
                            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white w-full py-3 px-4 rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>




                {/* Card 2 */}
                <div className="relative rounded-2xl card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm border-2 border-solid border-[#f2f2f2] mt-12">
                    <div className="card-body ">
                        <span className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full py-1.5 px-3 font-medium bg-[#fef3c6] text-[#bb4d00]">Most Popular</span>
                        <div className="">
                            <h2 className="text-2xl font-bold text-white">Pro</h2>
                            <p className='text-white'>Best for professionals</p>

                        </div>
                        <p className='text-4xl font-bold text-white mt-4 mb-3'>$99/ <span>Month</span></p>

                        <ul className=" flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-white font-medium'>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-white  font-medium'>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-white  font-medium'>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-white  font-medium'>Unlimited projects</span>
                            </li>



                        </ul>
                        <div className="mt-6">
                            <button className="font-bold w-full py-3 px-4 rounded-full bg-white">
                                <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Get Started Free</span>

                            </button>


                        </div>
                    </div>
                </div>





                {/* Card 3 */}
                <div className="card rounded-2xl bg-[#f9fafc] shadow-sm border-2 border-solid border-[#f2f2f2] mt-12">
                    <div className="card-body">

                        <div className="">
                            <h2 className="text-2xl font-bold">Enterprise</h2>
                            <p className='text-[#627382]'>For teams and businesses</p>

                        </div>
                        <p className='text-4xl font-bold mt-4 mb-3'>$0/<span>Month</span></p>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] font-medium'>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] font-medium'>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] font-medium'>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] font-medium'>Dedicated support</span>
                            </li>


                        </ul>
                        <div className="mt-6">
                            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white w-full py-3 px-4 rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>


            </div>



        </div>





    );
};

export default Transparent;