import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

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
      <div key={index} className={`flex-col items-center gap-2 cursor-pointer`}>
        <div className="flex align-center justify-start mb-3 text-gray-600 hover:bg-purple-100  rounded hover-scale-110" >
  
          <div onClick={toggleDropdown} className="flex py-3 pl-3 items-center justify-between gap-7 w-30">
            <div className="flex items-center">
              <span className="text-xl mr-3">{icon}</span>
              <span>{text}</span>
            </div>
            <div className="flex items-center">
              {!collapsed && children && children.length > 0 && (
                isOpen ? (
                  < MdKeyboardArrowUp className="text-xl" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl" />
                )
              )}
            </div>
          </div>
  
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
  export default SideBarItem