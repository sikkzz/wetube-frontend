import React from "react";

import Image from "../../assets/test.jpg";

const DetailSectionItemVideo = () => {
  return (
    <wtd-compact-video-render class="wtd-item-section-render">
      <div id="dismissible" className="wtd-compact-video-render">
        <wtd-thumbnail class="wtd-compact-video-render">
          <a id="thumbnail" className="wtd-thumbnail" href="#!">
            <wt-image class="wtd-thumbnail">
              <img className="wtd-thumbnail" alt="thumbnail" src={Image} />
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
                  5:31:05
                </span>
              </wtd-thumbnail-overlay-time-status-render>
            </div>
          </a>
        </wtd-thumbnail>
        <div className="details wtd-compact-video-render">
          <div className="metadata wtd-compact-video-render">
            <a className="wtd-compact-video-render" href="#!">
              <h3 className="wtd-compact-video-render">
                <span id="video-title" className="wtd-compact-video-render">
                  [광고없는] 🎧인기 국내힙합 노래 모음 (2022) / 신나는 국힙
                  플레이리스트 🎧 춤추면서들을수있는 신나는 힙합믹스🎧 2022
                  Korean Best Hip-Hop Songs
                </span>
              </h3>
              <div className="secondary-metadata wtd-compact-video-render">
                <wtd-video-meta-block class="compact wtd-compact-video-render">
                  <div id="metadata" className="wtd-video-meta-block">
                    <div id="byline-container" className="wtd-video-meta-block">
                      <wtd-channel-name
                        id="channel-name"
                        class="wtd-video-meta-block"
                      >
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
                    <div id="metadata-line" className="wtd-video-meta-block">
                      <span className="wtd-video-meta-block">
                        조회수 48만회
                      </span>
                      <span className="wtd-video-meta-block">10개월 전</span>
                    </div>
                  </div>
                </wtd-video-meta-block>
              </div>
            </a>
          </div>
        </div>
      </div>
    </wtd-compact-video-render>
  );
};

export default DetailSectionItemVideo;
