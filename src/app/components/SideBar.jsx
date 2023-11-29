"use client";
import React from 'react'

const SideBar = ({ children , collapsed}) => {
    return (
        <aside className={`flex flex-3 h-screen sidebar transiton-width duration-300 overflow-y-auto ${collapsed ? 'flex-4' : 'flex-3'}`}>
            <nav className='h-full flex flex-col bg-white  shadow-sm'>
                <ul className={`flex-1 px-3`}>{children}</ul>
            </nav>
        </aside> 
    )
}
export default SideBar