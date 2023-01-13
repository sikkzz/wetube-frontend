import React from "react";

import "./Sidebar.scss";

import SidebarList from "./SidebarList";
import SidebarFooter from "./SidebarFooter";

import { SidebarDataTitle } from "../../constants/data/SidebarData";

const Sidebar = () => {
  return (
    <div id="guide" className="wtd-app">
      <div id="guide-wrapper" className="wtd-app">
        <div id="guide-spacer" className="wtd-app" />
        <div id="guide-content" className="wtd-app">
          <div id="guide-inner-content" className="wtd-app">
            <wtd-guide-render id="guide-render" class="wtd-app">
              <div id="sections" className="wtd-guide-render">
                {SidebarDataTitle.map((item, index) => (
                  <SidebarList sidebarTitle={item.title} key={index} />
                ))}
              </div>
              <SidebarFooter />
            </wtd-guide-render>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
