import React from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../../constants/icon";
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
            <div className="header_nav_button">
              <Icons.FaBars size={20} color="#fff" />
            </div>
            <div className="header_logo" onClick={onLogoClick}>
              WeTube
            </div>
          </div>

          <div className="header_center">
            <div className="search_box">
              <div className="search_container">
                <form>
                  <input type="text" placeholder="검색" />
                </form>
              </div>
              <div className="search_icon">
                <Icons.BsSearch size={18} />
              </div>
            </div>
          </div>

          <div className="header_right">
            <Icons.RiVideoAddLine
              size={30}
              color="#fff"
              onClick={onStudioClick}
            />
            <Icons.MdOutlineContactPage
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
