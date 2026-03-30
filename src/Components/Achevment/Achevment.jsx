import React from 'react';

const Achevment = () => {
    return (
        <div className='bg-linear-to-r from from-[#4F39F6] to-[#9514FA]'>


            <div className='grid grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto  text-center p-8  gap-3'>
                <div className='space-y-2'>
                    <h1 className='text-5xl md:text-6xl font-extrabold text-white'>50K+</h1>
                    <p className='text-white opacity-80'>Active Users</p>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-5xl md:text-6xl font-extrabold text-white'>200+</h1>
                    <p className='text-white opacity-80'>Premium Tools</p>
                </div>

                <div className='space-y-2'>
                    <h1 className='text-5xl md:text-6xl font-extrabold text-white'>4.9</h1>
                    <p className='text-white opacity-80 '>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Achevment;