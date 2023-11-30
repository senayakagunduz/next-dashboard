"use client";
import React, { useEffect, useRef, useState } from 'react'
import SideBarDynamic from './SideBarDynamic';
import data from './data';


const SideBar = ({ collapsed, isVisible, setIsVisible }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDocumentClick = (e) => {
        if (isVisible && isMobile && !sidebarRef.current.contains(e.target)) {
            setIsVisible(!isVisible)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [ setIsVisible, isVisible, isMobile]);

    return (
        <aside style={{ visibility: isVisible ? 'visible' : 'hidden' }}
            ref={sidebarRef}
            className={`flex bg-white sidebar h-screen z-99 transition-width duration-300
            overflow-y-auto ${isMobile ? 'fixed top-0 bottom-0 left-0'
                    : 'md:relative'} ${collapsed ? 'w-1/16' : 'w-80 max-w-7xl'}`}>

            <nav className='h-full flex flex-col'>
                {isMobile && (
                    <span className='mb-3'>
                        <a href="#" className='text-xl font-bold text-purple-800 py-4'>
                            Berry
                        </a>
                    </span>)}
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