"use client";
import React from 'react'
import data from './data';
import SideBarDynamic from './SideBarDynamic';

const SideBar = ({ collapsed }) => {
   
    return (
        <aside className={`flex sidebar transiton-width duration-300 overflow-y-auto ${collapsed ? 'w-1/16' : 'w-1/4 md:block'} `}>
            <nav className='h-full flex flex-col bg-white  shadow-sm'>
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