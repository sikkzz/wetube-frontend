import React from "react";
import { AiOutlineHome } from "react-icons/ai";

import Img from "../../assets/test2.jpg";

import "./StudioSidebar.scss";

const StudioSidebar = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        {count.map(() => (
          <li className="studio_sidebar_list_item">
            <div className="studio_sidebar_list_item_box">
              <div className="studio_sidebar_list_item_icon">
                <AiOutlineHome size={24} color="#fff" />
              </div>
              <div className="studio_sidebar_list_item_text">대시보드</div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StudioSidebar;
