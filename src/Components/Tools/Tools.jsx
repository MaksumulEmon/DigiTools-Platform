import React, { use } from 'react';
import { FcCheckmark } from 'react-icons/fc';

const Tools = ({ toolsPromise }) => {
    const tools = use(toolsPromise);
    // console.log(tools);
    return (
        <div className='max-w-7xl mx-auto'>


            <div className='text-center space-y-3 m-5 lg:pt-20 lg:pb-8'>
                <h1 className='text-4xl lg:text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5'>


                {tools.map(tool => <div key={tool.id} className=' rounded-2xl border-2 border-solid space-y-4 border-[#f2f2f2] p-6'>


                    <div className='flex justify-between'>

                        <img src={tool.icon} alt="" className='h-10 w-10' />
                        <p className="flex justify-center rounded-full py-2 px-3 font-medium bg-[#fef3c6] text-[#bb4d00]">{tool.tag}</p>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='text-2xl font-bold text-[#101727]'>{tool.name}</h4>
                        <p className='text-[#627382] line-clamp-2'>{tool.description}</p>

                        <div className='flex  items-center'>
                            <h3 className='font-bold text-2xl text-[#101727]'>{tool.price}$/</h3>

                            <p className='text-[#627382]'>{tool.period}</p>
                        </div>

                        {/* Feture sections */}
                        <div className='flex  items-center gap-1'>
                            <FcCheckmark></FcCheckmark>
                            <h4 className='font-medium text-[#627382]'>Unlimited AI generations</h4>
                        </div>
                    </div>

                    <button className='w-full pl-4 pr-4 pt-3 pb-3 rounded-lg bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold '>Buy Now</button>
                </div>)}


            </div>

        </div>
    );
};

export default Tools;