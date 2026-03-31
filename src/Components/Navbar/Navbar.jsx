import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({carts}) => {
    return (

        <div className='border-b border-[#f2f2f2] border-solid'>


            <div className="navbar bg-base-100  max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <GiHamburgerMenu />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a >Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>


                        </ul>
                    </div>
                    <a className="bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-extrabold p-3">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>

                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>



                <div className=" navbar-end gap-3 ">

                    <div className=' gap-2 items-center hidden md:flex'>
                        {/*  */}
                        <div className='relative'>
                            <FaCartShopping className='h-6 w-6'></FaCartShopping>
                           {
                            carts.length !== 0 &&  <p className='absolute -top-3 left-4 bg-red-500 px-2 text-white rounded-full'>{carts.length}</p>
                           } 
                          
                        </div>
                        <li><a className='font-medium ml-3'>Login</a></li>
                    </div>


                    {/* <div className='relative'>
                        <HiOutlineShoppingCart className='h-6 w-6' />
                        <p className='absolute -top-4 -left-4 bg-red-500 px-2 text-white rounded-full'>{carts.length}</p>
                    </div> */}



                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>

                </div>
            </div>
        </div >
    );
};

export default Navbar;