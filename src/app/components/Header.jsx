"use client";
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = ({ toggleSidebar }) => {
    return (
        <nav className='flex w-100 h-50 items-center bg-white'>
            <div className='flex justify-between'>
                    <div className='p-4 ps-4 pb-3 flex justify-between items-center'>
                        <div className='p-4 ps-5 pb-3 flex items-center'>
                            <img src="https://img.logoipsum.com/243.svg" className='w-32' alt="" />
                        </div>
                        <div className='p-4 pb-3'>
                            <button onClick={toggleSidebar} className='p-1.5 rounded-lg bg-purple-200 hover:bg-purpleHover hover:text-lightBlue'>
                                <RxHamburgerMenu />
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center rounded-md px-4 py-2 relative'>
                        <BsSearch className='text-gray-400 text-md block float-left cursor-pointer absolute left-6 me-2'/>
                        <input type={"search"} className='border-2 py-2 px-6 text-base bg-transparent w-full focus:outline-none  placeholder-gray-400' placeholder='search'/>
                    </div>
                </div>
        </nav>
    )
}

export default Header