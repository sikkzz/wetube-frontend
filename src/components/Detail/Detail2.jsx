import React, { useState } from "react";
import Video from "../../assets/videos/test.mp4";
import Img from "../../assets/test.jpg";

import Icons from "../../constants/icon";

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
                              <button className="wt-button">
                                <Icons.BsSkipStart size={36} color="#fff" />
                              </button>
                              <button className="wt-button">
                                <Icons.TbPlayerTrackPrev
                                  size={30}
                                  color="#fff"
                                />
                              </button>
                              <button className="wt-button">
                                <Icons.BsPlay size={40} color="#fff" />
                              </button>
                              <button className="wt-button">
                                <Icons.TbPlayerTrackNext
                                  size={30}
                                  color="#fff"
                                />
                              </button>
                              <button className="wt-button">
                                <Icons.BsSkipEnd size={38} color="#fff" />
                              </button>
                              <div className="wt-control-time">0:00 / 0:30</div>
                            </div>
                            <div className="wt-right-controls">
                              <div className="wt-control-sound-container">
                                <button className="wt-button">
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
                              <button className="wt-button">
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
                          <wt-button-shape class="wtd-subscribe-button-render">
                            <button className="wt-button-shape-next">
                              <div className="cbox wt-button-shape">
                                <span className="wt-button-shape-text">
                                  구독
                                </span>
                              </div>
                            </button>
                          </wt-button-shape>
                        </wtd-subscribe-button-render>
                      </div>
                    </div>
                    <div id="actions" className="wtd-watch-metadata">
                      
                    </div>
                  </div>
                </div>
              </wtd-watch-metadata>
            </div>
          </div>
        </div>
      </div>
    </wtd-watch-flexy>
  );
};

export default Detail2;
