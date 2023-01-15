import React, { useState } from "react";
import Video from "../../assets/videos/test.mp4";
import Img from "../../assets/test.jpg";

import Icons from "../../constants/icon";
import Comment from "./Comment";

import "./Detail2.scss";

const Detail2 = () => {
  const [isHover, setIsHover] = useState(false);

  const [showControl, setShowControl] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);
  const [coords, setCoords] = useState({ x: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVolume, setIsVolume] = useState(true);
  const [isSound, setIsSound] = useState(true);
  const [volume, setVolume] = useState(50);
  const [isFull, setIsFull] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <wtd-watch-flexy class="wtd-page-manager">
      <div id="columns" className="wtd-watch-flexy">
        <div id="primary" className="wtd-watch-flexy">
          <div id="priamry-inner" className="wtd-watch-flexy">
            <div id="player" className="wtd-watch-flexy">
              <div id="player-container-outer" className="wtd-watch-flexy">
                <div id="player-container-inner" className="wtd-watch-flexy">
                  <wtd-player id="wtd-player" class="wtd-watch-flexy">
                    <div id="container" className="wtd-player">
                      <div className="video-player" id="movie_player">
                        <div className="video-container">
                          <video
                            className="video-stream"
                            src={Video}
                            type="video/mp4"
                            // controls
                          />
                        </div>
                        <div className="video-control">
                          <div
                            className="wt-progress-bar-container"
                            onMouseOver={() => {
                              setIsHover(true);
                            }}
                            onMouseOut={() => {
                              setIsHover(false);
                            }}
                          >
                            <div className="wt-progress-bar">
                              <div className="wt-chapters-container">
                                <div className="wt-chapter-hover-container">
                                  <div className="wt-progress-list">
                                    <div
                                      className="wt-play-progress wt-swatch-background-color"
                                      style={{
                                        left: "0px",
                                        transform: "scaleX(0.0283733",
                                      }}
                                    />
                                    <div className="wt-progress-linear-live-buffer" />
                                    <div
                                      className="wt-load-progress"
                                      style={{
                                        left: "0px",
                                        transform: "scaleX(0.184289)",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="wt-scrubber-container"
                                style={{
                                  transform: isHover
                                    ? "translateX(89px)"
                                    : "scale(0)",
                                }}
                              >
                                <div className="wt-scrubber-button wt-swatch-background-color">
                                  <div className="wt-scrubber-pull-indicator"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wt-controls">
                            <div className="wt-left-controls">
                              <button className="wt-control-button">
                                <Icons.BsSkipStart size={36} color="#fff" />
                              </button>
                              <button className="wt-control-button">
                                <Icons.TbPlayerTrackPrev
                                  size={30}
                                  color="#fff"
                                />
                              </button>
                              <button className="wt-control-button">
                                <Icons.BsPlay size={40} color="#fff" />
                              </button>
                              <button className="wt-control-button">
                                <Icons.TbPlayerTrackNext
                                  size={30}
                                  color="#fff"
                                />
                              </button>
                              <button className="wt-control-button">
                                <Icons.BsSkipEnd size={38} color="#fff" />
                              </button>
                              <div className="wt-control-time">0:00 / 0:30</div>
                            </div>
                            <div className="wt-right-controls">
                              <div className="wt-control-sound-container">
                                <button className="wt-control-button">
                                  {isSound ? (
                                    <Icons.GiSpeaker size={30} color="#fff" />
                                  ) : (
                                    <Icons.GiSpeakerOff
                                      size={30}
                                      color="#fff"
                                    />
                                  )}
                                </button>
                                {isVolume && (
                                  <div className="wt-control-sound-toggle-container">
                                    <input
                                      className="wt-control-sound-toggle-range"
                                      type="range"
                                      // ref={volumeRef}
                                      // onChange={(e) => {
                                      //   volumeCallback(Number(e.target.value));
                                      //   if (videoElement) {
                                      //     videoElement.volume =
                                      //       Number(e.target.value) / 100;
                                      //   }
                                      // }}
                                    />
                                  </div>
                                )}
                              </div>
                              <button className="wt-control-button">
                                {isFull ? (
                                  <Icons.AiOutlineFullscreenExit
                                    size={20}
                                    color="#fff"
                                  />
                                ) : (
                                  <Icons.BsFullscreen size={20} color="#fff" />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </wtd-player>
                </div>
              </div>
            </div>
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
                          <wt-img-shadow
                            id="profile"
                            class="wtd-video-owner-render"
                          >
                            <img
                              id="img"
                              className="wt-img-shadow"
                              src={Img}
                              alt="profile_img"
                            />
                          </wt-img-shadow>
                        </a>
                        <div
                          id="upload-info"
                          className="wtd-video-owner-render"
                        >
                          <wtd-channel-name
                            id="channel-name"
                            class="wtd-video-owner-render"
                          >
                            <div id="container" className="wtd-channel-name">
                              <div
                                id="text-container"
                                className="wtd-channel-name"
                              >
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
                          <wt-control-button-shape class="wtd-subscribe-button-render">
                            <button className="wt-control-button-shape-next">
                              <div className="cbox wt-control-button-shape">
                                <span className="wt-control-button-shape-text">
                                  구독
                                </span>
                              </div>
                            </button>
                          </wt-control-button-shape>
                        </wtd-subscribe-button-render>
                      </div>
                    </div>
                    <div id="actions" className="item wtd-watch-metadata">
                      <div id="actions-inner" className="wtd-watch-metadata">
                        <div id="menu" className="wtd-watch-metadata">
                          <wtd-menu-render class="wtd-watch-metadata">
                            <div
                              id="top-level-button"
                              className="wtd-menu-render"
                            >
                              <wtd-like-dislike-button-render class="wtd-menu-render">
                                <div
                                  id="like-button"
                                  className="wtd-like-dislike-button-render"
                                >
                                  <wtd-toggle-button-render class="wtd-like-dislike-button-render">
                                    <wt-control-button-shape>
                                      <button className="wt-control-button-shape-next like-button">
                                        <div className="wt-control-button-shape-next-icon">
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
                                        <div className="cbox wt-control-button-shape">
                                          <span>4.6천</span>
                                        </div>
                                      </button>
                                    </wt-control-button-shape>
                                  </wtd-toggle-button-render>
                                </div>
                                <div
                                  id="dislike-button"
                                  className="wtd-like-dislike-button-render"
                                >
                                  <wtd-toggle-button-render class="wtd-like-dislike-button-render">
                                    <wt-control-button-shape>
                                      <button className="wt-control-button-shape-next dislike-button">
                                        <div className="wt-control-button-shape-next-icon">
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
                                    </wt-control-button-shape>
                                  </wtd-toggle-button-render>
                                </div>
                              </wtd-like-dislike-button-render>
                              <wtd-button-render class="wtd-menu-render">
                                <wt-control-button-shape>
                                  <button className="wt-control-button-shape-next share-button">
                                    <div className="wt-control-button-shape-next-icon">
                                      <wt-icon
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                        }}
                                      >
                                        <Icons.SlActionRedo
                                          size={22}
                                          color="#fff"
                                        />
                                      </wt-icon>
                                    </div>
                                    <div className="cbox wt-control-button-shape">
                                      <span>공유</span>
                                    </div>
                                  </button>
                                </wt-control-button-shape>
                              </wtd-button-render>
                            </div>
                            <wt-control-button-shape
                              id="button-shape"
                              class="wtd-menu-render"
                            >
                              <button className="wt-control-button-shape-next more-button">
                                <div className="wt-control-button-shape-next-icon">
                                  <wt-icon
                                    style={{
                                      width: "24px",
                                      height: "24px",
                                    }}
                                  >
                                    <Icons.AiOutlineEllipsis
                                      size={22}
                                      color="#fff"
                                    />
                                  </wt-icon>
                                </div>
                              </button>
                            </wt-control-button-shape>
                          </wtd-menu-render>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bottom-row" className="wtd-watch-metadata">
                    <div id="description" className="item wtd-watch-metadata">
                      <div
                        id="description-inner"
                        className="wtd-watch-metadata"
                      >
                        <div id="info-container" className="wtd-watch-metadata">
                          <wt-formatted-string
                            id="info"
                            class="wtd-watch-metadata"
                          >
                            <span className="wt-formatted-string">
                              조회수 48만회
                            </span>
                            <span className="wt-formatted-string"> </span>
                            <span className="wt-formatted-string">
                              10개월 전
                            </span>
                          </wt-formatted-string>
                        </div>
                        <wtd-text-inline-expander
                          id="description-inline-expander"
                          class="wtd-watch-metadata"
                        >
                          <div
                            id="snippet"
                            className="wtd-text-inline-expander"
                          >
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
                                  유튜브 정책상 영상 중간 광고가 노출되며 모든
                                  수익은 가수에게 갑니다
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
          </div>
        </div>
      </div>
    </wtd-watch-flexy>
  );
};

export default Detail2;
