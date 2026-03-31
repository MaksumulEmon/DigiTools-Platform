import React, { use } from 'react';

import Toolscard from '../Toolscard/Toolscard';

const Tools = ({ toolsPromise,carts,setCarts }) => {
    const tools = use(toolsPromise);
    // console.log(tools);
    return (
        <div className='max-w-7xl mx-auto'>


            <div className='text-center space-y-3 m-5 lg:pt-10 lg:pb-8'>
                <h1 className='text-4xl lg:text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5 '>

                {tools.map(tool => <div key={tool.id} className=' rounded-2xl border-2 border-solid space-y-4 border-[#f2f2f2] p-6 hover-3d'>


                    <Toolscard key={tool.id} carts={carts} setCarts={setCarts} tool={tool}></Toolscard>


                </div>)}


            </div>

        </div>
    );
};

export default Tools;