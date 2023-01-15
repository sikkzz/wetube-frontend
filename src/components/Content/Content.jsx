import React from "react";
import Image from "../../assets/test2.jpg";
import Image2 from "../../assets/test.jpg";

import Categorybar from "../Categorybar/Categorybar";

import "./Content.scss";

const Content = () => {
  const count = [1, 2, 3, 4];
  return (
    <wt-grid-render style={{ "--wt-grid-item-row": "4" }}>
      <Categorybar />
      <div id="contents" className="wt-grid-render">
        {count.map((index) => (
          <wt-grid-row class="wt-grid-render" key={index}>
            <div id="contents" className="wt-grid-row">
              {count.map((index) => (
                <wt-item-render class="wt-grid-row" key={index}>
                  <div id="content" className="wt-item-render">
                    <wt-grid-media class="wt-item-render">
                      <div id="dismissible" className="wt-grid-media">
                        <wtd-thumbnail class="wt-grid-media">
                          <a
                            id="thumbnail"
                            className="wt-simple-endpoint wtd-thumbnail"
                            href="/detail"
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
                                  5:31:05
                                </span>
                              </wtd-thumbnail-overlay-time-status-render>
                            </div>
                          </a>
                        </wtd-thumbnail>
                        <div id="details" className="wt-grid-media">
                          <a
                            id="profile_link"
                            className="wt-grid-media"
                            href="#!"
                          >
                            <wt-img-shadow id="profile" class="wt-grid-media">
                              <img
                                id="img"
                                className="wt-img-shadow"
                                src={Image2}
                                alt="profile_img"
                              />
                            </wt-img-shadow>
                          </a>
                          <div id="meta" className="wt-grid-media">
                            <h3 className="wt-grid-media">
                              <a
                                id="video-title-link"
                                className="wt-grid-media"
                                href="/detail"
                              >
                                <wt-formatted-string
                                  id="video-title"
                                  class="wt-grid-media"
                                >
                                  🔥FLO 인기팝송 100곡 모두 해석해버리기 I
                                  PLAYLIST
                                </wt-formatted-string>
                              </a>
                            </h3>
                            <wtd-video-meta-block class="grid wt-grid-media">
                              <div
                                id="metadata"
                                className="wtd-video-meta-block"
                              >
                                <div
                                  id="byline-container"
                                  className="wtd-video-meta-block"
                                >
                                  <wtd-channel-name
                                    id="channel-name"
                                    class="wtd-video-meta-block"
                                  >
                                    <div
                                      id="container"
                                      className="wtd-channel-name"
                                    >
                                      <div
                                        id="text-container"
                                        className="wtd-channel-name"
                                      >
                                        <wt-formatted-string
                                          id="text"
                                          class="wtd-channel-name"
                                          ellipsis-style
                                        >
                                          <a
                                            className="wt-formatted-string"
                                            href="#!"
                                          >
                                            user-김준식
                                          </a>
                                        </wt-formatted-string>
                                      </div>
                                    </div>
                                  </wtd-channel-name>
                                </div>
                                <div
                                  id="metadata-line"
                                  className="wtd-video-meta-block"
                                >
                                  <span className="wtd-video-meta-block">
                                    조회수 48만회
                                  </span>
                                  <span className="wtd-video-meta-block">
                                    10개월 전
                                  </span>
                                </div>
                              </div>
                            </wtd-video-meta-block>
                          </div>
                        </div>
                      </div>
                    </wt-grid-media>
                  </div>
                </wt-item-render>
              ))}
            </div>
          </wt-grid-row>
        ))}
      </div>
    </wt-grid-render>
  );
};

export default Content;
