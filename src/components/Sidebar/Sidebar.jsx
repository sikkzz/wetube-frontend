import React from "react";
import { AiOutlineHome } from "react-icons/ai";

import "./Sidebars.scss";

const Sidebars = () => {
  const count = [1, 2, 3, 4];
  const count2 = [1, 2, 3];
  return (
    <nav className="sidebar">
      <ul className="sidebar_list">
        {count2.map(() => (
          <>
            <div className="sidebar_list_menu">
              {count.map(() => (
                <li className="sidebar_list_item">
                  <div className="sidebar_list_item_box">
                    <AiOutlineHome size={24} />
                    <div className="sidebar_list_item_content">Content</div>
                  </div>
                </li>
              ))}
            </div>
            <hr className="sidebar_list_menu_line" />
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebars;
