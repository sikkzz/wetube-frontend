import React from "react";
import { useLocation } from "react-router-dom";

import { SidebarData } from "../../constants/data/SidebarData";

import "./Sidebar.scss";

const Sidebar = () => {
  const location = useLocation();

  return (
    <wt-side>
      <wt-side-list>
        <wt-side-menu class="wt-side">
          {SidebarData.map((item, index) => (
            <wt-side-item
              key={index}
              class={`wt-side ${
                item.link === location.pathname && "wt-side-active"
              }`}
            >
              <a href={item.link}>
                <wt-side-item-wrapper class="wt-side">
                  {item.icon}
                  <div>{item.title}</div>
                </wt-side-item-wrapper>
              </a>
            </wt-side-item>
          ))}
        </wt-side-menu>
        <hr />
      </wt-side-list>
    </wt-side>
  );
};

export default Sidebar;
