import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import ChannelContent from "../components/ChannelContent/ChannelContent";

import "./Channel.scss";

const Channel = () => {
  return (
    <>
      <div className="container">
        <div className="headers_container">
          <Header />
        </div>
        <div className="channel_contents_container">
          <div className="channel_sidebars_container">
            <Sidebar />
          </div>
          <div className="channel_mains_container">
            <div className="details_container">
              <ChannelContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channel;
