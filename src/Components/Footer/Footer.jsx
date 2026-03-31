import React from 'react';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { RiInstagramLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>



            <div className='max-w-7xl mx-auto pt-10 lg:pt-25  '>


                {/* ! st div */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 m-4'>

                    <div className='text-white/80 max-w-70 mx-auto'>
                        <h1 className='text-4xl font-semibold mb-4'>DigiTools</h1>
                        <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='text-white/80 max-w-70 mx-auto space-y-3'>
                        <p className='text-xl font-medium'>Product</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>

                    </div>

                    <div className='text-white/80  max-w-70 mx-auto space-y-3 '>
                        <p className='text-xl font-medium'>Company</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>

                    </div>

                    <div className='text-white/80 max-w-70 mx-auto space-y-3'>
                        <p className='text-xl font-medium'>Social Links</p>

                        <div className='flex gap-4 flex-wrap'>


                            <div className='flex items-center justify-center bg-white rounded-full h-12 w-12 text-black'>
                                <RiInstagramLine size={24} />
                            </div>


                            <div className='flex items-center justify-center bg-white rounded-full h-12 w-12 text-black'>
                                <FaFacebook size={24}></FaFacebook>
                            </div>


                            <div className='flex items-center justify-center bg-white rounded-full h-12 w-12 text-black'>
                                <FaXTwitter size={24} />
                            </div>


                        </div>


                    </div>

                </div>

                <hr className=' border-solid border-[#e5e7eb]/80 mt-10' />

                {/* Seconf div */}
                <div className='flex-col lg:flex items-center gap-3 lg:justify-between p-7 text-[#fafafa]/80'>
                    <small>© 2026 Digitools. All rights reserved.</small>

                    <div className='flex  gap-3'>
                        <small>Privacy Policy</small>
                        <small>Terms of Service</small>
                        <small>Cookies</small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;