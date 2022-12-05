import React, { useState } from "react";
import "./ChannelContent.scss";
import Image from "../../assets/test.jpg";

import { ChannelTabData } from "../../constants/data/ChannelTabData";

const ChannelContent = () => {
  const [tabMode, setTabMode] = useState("home");

  const onTabClick = (e) => {
    if (e.target.id === "home") {
      setTabMode("home");
    } else if (e.target.id === "playlist") {
      setTabMode("playlist");
    } else if (e.target.id === "channel") {
      setTabMode("channel");
    } else if (e.target.id === "info") {
      setTabMode("info");
    }
  };

  return (
    <div className="channel">
      <div className="channel_header">
        <div className="channel_profile">
          <div className="channel_profile_container">
            <div className="channel_profile_image_container">
              <img src={Image} alt="channel_profile_image" />
            </div>

            <div className="channel_profile_content_container">
              <div className="channel_profile_content_meta">
                <div className="channel_profile_content_name">Test</div>
                <div className="channel_profile_content_sub">구독자 없음</div>
              </div>

              <div className="channel_profile_content_button_container">
                <div>채널 맞춤설정</div>
                <div>동영상 관리</div>
              </div>
            </div>
          </div>

          <div className="channel_tab">
            <div className="channel_tab_container">
              <div className="channel_tab_item_container">
                {ChannelTabData.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      tabMode === item.id && "channel_tab_item_active"
                    }`}
                    onClick={onTabClick}
                    id={item.id}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="channel_content"></div>
    </div>
  );
};

export default ChannelContent;
