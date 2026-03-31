import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { PiEmptyBold } from 'react-icons/pi';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    // console.log(totalPrice)

    const handlepay = () => {
        setCarts([])
        toast.success("Payment sucessfull")

    }

    const handleDelete = (item) => {
        const filteredArray = carts.filter((c) => c.id !== item.id);
        setCarts(filteredArray);
        toast.success(`${item.name} Removed`)


    };


    return (
        <div className='max-w-7xl mx-auto mt-5'>

            <div className='border-3 border-solid border-[#f2f2f2]  p-10 rounded-2xl '>

                <h1 className='font-bold text-2xl mb-5'>Your Carts</h1>

                {
                    carts.length === 0 ? (
                        <div className=' flex-col items-center justify-center p-4'>
                            <div className='flex  justify-center items-center'>
                                <FiShoppingCart className='h-20 w-20'></FiShoppingCart>
                            </div>
                            <h3 className='text-center text-3xl font-bold text-[#101727] pt-2'>Your Cart is Empty !!</h3>
                        </div>
                    ) : (

                        <div className='flex flex-col space-y-5'>
                            {carts.map(item => (
                                <div key={item.id} className='bg-[#f9fafc] p-5 rounded-2xl shadow-sm'>
                                    <div className='flex items-center justify-between gap-4'>
                                        <div className='flex items-center gap-4'>
                                            <img src={item.icon} alt="" className='h-12 w-12 rounded-lg' />
                                            <div>
                                                <h4 className='font-semibold text-[#101727]'>{item.name}</h4>
                                                <h4 className='text-gray-500'>{item.price}$</h4>
                                            </div>
                                        </div>

                                        <h4 onClick={() => handleDelete(item)} className='text-red-600 cursor-pointer'>Remove</h4>
                                    </div>
                                </div>
                            ))}

                            <div className='flex justify-between pt-5 '>
                                <h4>Total--</h4>
                                <h4 className='font-semibold text-2xl'>{totalPrice} $</h4>
                            </div>

                            <button onClick={handlepay} className='button bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white text-lg rounded py-3  '>Proceed to Checkout</button>
                        </div>
                    )}


            </div>

        </div>
    );
};

export default Cart;

