import React from "react";
import { useLocation } from "react-router-dom";

import { SidebarData } from "../../constants/data/SidebarData";

import "./Sidebar.scss";

const Sidebar = () => {
  const location = useLocation();


  return (
    <nav className="sidebar">
      <div className="sidebar_list">
        <div className="sidebar_list_menu">
          {SidebarData.map((item, index) => (
            <div
              key={index}
              className={`sidebar_list_item ${
                item.link === location.pathname && "sidebar_list_item_active"
              }`}
            >
              <a href={item.link}>
                <div className="sidebar_list_item_box">
                  {item.icon}
                  <div>{item.title}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </nav>
  );
};

export default Sidebar;
