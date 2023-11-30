"use client";
import React from 'react'
import SideBarDynamic from './SideBarDynamic';
import data from './data';


const SideBar = ({ collapsed }) => {
 
    return (
        <aside className={`flex bg-white sidebar relative top-0 bottom-0 z-99 transiton-width duration-300 overflow-y-auto ${collapsed ? 'w-1/16' : 'w-80 md:block'}  `}>
            <nav className='h-screen flex flex-col'>
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