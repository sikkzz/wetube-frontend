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
      <wt-head class="header">
        <div id="container" className="wt-head">
          <div id="left" className="wt-head">
            <wt-icon-button id="nav-button" class="wt-head">
              <Icons.FaBars size={20} color="#fff" />
            </wt-icon-button>
            <wt-logo onClick={onLogoClick}>WeTube</wt-logo>
          </div>

          <div id="center" className="wt-head">
            <wt-searchbox class="wt-head">
              <wt-searchbox id="search" class="wt-head">
                <form>
                  <input type="text" placeholder="검색" />
                </form>
              </wt-searchbox>
              <wt-icon-button id="search-icon" class="wt-head">
                <Icons.BsSearch size={18} />
              </wt-icon-button>
            </wt-searchbox>
          </div>

          <div id="right" className="wt-head">
            <Icons.RiVideoAddLine
              size={24}
              color="#fff"
              onClick={onStudioClick}
            />
            <Icons.MdOutlineContactPage
              size={24}
              color="#fff"
              onClick={onChannelClick}
            />
            <GoogleButton />
          </div>
        </div>
      </wt-head>
    </>
  );
};

export default Header;
