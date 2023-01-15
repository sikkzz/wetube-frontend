import React, { useState } from "react";

import { ChannelTabData } from "../../constants/data/ChannelTabData";

import Icons from "../../constants/icon";

const ChannelToolbar = () => {
  const [tab, setTab] = useState("tab-home");

  return (
    <wt-app-toolbar class="wtd-tab-header-render">
      <div id="tabs-container" className="wtd-tab-header-render">
        <div id="tabs-divider" className="wtd-tab-header-render" />
        <wt-paper-tabs id="tabs" class="wtd-tab-header-render">
          <div id="tabsContainer" className="wt-paper-tabs">
            <div id="tabsContent" className="tabs-content wt-paper-tabs">
              {ChannelTabData.map((item, index) => (
                <wt-paper-tab
                  class={`wtd-tab-header-render ${
                    item.id === tab ? tab + " iron-select" : ""
                  }`}
                  key={index}
                  onClick={() => {
                    setTab(item.id);
                  }}
                >
                  <div className="tab-content wt-paper-tab">{item.title}</div>
                </wt-paper-tab>
              ))}
              <wtd-expandable-tab-render class="wtd-tab-header-render">
                <wt-icon-button class="wtd-expandable-tab-render">
                  <button id="button" className="wt-icon-button">
                    <wt-icon class="wtd-expandable-tab-render">
                      <Icons.BsSearch size={18} />
                    </wt-icon>
                  </button>
                </wt-icon-button>
              </wtd-expandable-tab-render>
            </div>
          </div>
        </wt-paper-tabs>
      </div>
    </wt-app-toolbar>
  );
};

export default ChannelToolbar;
