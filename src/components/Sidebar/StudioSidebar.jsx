import React from "react";
import { AiOutlineHome } from "react-icons/ai";

import Img from "../../assets/test2.jpg";

import "./StudioSidebar.scss";

const StudioSidebar = () => {
  return (
    <nav className="studio_sidebar">
      <ul className="studio_sidebar_list">
        <div className="studio_sidebar_profile">
          <img
            src={Img}
            className="studio_sidebar_profile_image"
            alt="profile_image"
          />
          <div className="studio_sidebar_profile_content">
            <div className="studio_sidebar_profile_content_title">내 채널</div>
            <div className="studio_sidebar_profile_content_name">김준식</div>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default StudioSidebar;
