"use client";
import React from 'react'

const SideBar = ({ children , collapsed}) => {
    return (
        <aside collapsed={collapsed} className={`h-screen sidebar transiton-width duration-300 overflow-y-auto ${collapsed ? 'w-16' : 'w-64'}`}>
            <nav className='h-full flex flex-col bg-white  shadow-sm'>
                <ul className={`flex-1 px-3 ${collapsed ? 'hidden' : 'block'}`}>{children}</ul>
            </nav>
        </aside> 
    )
}

export default SideBar