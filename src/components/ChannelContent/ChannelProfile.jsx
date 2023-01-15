import React from "react";

import Image from "../../assets/test.jpg";

const ChannelProfile = () => {
  return (
    <div id="channel-container" className="wtd-tab-header-render">
      <div id="channel-header" className="wtd-tab-header-render">
        <div id="channel-header-container" className="wtd-tab-header-render">
          <wtd-channel-profile
            id="profile-editor"
            class="wtd-tab-header-render"
          >
            <a className="wtd-channel-profile" href="#!">
              <wt-img-shadow class="wtd-channel-profile">
                <img
                  id="img"
                  src={Image}
                  alt="profile"
                  className="wt-img-shadow "
                />
              </wt-img-shadow>
            </a>
          </wtd-channel-profile>
          <div id="inner-header-container" className="wtd-tab-header-render">
            <div id="meta" className="wtd-tab-header-render">
              <wtd-channel-name id="channel-name" class="wtd-tab-header-render">
                <div id="container" className="wtd-channel-name">
                  <div id="text-container" className="wtd-channel-name">
                    <wt-formatted-string id="text" class="wtd-channel-name">
                      김준식
                    </wt-formatted-string>
                  </div>
                </div>
              </wtd-channel-name>
              <p className="wtd-tab-header-render">
                <wt-formatted-string
                  id="channel-handle"
                  class="meta-item wtd-tab-header-render"
                >
                  @user-nh2gf5wz3e
                </wt-formatted-string>
              </p>
              <wt-formatted-string
                id="subscriber-count"
                class="meta-item wtd-tab-header-render"
              >
                구독자 없음
              </wt-formatted-string>
            </div>
            <div id="buttons" className="wtd-tab-header-render">
              <div id="edit-buttons" className="wtd-tab-header-render">
                <wt-button-render class="wtd-tab-header-render">
                  <wt-button-shape>
                    <a id="tab-head" className="wt-button-shape-next" href="#!">
                      <div className="cbox wt-button-shape">
                        <span>채널 맞춤설정</span>
                      </div>
                    </a>
                  </wt-button-shape>
                </wt-button-render>
                <wt-button-render class="wtd-tab-header-render">
                  <wt-button-shape>
                    <a id="tab-head" className="wt-button-shape-next" href="#!">
                      <div className="cbox wt-button-shape">
                        <span>동영상 관리</span>
                      </div>
                    </a>
                  </wt-button-shape>
                </wt-button-render>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelProfile;
