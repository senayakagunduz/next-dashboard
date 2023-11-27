import Link from 'next/link'
import React from 'react'

const SideBarItem = ({ icon, text, active, alert }) => {
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 
        font-medium rounded-md cursor-pointer transition-colors
         ${
            active 
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-index-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
        `}>
            {icon}
            <Link href='/' className='w-52 ml-3'>{text}</Link>
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-primary`}/>}
        </li>
    )
}

export default SideBarItem