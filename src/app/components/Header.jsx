"use client";
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoFolderOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa6";
import { SiAirchina } from "react-icons/si";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";

const icons = [
    <FaWifi />, <SiAirchina />, <CiBellOn />, <MdOutlineZoomOutMap />
]

const Header = ({ toggleSidebar }) => {

    return (
        <header className=' flex justify-between items-center bg-white py-2 lg:py-1 px-7 lg:px-3 text-gray-600'>
            <div className=' flex justify-between items-center space-x-8 lg:space-x-16'>
                <div className='flex items-center'>
                    <div className=' hidden lg:block px-0 lg:pr-10'>
                        <a href="#" className=' hidden lg:block text-3xl font-bold text-purple-800 py-4 '>
                            Berry
                        </a>
                    </div>
                </div>
                <div className='flex items-center'>
                    <button onClick={toggleSidebar} className='p-2 rounded bg-purple-200 text-purple-800 hover:bg-purpleHover hover:text-lightBlue'>
                        <RxHamburgerMenu />
                    </button>
                </div>
                <div className="container flex items-center px-2 lg:px-4">
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
                    </div>
                </div>
            </div>
            <nav className="hidden md:flex justify-between items-center space-x-4 lg:space-x-8">
                <ul className="flex items-center sm:none lg:text-lg space-x-4 lg:space-x-8">
                    {
                        icons.map((icon, index) => (
                            <li key={index} className={`${index % 2 == 0 ? "text-purple-600 bg-purple-200 hover:bg-purple-300 p-2 rounded hover:text-white" : "text-blue-600 bg-blue-200 hover:bg-blue-300 p-2 rounded hover:text-white"}`}>
                                <a href="#" className='font-bold text-xl'>{icon}</a>
                            </li>
                        ))
                    }

                </ul>
            </nav>

        </header>
    )
}

export default Header

{/* // <nav className='flex w-100 h-50 items-center bg-white'>
        //     <div className='flex justify-between'>
        //             <div className='p-4 ps-4 pb-3 flex justify-between items-center'>
        //                 <div className='p-4 ps-5 pb-3 flex items-center'>
        //                     <img src="https://img.logoipsum.com/243.svg" className='w-32' alt="" />
        //                 </div>
        //                 <div className='p-4 pb-3'>
        //                     <button onClick={toggleSidebar} className='p-1.5 rounded-lg bg-purple-200 hover:bg-purpleHover hover:text-lightBlue'>
        //                         <RxHamburgerMenu />
        //                     </button>
        //                 </div>
        //             </div>
        //             <div className='flex items-center rounded-md px-4 py-2 relative'>
        //                 <BsSearch className='text-gray-400 text-md block float-left cursor-pointer absolute left-6 me-2'/>
        //                 <input type={"search"} className='border-2 py-2 px-6 text-base bg-transparent w-full focus:outline-none  placeholder-gray-400' placeholder='search'/>      
        //             </div>*/}
{/* </div>
        </nav> */}