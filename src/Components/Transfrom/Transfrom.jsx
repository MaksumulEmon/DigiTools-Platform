import React from 'react';

const Transfrom = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-25'>
            <div className='max-w-7xl mx-auto'>

                <div className='flex flex-col justify-center items-center space-y-4'>
                    <h1 className='text-4xl text-white font-extrabold'>Ready to Transform Your Workflow?</h1>
                    <p className='text-white/60'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>

                    <div className='flex gap-2'>
                        <button className='bg-white px-4 py-2 rounded-full text-[#4F39F6] font-semibold'>Explore Products</button>
                        <button className='border-2 border-solid border-white rounded-full px-4 py-2 text-white '>View Pricing</button>

                    </div>
                    <p className='text-white/60'>14-day free trial • No credit card required • Cancel anytime</p>

                </div>
            </div>
        </div>
    );
};

export default Transfrom;

