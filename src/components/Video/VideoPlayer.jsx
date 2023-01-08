import React from "react";
import Video from "../../assets/videos/test.mp4";

import VideoControl from "./VideoControl";

const VideoPlayer = () => {
  return (
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
                  />
                </div>
                <VideoControl />
              </div>
            </div>
          </wtd-player>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
