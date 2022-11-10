import React from "react";
import { AiOutlineHome } from "react-icons/ai";

import './Sidebars.scss'

const Sidebars = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar_list">
        <div className="sidebar_list_menu">
          <li className="sidebar_list_item">
            <div className="sidebar_list_item_box">
              <AiOutlineHome size={24} />
              <div className="sidebar_list_item_content">Content</div>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebars;
