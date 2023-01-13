import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useRef,
} from "react";
import Icons from "../../constants/icon";

const VideoControl = forwardRef(({ containerRef, videoRef }, ref) => {
  const [showControl, setShowControl] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);
  const [coords, setCoords] = useState({ x: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVolume, setIsVolume] = useState(true);
  const [isSound, setIsSound] = useState(true);
  const [volume, setVolume] = useState(50);
  const [isFull, setIsFull] = useState(false);
  const [current, setCurrent] = useState(0);

  const containerElement = containerRef.current;
  const videoElement = videoRef.current;
  const totalTime = videoElement?.duration;
  const volumeRef = useRef(null);

  const handleKeyDown = (e) => {
    switch (e.code) {
      case "ArrowLeft":
        e.preventDefault();
        videoElement.currentTime -= 5;
        break;
      case "ArrowRight":
        e.preventDefault();
        videoElement.currentTime += 5;
        break;
      case "Space":
        e.preventDefault();
        if (videoElement.paused) {
          videoElement.play();
          setIsPlaying(true);
        } else {
          videoElement.pause();
          setIsPlaying(false);
        }
        break;
      default:
        return;
    }
  };

  const handleVideoClick = () => {
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  const timeUpdate = (time) => {
    if (!time) time = 0;
    time = Math.floor(time);
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);

    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;

    return `${min}:${sec}`;
  };

  const handleTimeUpdate = () => {
    setCurrent(videoElement?.currentTime || 0);
  };

  const handleMouseMove = (e) => {
    setShowControl(true);
    setHideCursor(false);
    setCoords({ x: e.screenX });
  };

  const handleMouseIn = () => {
    setShowControl(true);
  };

  const handleMouseLeave = () => {
    setShowControl(false);
  };

  const volumeCallback = useCallback((value) => {
    setVolume(value);
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowControl(false);
      setHideCursor(true);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [coords]);

  useEffect(() => {
    if (volumeRef && volumeRef.current) {
      volumeRef.current.value = String(volume);
    }
  }, [isVolume]);

  // console.log(loadingRef?.current?.clientWidth)

  // useEffect(() => {
  //   setTest(test+(totalTime / (loadingRef?.current?.clientWidth)))
  //   console.log(test)
  // })
  // console.log(test)

  useImperativeHandle(ref, () => ({
    handleVideoClick,
    handleKeyDown,
    handleMouseIn,
    handleMouseLeave,
    handleMouseMove,
    handleTimeUpdate,
  }));

  return (
    <>
      {showControl && (
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
                        transform: `scaleX(${
                          videoElement?.currentTime / totalTime
                        })`,
                      }}
                    />
                    <div className="wt-progress-linear-live-buffer" />
                    <div
                      className="wt-load-progress"
                      style={{
                        left: "0px",
                        // transform: "scaleX(0.184289)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="wt-scrubber-container"
                style={
                  {
                    // visibility: isHover ? "visible" : "hidden",
                    // visibility: "visible",
                    // transform: `translateX(${videoElement?.currentTime / totalTime}px)`
                    // transform: `translateX(${test}px)`
                  }
                }
              >
                <div className="wt-scrubber-button wt-swatch-background-color">
                  <div className="wt-scrubber-pull-indicator"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="wt-controls">
            <div className="wt-left-controls">
              <button
                className="wt-button"
                onClick={() => {
                  if (videoElement) {
                    videoElement.currentTime = 0;
                  }
                }}
              >
                <Icons.BsSkipStart size={36} color="#fff" />
              </button>
              <button
                className="wt-button"
                onClick={() => {
                  if (videoElement) {
                    videoElement.currentTime -= 5;
                  }
                }}
              >
                <Icons.TbPlayerTrackPrev size={30} color="#fff" />
              </button>
              <button
                className="wt-button"
                onClick={() => {
                  if (isPlaying) {
                    videoElement?.pause();
                    setIsPlaying(false);
                  } else {
                    videoElement?.play();
                    setIsPlaying(true);
                  }
                }}
              >
                {isPlaying ? (
                  <Icons.BsPause size={40} color="#fff" />
                ) : (
                  <Icons.BsPlay size={40} color="#fff" />
                )}
              </button>
              <button
                className="wt-button"
                onClick={() => {
                  if (videoElement) {
                    videoElement.currentTime += 5;
                  }
                }}
              >
                <Icons.TbPlayerTrackNext size={30} color="#fff" />
              </button>
              <button
                className="wt-button"
                onClick={() => {
                  if (videoElement) {
                    videoElement.currentTime = videoElement.duration;
                  }
                }}
              >
                <Icons.BsSkipEnd size={38} color="#fff" />
              </button>
              <div className="wt-control-time">{`${timeUpdate(
                current
              )} / ${timeUpdate(totalTime)}`}</div>
            </div>
            <div className="wt-right-controls">
              <div
                className="wt-control-sound-container"
                onMouseEnter={() => {
                  setIsVolume(true);
                }}
                onMouseLeave={() => {
                  setIsVolume(false);
                }}
              >
                <button
                  className="wt-button"
                  onClick={() => {
                    if (videoElement) {
                      if (isSound) {
                        videoElement.muted = true;
                        setIsSound(false);
                      } else {
                        videoElement.muted = false;
                        setIsSound(true);
                      }
                    }
                  }}
                >
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
                      ref={volumeRef}
                      onChange={(e) => {
                        volumeCallback(Number(e.target.value));
                        if (videoElement) {
                          videoElement.volume = Number(e.target.value) / 100;
                        }
                      }}
                    />
                  </div>
                )}
              </div>
              <button
                className="wt-button"
                onClick={() => {
                  if (containerElement) {
                    if (isFull) {
                      document.exitFullscreen();
                      setIsFull(false);
                    } else {
                      containerElement.requestFullscreen();
                      setIsFull(true);
                    }
                  }
                }}
              >
                {isFull ? (
                  <Icons.AiOutlineFullscreenExit size={20} color="#fff" />
                ) : (
                  <Icons.BsFullscreen size={20} color="#fff" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default VideoControl;
