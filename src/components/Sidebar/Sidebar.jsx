import React from "react";

import { SidebarData1, SidebarData2 } from "../../constants/data/SidebarData";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar_list">
        <div className="sidebar_list_menu">
          {SidebarData1.map((item, index) => (
            <>
              <div className="sidebar_list_item" key={index}>
                <div className="sidebar_list_item_box">
                  {item.icon}
                  <div className="sidebar_list_item_content">{item.title}</div>
                </div>
              </div>
            </>
          ))}
        </div>
        <hr className="sidebar_list_menu_line" />

        
        <div className="sidebar_list_menu">
          {SidebarData2.map((item, index) => (
            <>
              <div className="sidebar_list_item" key={index}>
                <div className="sidebar_list_item_box">
                  {item.icon}
                  <div className="sidebar_list_item_content">{item.title}</div>
                </div>
              </div>
            </>
          ))}
        </div>
        <hr className="sidebar_list_menu_line" />
      </div>
    </nav>
  );
};

export default Sidebar;
