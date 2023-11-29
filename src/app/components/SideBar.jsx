"use client";
import React from 'react'
import SideBarDynamic from './SideBarDynamic';
import data from './data';


const SideBar = ({ collapsed }) => {
   
    return (
        // <aside className={`flex bg-white sidebar z-[999] transiton-width duration-300 overflow-y-auto ${collapsed ? 'w-1/16' : 'w-1/4 md:block'} `}></aside>
        <aside className={`flex bg-white sidebar z-99 transiton-width duration-300 overflow-y-auto ${collapsed ? 'w-1/16' : 'w-80 max-w-7xl md:block'} `}>
            <nav className='h-full flex flex-col  shadow-sm'>
                <ul className="flex-1 px-3">
                    {data.map((item, index) => (
                        <SideBarDynamic key={index} {...item} collapsed={collapsed} />
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
export default SideBar