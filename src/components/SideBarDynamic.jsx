import Link from "next/link";
import SideBarItem from "./SideBarItem";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const { useState, useEffect } = require("react");

const SideBarDynamic = ({ icon, text, children, collapsed }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [subMenuOpen, setSubMenuOpen] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  
  const handleItemClick = (index, url) => {
    setSelectedItem(index)

    if(children && children.length>0){
      toggleSubMenu();
    }
    if (url) {
      router.push(url);
    }
  }
  
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  useEffect(() => {

  }, [pathname]);

  return (
    
    <div onClick={toggleSubMenu}>
      {/*link varsa, linklerin alt linkleri varsa ve sidebar açıksa alttaki sidebarItem componentini döndür*/}
      {children && children.length > 0 && !collapsed ? (
          <div>
            <span>{icon}</span>
            <span className="">{text}</span>
            <div className="ml-0 flex-col justify-center align-center text-xs lg:text-md">
              {children.map((child, index) => (
                <Link
                data-te-ripple-init
                data-te-ripple-color="primary"
                  href={child.url ? child.url : ""}
                  key={index}
                  onClick={() => handleItemClick(index,child.url)}
                  
                  className={`${pathname === child.url && index === selectedItem ? 'bg-purple-100 rounded-lg text-purple-800 font-bold transition duration-150 ease-in-out hover:bg-purple-300  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-400' : ''}  text-sm flex justify-center items-center cursor-pointer pl-0} `}
                >
                  <SideBarItem
                    key={index}
                    {...child}
                    index={index}
                    collapsed={collapsed}
                  />
                </Link>

              ))}
            </div>
            <hr className="border-gray-200 my-2 px-2 w-full" /> 
          </div>
        
      ) : (
        <>
          {/*alt link yoksa,kapalısa sidebar sadece iconları getirir*/}
          {children && (
          <div className="ml-2">
            {children.map((child, index) => (
              <div key={index}
                className={`flex-column items-center gap-3 py-2 px-2 rounded-md mt-2 `}
                onClick={() => handleItemClick(index,child.url)}>
                <Link href={child.url} key={index} 
                className={`text-sm flex items-center justify-center gap-x-4  hover:bg-purple-200
                 rounded cursor-pointer p-2 ps-0 
                ${pathname === child.url && index === selectedItem ? 'bg-purple-200 rounded' : ''}`} >
                  <span className={` text-textGrey text-2xl block float-left pl-2`}>{child.icon}</span>
                </Link>
              </div>
            ))}
          </div>
           )} 
        </>
      )}
    </div>
  );
};
export default SideBarDynamic;
