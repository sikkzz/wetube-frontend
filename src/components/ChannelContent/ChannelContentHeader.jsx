import React from "react";

import ChannelProfile from "./ChannelProfile";
import ChannelToolbar from "./ChannelToolbar";

const ChannelContentHeader = () => {
  return (
    <div id="header" className="wtd-browse">
      <wtd-tab-header-render class="wtd-browse">
        <wt-app-header-layout class="wtd-tab-header-render">
          <div id="wrapper" className="wt-app-header-layout">
            <wt-app-header
              id="header"
              class="wtd-tab-header-render"
              style={{ left: "240px", right: "0px" }}
            >
              <div id="contentContainer" className="wt-app-header">
                <ChannelProfile />
                <ChannelToolbar />
              </div>
            </wt-app-header>
          </div>
        </wt-app-header-layout>
      </wtd-tab-header-render>
    </div>
  );
};

export default ChannelContentHeader;
