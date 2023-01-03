import React from "react";
import Video from "../../assets/videos/test2.mp4";

import "./Detail2.scss";

const Detail2 = () => {
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
                          <div className="wt-progress-bar-container">
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
                                    <div className="wt-load-progress" style={{left: "0px", transform: "scaleX(0.184289)"}} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </wtd-player>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </wtd-watch-flexy>
  );
};

export default Detail2;
