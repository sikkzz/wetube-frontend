import React from "react";

import Image from "../../assets/test.jpg";

const SearchContent = () => {
  return (
    <div id="contents">
      <wtd-item-section-render>
        <div id="contents">
          <wtd-video-render class="wtd-item-section-render">
            <div id="dismissible" className="wtd-video-render">
              <wtd-thumbnail class="wtd-video-render">
                <a
                  id="thumbnail"
                  className="wt-simple-endpoint wtd-thumbnail"
                  href="#!"
                >
                  <wt-image class="wtd-thumbnail">
                    <img
                      className="wtd-thumbnail"
                      alt="thumbnail"
                      src={Image}
                    />
                  </wt-image>
                  <div id="overlays" className="wtd-thumbnail">
                    <wtd-thumbnail-overlay-progress-render class="wtd-thumbnail">
                      <div
                        id="progress"
                        className="wtd-thumbnail-overlay-progress-render"
                        style={{ width: "10%" }}
                      />
                    </wtd-thumbnail-overlay-progress-render>
                    <wtd-thumbnail-overlay-time-status-render class="wtd-thumbnail">
                      <span
                        id="text"
                        className="wtd-thumbnail-overlay-time-status-render"
                      >
                        5:31:09
                      </span>
                    </wtd-thumbnail-overlay-time-status-render>
                  </div>
                </a>
              </wtd-thumbnail>
              <div className="text-wrapper wtd-video-render">
                <div id="meta" className="wtd-video-render">
                  <div id="title-wrapper" className="wtd-video-render">
                    <h3 className="title-and-badge wtd-video-render">
                      <a
                        id="video-title"
                        className="wtd-video-render"
                        href="#!"
                      >
                        <wt-formatted-string class="wtd-video-render">
                          Music Mix 2023 🎧 EDM Remixes of Popular Songs 🎧 EDM
                          Gaming Music Mix ​
                        </wt-formatted-string>
                      </a>
                    </h3>
                  </div>
                  <wtd-video-meta-block class="wtd-video-render">
                    <div id="metadata" className="wtd-video-meta-block">
                      <div id="metadata-line" className="wtd-video-meta-block">
                        <span>조회수 320만회</span>
                        <span>2일 전</span>
                      </div>
                    </div>
                  </wtd-video-meta-block>
                </div>
                <div id="channel-info" className="wtd-video-render">
                  <a
                    id="channel-thumbnail"
                    className="wtd-video-render"
                    href="#!"
                  >
                    <wt-img-shadow class="wtd-video-render">
                      <img
                        id="img"
                        className="wt-img-shadow"
                        src={Image}
                        alt="profile"
                      />
                    </wt-img-shadow>
                  </a>
                  <wtd-channel-name id="channel-name" class="wtd-video-render">
                    <div id="container" className="wtd-channel-name">
                      <div id="text-container" className="wtd-channel-name">
                        <wt-formatted-string
                          id="text"
                          class="wtd-channel-name"
                          ellipsis-style
                        >
                          <a className="wt-formatted-string" href="#!">
                            user-김준식
                          </a>
                        </wt-formatted-string>
                      </div>
                    </div>
                  </wtd-channel-name>
                </div>
                <div className="metadata-snippet-container wtd-video-render">
                  <wt-formatted-string class="metadata-snippet-text wtd-video-render">
                    <span>
                      Music Mix 2023 EDM Remixes of Popular Songs EDM Gaming
                      Music Mix Listen on Spotify / Apple / Youtube
                    </span>
                  </wt-formatted-string>
                </div>
              </div>
            </div>
          </wtd-video-render>
        </div>
      </wtd-item-section-render>
    </div>
  );
};

export default SearchContent;
