import React from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";

import GoogleButton from "../GoogleButton";

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

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
      <div className="header">
        <div className="header_container">
          <div className="header_left">
            <FaBars size={24} color="#fff" />
            <div className="header_logo" onClick={onLogoClick}>
              WeTube
            </div>
          </div>

          <div className="header_center">
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

          <div className="header_right">
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

export default Header;
