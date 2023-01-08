import React, { useState } from "react";
import Icons from "../../constants/icon";

const VideoControl = () => {
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
              transform: isHover ? "translateX(89px)" : "scale(0)",
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
            <Icons.TbPlayerTrackPrev size={30} color="#fff" />
          </button>
          <button className="wt-button">
            <Icons.BsPlay size={40} color="#fff" />
          </button>
          <button className="wt-button">
            <Icons.TbPlayerTrackNext size={30} color="#fff" />
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
                <Icons.GiSpeakerOff size={30} color="#fff" />
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
              <Icons.AiOutlineFullscreenExit size={20} color="#fff" />
            ) : (
              <Icons.BsFullscreen size={20} color="#fff" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoControl;
