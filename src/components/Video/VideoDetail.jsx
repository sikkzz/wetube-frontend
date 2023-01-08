import React from "react";

import Icons from "../../constants/icon";
import Comment from "../Detail/Comment";
import Img from "../../assets/test.jpg";

const VideoDetail = () => {
  return (
    <div id="below" className="wtd-watch-flexy">
      <wtd-watch-metadata class="wtd-watch-flexy">
        <div className="above-the-fold">
          <div id="title" className="wtd-watch-metadata">
            <h1 className="wtd-watch-metadata">
              <wt-formatted-string class="wtd-watch-metadata">
                🔥FLO 인기팝송 100곡 모두 해석해버리기 I PLAYLIST
              </wt-formatted-string>
            </h1>
          </div>
          <div id="top-row" className="wtd-watch-metadata">
            <div id="owner" className="item wtd-watch-metadata">
              <wtd-video-owner-render class="wtd-watch-metadata">
                <a className="wtd-video-owner-render" href="#!">
                  <wt-img-shadow id="profile" class="wtd-video-owner-render">
                    <img
                      id="img"
                      className="wt-img-shadow"
                      src={Img}
                      alt="profile_img"
                    />
                  </wt-img-shadow>
                </a>
                <div id="upload-info" className="wtd-video-owner-render">
                  <wtd-channel-name
                    id="channel-name"
                    class="wtd-video-owner-render"
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
                  <wt-formatted-string
                    id="owner-sub-count"
                    class="wtd-video-owner-render"
                  >
                    구독자 56.7만명
                  </wt-formatted-string>
                </div>
              </wtd-video-owner-render>
              <div id="subscribe-button" className="wtd-watch-metadata">
                <wtd-subscribe-button-render class="wtd-watch-metadata">
                  <wt-button-shape class="wtd-subscribe-button-render">
                    <button className="wt-button-shape-next">
                      <div className="cbox wt-button-shape">
                        <span className="wt-button-shape-text">구독</span>
                      </div>
                    </button>
                  </wt-button-shape>
                </wtd-subscribe-button-render>
              </div>
            </div>
            <div id="actions" className="item wtd-watch-metadata">
              <div id="actions-inner" className="wtd-watch-metadata">
                <div id="menu" className="wtd-watch-metadata">
                  <wtd-menu-render class="wtd-watch-metadata">
                    <div id="top-level-button" className="wtd-menu-render">
                      <wtd-like-dislike-button-render class="wtd-menu-render">
                        <div
                          id="like-button"
                          className="wtd-like-dislike-button-render"
                        >
                          <wtd-toggle-button-render class="wtd-like-dislike-button-render">
                            <wt-button-shape>
                              <button className="wt-button-shape-next like-button">
                                <div className="wt-button-shape-next-icon">
                                  <wt-icon
                                    style={{
                                      width: "24px",
                                      height: "24px",
                                    }}
                                  >
                                    <wt-animated-icon class="wt-icon">
                                      <Icons.RiThumbUpLine
                                        size={22}
                                        color="#fff"
                                      />
                                    </wt-animated-icon>
                                  </wt-icon>
                                </div>
                                <div className="cbox wt-button-shape">
                                  <span>4.6천</span>
                                </div>
                              </button>
                            </wt-button-shape>
                          </wtd-toggle-button-render>
                        </div>
                        <div
                          id="dislike-button"
                          className="wtd-like-dislike-button-render"
                        >
                          <wtd-toggle-button-render class="wtd-like-dislike-button-render">
                            <wt-button-shape>
                              <button className="wt-button-shape-next dislike-button">
                                <div className="wt-button-shape-next-icon">
                                  <wt-icon
                                    style={{
                                      width: "24px",
                                      height: "24px",
                                    }}
                                  >
                                    <wt-animated-icon class="wt-icon">
                                      <Icons.RiThumbDownLine
                                        size={22}
                                        color="#fff"
                                      />
                                    </wt-animated-icon>
                                  </wt-icon>
                                </div>
                              </button>
                            </wt-button-shape>
                          </wtd-toggle-button-render>
                        </div>
                      </wtd-like-dislike-button-render>
                      <wtd-button-render class="wtd-menu-render">
                        <wt-button-shape>
                          <button className="wt-button-shape-next share-button">
                            <div className="wt-button-shape-next-icon">
                              <wt-icon
                                style={{
                                  width: "24px",
                                  height: "24px",
                                }}
                              >
                                <Icons.SlActionRedo size={22} color="#fff" />
                              </wt-icon>
                            </div>
                            <div className="cbox wt-button-shape">
                              <span>공유</span>
                            </div>
                          </button>
                        </wt-button-shape>
                      </wtd-button-render>
                    </div>
                    <wt-button-shape id="button-shape" class="wtd-menu-render">
                      <button className="wt-button-shape-next more-button">
                        <div className="wt-button-shape-next-icon">
                          <wt-icon
                            style={{
                              width: "24px",
                              height: "24px",
                            }}
                          >
                            <Icons.AiOutlineEllipsis size={22} color="#fff" />
                          </wt-icon>
                        </div>
                      </button>
                    </wt-button-shape>
                  </wtd-menu-render>
                </div>
              </div>
            </div>
          </div>
          <div id="bottom-row" className="wtd-watch-metadata">
            <div id="description" className="item wtd-watch-metadata">
              <div id="description-inner" className="wtd-watch-metadata">
                <div id="info-container" className="wtd-watch-metadata">
                  <wt-formatted-string id="info" class="wtd-watch-metadata">
                    <span className="wt-formatted-string">조회수 48만회</span>
                    <span className="wt-formatted-string"> </span>
                    <span className="wt-formatted-string">10개월 전</span>
                  </wt-formatted-string>
                </div>
                <wtd-text-inline-expander
                  id="description-inline-expander"
                  class="wtd-watch-metadata"
                >
                  <div id="snippet" className="wtd-text-inline-expander">
                    <span
                      id="snippet-text"
                      className="wtd-text-inline-expander"
                    >
                      <wt-attributed-string
                        id="attributed-snippet-text"
                        class="wtd-text-inline-expander"
                      >
                        <span className="wt-attributed-string">
                          수익 창출 ❌<br />
                          유튜브 정책상 영상 중간 광고가 노출되며 모든 수익은
                          가수에게 갑니다
                          <br />
                          영상 아래 👍좋아요는 큰 도움이 됩니다
                        </span>
                      </wt-attributed-string>
                    </span>
                  </div>
                </wtd-text-inline-expander>
              </div>
            </div>
          </div>
        </div>
      </wtd-watch-metadata>
      <Comment />
    </div>
  );
};

export default VideoDetail;
