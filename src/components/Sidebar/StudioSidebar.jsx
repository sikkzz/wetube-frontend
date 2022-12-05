import React from "react";
import Img from "../../assets/test2.jpg";

import { StudioSidebarData } from "../../constants/data/StudioSidebarData";

import "./StudioSidebar.scss";

const StudioSidebar = () => {
  return (
    <nav className="studio_sidebar">
      <div className="studio_sidebar_profile">
        <img
          src={Img}
          alt="profile_image"
        />
        <div className="studio_sidebar_profile_content">
          <h3>내 채널</h3>
          <p>김준식</p>
        </div>
      </div>
      
      <ul className="studio_sidebar_list">
        {StudioSidebarData.map((item, index) => (
          <li className="studio_sidebar_list_item" key={index}>
            <div className="studio_sidebar_list_item_box">
              <div className="studio_sidebar_list_item_icon">
                {item.icon}
              </div>
              <div className="studio_sidebar_list_item_text">{item.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StudioSidebar;
