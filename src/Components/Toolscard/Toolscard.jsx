import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Toolscard = ({ tool, carts, setCarts }) => {
    const [isBuy, setBuy] = useState(false);



    const handleBuy = () => {
        setBuy(true);
        const isFound = carts.find(item => item.id === tool.id)
        //  console.log(isFound);
        if(isFound) {
            toast.error(`${tool.name} allready in cart !!`)
            return
        }
        setCarts([...carts, tool])
        toast.success(` ${tool.name} add to cart sucessfull`)

    }
    return (
        <div className='space-y-4 '>
            <div className='flex justify-between'>
                <img src={tool.icon} alt="" className='h-10 w-10' />

                {tool.tag === "best seller" && <p className="flex justify-center rounded-full py-2 px-3 font-medium bg-[#fef3c6] text-[#bb4d00]">{tool.tag}</p>}

                {tool.tag === "popular" && <p className="flex justify-center rounded-full py-2 px-3 font-medium bg-[#E1E7FF] text-[#4F39F6]">{tool.tag}</p>}

                {tool.tag === "new" && <p className="flex justify-center rounded-full py-2 px-3 font-medium bg-[#DBFCE7] text-[#0A883E]">{tool.tag}</p>}

            </div>

            <div className='space-y-3'>
                <h4 className='text-2xl font-bold text-[#101727]'>{tool.name}</h4>
                <p className='text-[#627382] line-clamp-2'>{tool.description}</p>

                <div className='flex  items-center'>
                    <h3 className='font-bold text-2xl text-[#101727]'>{tool.price}$/</h3>

                    <p className='text-[#627382]'>{tool.period}</p>
                </div>

                {/* Feture sections */}
                <div className='grid  items-center gap-1'>

                    {
                        tool.features.map((feature, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <FcCheckmark></FcCheckmark>
                                <h4 className='font-medium text-[#627382]'>{feature}</h4>
                            </div>
                        ))
                    }

                </div>
            </div>

            <button onClick={handleBuy} className={`w-full pl-4 pr-4 pt-3 pb-3 rounded-lg cursor-pointer  ${isBuy ? "bg-gray-700 text-white font-bold" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold"}`} > {isBuy ? "Added To cart" : "Buy Now"} </button>
        </div>
    );
};

export default Toolscard;