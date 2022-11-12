import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";

import GoogleButton from "../GoogleButton";

import "./StudioHeader.scss";

const StudioHeader = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const onLogoClick = () => {
    navigate("/");
  };

  const onStudioClick = () => {
    navigate("/studio");
  };

  const onChannelClick = () => {
    navigate("/channel");
  };

  return (
    <>
      <div className="studio_header">
        <div className="studio_header_container">
          <div className="studio_header_left">
            <div className="studio_header_nav_button">
              <FaBars size={20} color="#fff" />
            </div>
            <div className="studio_header_logo" onClick={onLogoClick}>
              WeTube
            </div>
          </div>

          <div className="studio_header_center">
            <div className="search_box">
              <div className="search_container">
                <form className="search_form">
                  <input
                    className="search_input"
                    type="text"
                    placeholder="검색"
                  />
                </form>
              </div>
              <div className="search_icon">
                <BsSearch size={18} />
              </div>
            </div>
          </div>

          <div className="studio_header_right">
            <RiVideoAddLine size={30} color="#fff" onClick={onStudioClick} />
            <MdOutlineContactPage
              size={30}
              color="#fff"
              onClick={onChannelClick}
            />
            <GoogleButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioHeader;
