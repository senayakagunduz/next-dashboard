import Link from 'next/link'
import React from 'react'

const SideBarItem = ({ icon, text, active, alert, collapsed }) => {
    return (
        <li className={`relative flex items-center justify-center py-2 my-1 
        font-medium rounded-md cursor-pointer transition-colors
         ${active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-index-800"
                : "hover:bg-indigo-50 text-gray-600"
            }
        `}>
            <>
                {collapsed ? (
                    <div className="w-10 h-10 flex items-center justify-center ml-0 pe-6">{icon}</div>
                ) : (
                    <>
                        <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
                        <Link href='/' className='w-60 ml-3 flex items-center'>{text}</Link>
                        {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-primary`} />}
                    </>
                )}
            </>
        </li>
    )
}

export default SideBarItem