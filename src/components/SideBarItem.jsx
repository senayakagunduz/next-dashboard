import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const SideBarItem = ({ icon, text, children, collapsed,leaf }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <li className={`flex-col items-center gap-2 cursor-pointer ${leaf ? 'pl-0 ml-7 list-disc' : ''}`}>
      <div className="flex align-center justify-between gap-7 w-30 mb-3 text-textGrey hover:bg-purple-100  rounded hover-scale-710" >
        <div onClick={toggleDropdown} className="flex py-3 pl-3 px-4 items-center justify-between gap-7 w-30">
          <div className="flex items-center">
            <span className="text-xl mr-3">{icon}</span>
            <span>{text}</span>
          </div>
          
          <div className="flex items-center">
            {/*sidebar kapalıysa ve çocuğu varsa yukarı aşağı oku koy*/}
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
      
      {/*sidebar kapalıysa ve çocuğu varsa SidebarItem ı tekrar dön*/}
      {isOpen && children && children.length > 0 && (

        <div className="ml-2">
          {children.map((child, index) => (
            <SideBarItem key={index} {...child} index={index} collapsed={collapsed} />
          ))}
        </div>
      )}
    </li>
  );
};
export default SideBarItem