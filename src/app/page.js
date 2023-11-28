"use client";
import SideBar from "./components/SideBar";
// import SideBarItem from "./components/SideBarItem";
import Header from "./components/Header";
import { useState } from "react";
import data from "./components/data"
import Content from "./components/Content";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false); //açık

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }
  return (
    <>
      <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
      <main className="flex min-h-screen items-start">
        <SideBar className="" collapsed={collapsed} >
          <div className={`${collapsed && 'flex-col'}`}>
            {data.map((item, index) => (
              <SideBarDynamic key={index} {...item} collapsed={collapsed} />
            ))}
          </div>
          {/* <hr className="border-t border-gray-300 mb-10 mt-2" /> */}
        </SideBar>
        <Content />
      </main>
    </>
  )
}

const SideBarDynamic = ({ icon, text, children, collapsed, active }) => {

  return (
    <div>
      {/* {icon} */}
      {children && children.length > 0 ?
        (
          <div>
            <span>{icon}</span>
            <span>{text}</span>
            {!collapsed ? (
              <div className="ml-2 flex-col itemClasses">
                {children.map((child, index) => (
                  <SideBarItem key={index} {...child} index={index} collapsed={collapsed} />
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <SideBarItem text={text} icon={icon} />
        )}
    </div>
  );
};
const SideBarItem = ({ icon, text, children, index, collapsed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const itemClasses = `relative flex items-center justify-center py-2 my-1 
    font-medium rounded-md cursor-pointer transition-colors ps-0
     ${!collapsed
      ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-index-800 hover:purple"
      : "hover:bg-indigo-50 text-gray-600"
    }`

  return (
    <div key={index} className={`flex-col items-center gap-2 cursor-pointer ${collapsed ? 'ml-2' : ''}`}>
      <div className="flex align-center justify-start mb-3 text-gray-600 hover:bg-purple-100 hover-scale-110" >
        <span className="text-xl mr-3">{icon}</span>
        <span onClick={toggleDropdown} >{text}</span>
        {isOpen && children && children.length > 0 && (
          isOpen ? (
            <MdKeyboardArrowDown className="text-xl" />
          ) : (
            <MdKeyboardArrowUp className="text-xl" />
          )
        )}
      </div>

      {isOpen && children && children.length > 0 && (

        <div className="ml-2">
          {children.map((child, index) => (
            <SideBarItem key={index} {...child} index={index} collapsed={collapsed} />
          ))}
        </div>
      )}
    </div>
  );
};



// const SideBarDynamic = ({ icon, text, children, collapsed, active }) => {
//   return (
//     <div>
//       {icon}
//       {collapsed ? (
//         children && (
//           <div className="ml-2">
//             {children.map((child, index) => (
//               <SideBarItem {...child} index={index} collapsed={collapsed} />
//             ))}
//           </div>
//         )
//       ) : (
//         <>
//           <span>{text}</span>
//           {children && (
//             <div className="ml-2">
//               {children.map((child, index) => (
//                 <SideBarItem {...child} index={index} collapsed={collapsed} />
//               ))}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };


{/* <li key={index} className={`text-gray-600 text-sm flex items-center gap-x-4 transition-colors cursor-pointer p-2 ps-0 hover:bg-purple-200 rounded-md mt-2 ${data.submenu && "mt-9"}`}>
  <span className={` text-gray-600 text-2xl block float-left`}>{child.icon}</span>
  <span className={`text-base font-medium flex-1 duration-200 ${collapsed && "hidden"}`}>{child.text}</span>
</li> */}