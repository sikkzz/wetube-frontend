import React from "react";

import Img from "../../assets/test.jpg";

import Icons from "../../constants/icon/index";

const FeedChannelRender = () => {
  return (
    <wtd-channel-render class="wtd-expanded-self-contents-render">
      <div id="content-section" className="wtd-channel-render">
        <div id="avatar-section" className="wtd-channel-render">
          <a className="channel-link wtd-channel-render" href="#!">
            <div id="avatar" className="wtd-channel-render">
              <wt-img-shadow class="wtd-channel-render">
                <img
                  id="img"
                  className="wt-img-shadow"
                  src={Img}
                  alt="profile"
                />
              </wt-img-shadow>
            </div>
          </a>
        </div>
        <div id="info-section" className="wtd-channel-render">
          <a
            id="main-link"
            className="channel-link wtd-channel-render"
            href="#!"
          >
            <div id="info" className="wtd-channel-render">
              <wtd-channel-name id="channel-title" class="wtd-channel-render">
                <div id="container" className="wtd-channl-name">
                  <wt-formatted-string id="text" class="wtd-channel-name">
                    tvN drama
                  </wt-formatted-string>
                </div>
              </wtd-channel-name>
              <div id="metadata" className="wtd-channel-render">
                <span>구독자 653만명</span>
                <span id="dot" className="wtd-channel-render">
                  •
                </span>
                <span>동영상 48,198개</span>
              </div>
              <wt-formatted-string id="description" class="wtd-channel-render">
                NO.1 K콘텐츠 채널, 즐거움엔 tvN
              </wt-formatted-string>
            </div>
          </a>
          <div id="buttons" className="wtd-channel-render">
            <div id="subscribe-button" className="wtd-channel-render">
              <wtd-subscribe-button-render class="wtd-channel-render">
                <div>
                  <wt-button-shape>
                    <button className="wt-button-shape-next sub-button">
                      <div className="wt-button-shape-next-icon">
                        <wt-icon
                          style={{
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <Icons.BsBell size={20} />
                        </wt-icon>
                      </div>
                      <div className="cbox wt-button-shape">
                        <span>구독중</span>
                      </div>
                      <div className="wt-button-shape-next-secondary-icon">
                        <wt-icon
                          style={{
                            width: "24px",
                            height: "24px",
                          }}
                        >
                          <Icons.HiChevronDown size={24} />
                        </wt-icon>
                      </div>
                    </button>
                  </wt-button-shape>
                </div>
              </wtd-subscribe-button-render>
            </div>
          </div>
        </div>
      </div>
    </wtd-channel-render>
  );
};

export default FeedChannelRender;
