import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../../constants/icon";
import GoogleLogin from "./GoogleLogin";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userImg, setUserImg] = useState();

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
            {isLogin ? (
              <div id="buttons" className="wt-head">
                <wt-head-menu-button class="wt-head">
                  <div id="button" className="wt-head-menu-button">
                    <wt-icon-button id="button" class="wt-head-menu-button">
                      <Icons.RiVideoAddLine
                        size={24}
                        color="#fff"
                        onClick={onStudioClick}
                      />
                    </wt-icon-button>
                  </div>
                </wt-head-menu-button>
                <wt-head-menu-button class="wt-head">
                  <div id="button" className="wt-head-menu-button">
                    <wt-icon-button id="button" class="wt-head-menu-button">
                      <Icons.MdOutlineContactPage
                        size={24}
                        color="#fff"
                        onClick={onChannelClick}
                      />
                    </wt-icon-button>
                  </div>
                </wt-head-menu-button>
                <wt-head-menu-button class="wt-head">
                  <button id="profile_btn" className="wt-head-menu-button">
                    <wt-img-shadow class="wt-head-menu-button">
                      <img
                        src={userImg}
                        className="wt-img-shadow"
                        alt="user_picture"
                      />
                    </wt-img-shadow>
                  </button>
                </wt-head-menu-button>
              </div>
            ) : (
              <div id="buttons" className="wt-head">
                <wt-head-menu-button class="wt-head">
                  <div id="button" className="wt-head-menu-button">
                    <wt-icon-button id="button" class="wt-head-menu-button">
                      <Icons.AiOutlineMore
                        size={24}
                        color="#fff"
                        onClick={onStudioClick}
                      />
                    </wt-icon-button>
                  </div>
                </wt-head-menu-button>
                <wt-button-render class="wt-head">
                  <wt-button-shape>
                    {/* <div
                      className="wt-button-shape"
                      onClick={() => {
                        return(<GoogleLogin
                          isLogin={isLogin}
                          setIsLogin={setIsLogin}
                        />)
                      }}
                    >
                      <div className="wt-button-shape-icon">
                        <wt-icon>
                          <Icons.BsPersonCircle size={24} color="3ea6ff" />
                        </wt-icon>
                      </div>
                      <div className="wt-button-shape-text">
                        <span>로그인</span>
                      </div>
                    </div> */}
                    <GoogleLogin
                      isLogin={isLogin}
                      setIsLogin={setIsLogin}
                      userImg={userImg}
                      setUserImg={setUserImg}
                    />
                  </wt-button-shape>
                </wt-button-render>
              </div>
            )}
          </div>
        </div>
      </wt-head>
    </>
  );
};

export default Header;
