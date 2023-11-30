import SideBarItem from "./SideBarItem";

const { useState } = require("react");

const SideBarDynamic = ({ icon, text, children, collapsed }) => {
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleItemClick = (index) => {
      setSelectedItem(index)
    }
    return (
      <div>
        {children && children.length > 0 && !collapsed ?
          (
            <div>
              <span>{icon}</span>
              <span className="">{text}</span>
              {!collapsed ? (
                <div className="ml-2 flex-col text-sm lg:text-md pr-10">
                  {children.map((child, index) => (
                    <SideBarItem
                      onClick={() => handleItemClick(index)}
                      isActive={selectedItem === index}
                      key={index}
                      {...child}
                      index={index}
                      collapsed={collapsed}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <>
              {children && (
                <div className="ml-2">
                  {children.map((child, index) => (
                    <div key={index}
                      className={`flex-column items-center gap-3 hover:bg-purple-100 ${selectedItem === index ? 'bg-purpleLight' : ''} py-2 px-1.5 rounded-md mt-2`}
                      onClick={() => handleItemClick(index)}>
                      <a href="#" key={index} className={`text-textGrey text-sm flex items-center justify-center gap-x-4 transition-colors cursor-pointer p-2 ps-0 `}>
                        <span className={` text-textGrey text-2xl block float-left`}>{child.icon}</span>
                      </a>
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
  