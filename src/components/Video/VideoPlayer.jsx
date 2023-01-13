import React, { useRef } from "react";
import Video from "../../assets/videos/test2.mp4";

import VideoControl from "./VideoControl";

const VideoPlayer = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const controllerRef = useRef(null);

  const containerProps = {
    ref: containerRef,
    onKeyDown: (e) => {
      if (controllerRef.current) controllerRef.current.handleKeyDown(e);
    },
    onMouseEnter: () => {
      if (controllerRef.current) controllerRef.current.handleMouseIn();
    },
    onMouseLeave: () => {
      if (controllerRef.current) controllerRef.current.handleMouseLeave();
    },
    onMouseMove: (e) => {
      if (controllerRef.current) controllerRef.current.handleMouseMove(e);
    },
  };

  const videoProps = {
    ref: videoRef,
    autofocus: true,
    onTimeUpdate: () => {
      if (controllerRef.current) controllerRef.current.handleTimeUpdate();
    },
    onClick: () => {
      if (controllerRef.current) controllerRef.current.handleVideoClick();
    },
  };

  const controlProps = {
    ref: controllerRef,
    containerRef: containerRef,
    videoRef: videoRef,
  };

  return (
    <div id="player" className="wtd-watch-flexy">
      <div id="player-container-outer" className="wtd-watch-flexy">
        <div id="player-container-inner" className="wtd-watch-flexy">
          <wtd-player id="wtd-player" class="wtd-watch-flexy">
            <div id="container" className="wtd-player">
              <div className="video-player" id="movie_player">
                <div className="video-container" {...containerProps}>
                  <video
                    className="video-stream"
                    src={Video}
                    type="video/mp4"
                    {...videoProps}
                  />
                  <VideoControl {...controlProps} />
                </div>
              </div>
            </div>
          </wtd-player>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
