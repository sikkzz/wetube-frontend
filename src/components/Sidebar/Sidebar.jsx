import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { SidebarData } from "../../constants/data/SidebarData";

import "./Sidebar.scss";

const Sidebar = () => {
  const [active, setActive] = useState();

  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="sidebar">
      <div className="sidebar_list">
        <div className="sidebar_list_menu">
          {SidebarData.map((item, index) => (
            // {index === 3 ? <hr className="sidebar_list_menu_line" /> : ""}
            <div
              key={index}
              onClick={() => setActive(item)}
              className={`sidebar_list_item ${
                item.link === location.pathname && "sidebar_list_item_active"
              }`}
            >
              <a href={item.link}>
                <div className="sidebar_list_item_box">
                  {item.icon}
                  <div className="sidebar_list_item_content">{item.title}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <hr className="sidebar_list_menu_line" />
      </div>
    </nav>
  );
};

export default Sidebar;
