import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";

import "./Controls.scss";
// import AdNotice from "./AdNotice";

import Icons from "../../constants/icon";

const Controls = forwardRef(({ containerRef, videoRef, srcRef }, ref) => {
  const [showControl, setShowControl] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);
  const [coords, setCoords] = useState({ x: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVolume, setIsVolume] = useState(false);
  const [isSound, setIsSound] = useState(true);
  const [volume, setVolume] = useState(50);
  const [isFull, setIsFull] = useState(false);
  const [current, setCurrent] = useState(0);
  // const [adCountDown, setAdCountDown] = useState(5);
  // const [isAdPlayed, setIsAdPlayed] = useState(false);
  // const [adTime, setAdTime] = useState({
  //   originTime: 0,
  //   adPopUp: false,
  //   adLoaded: false,
  // });

  const containerElement = containerRef.current;
  const videoElement = videoRef.current;
  // const srcElement = srcRef.current;
  const totalTime = videoElement?.duration;
  const volumeRef = useRef(null);

  // 비디오 재생 키보드 이벤트 핸들러
  const handleKeyDown = (e) => {
    switch (e.code) {
      case "ArrowLeft":
        videoElement.currentTime -= 5;
        break;
      case "ArrowRight":
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

  // video 클릭시 재생, 일시정지 함수
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

  //현재, 전체 시간 표시 함수
  const timeUpdate = (time) => {
    if (!time) time = 0;
    time = Math.floor(time);
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);

    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;

    return `${min}:${sec}`;
  };

  // 동영상 시간 업데이트 핸들러
  const handleTimeUpdate = () => {
    setCurrent(videoElement?.currentTime || 0);
  };

  // mouse event handlers - 마우스가 비디오 위에서 움직일 때 컨트롤바 보이게.
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

  // volume 조절 핸들러
  const volumeCallback = useCallback((value) => {
    setVolume(value);
  }, []);

  // 마우스 3초 이상 호버 시 컨트롤 바 안보이도록 타임아웃 useEffect
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowControl(false);
      setHideCursor(true);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [coords]);

  // volume toggle에 현재 volume 업데이트 useEffect
  useEffect(() => {
    if (volumeRef && volumeRef.current) {
      volumeRef.current.value = String(volume);
    }
  }, [isVolume]);

  // ///// 광고 기능 /////

  // // 30초 이후 광고 불러오도록 트리거
  // useEffect(() => {
  //   if (isAdPlayed) return;
  //   if (15 < current) {
  //     setAdTime({ ...adTime, originTime: current + 5, adLoaded: true });
  //   }
  // }, [current]);

  // // 광고 안내 문구 마운트 & 5초 후 광고 로드
  // useEffect(() => {
  //   if (srcElement && videoElement) {
  //     setAdTime({ ...adTime, adPopUp: true });
  //     let countdown = setInterval(
  //       () => setAdCountDown((prev) => prev - 1),
  //       1000
  //     );
  //     setTimeout(() => {
  //       setAdTime({ ...adTime, adPopUp: false });
  //       srcElement.src = AdVideo2;
  //       videoElement.load();
  //       videoElement.play();
  //       clearInterval(countdown);
  //     }, 5000);
  //   }
  // }, [adTime.adLoaded]);

  // // 광고 종료 이후 기존 비디오의 위치로 돌아가기
  // useEffect(() => {
  //   if (isAdPlayed) return;
  //   if (srcElement?.src === AdVideo2 && current === totalTime) {
  //     srcElement.src = Video2;
  //     videoElement.load();
  //     videoElement.currentTime = adTime.originTime;
  //     videoElement.play();
  //     setIsAdPlayed(true);
  //   }
  // }, [current]);

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
      {/* {adTime.adPopUp && <AdNotice adtime={adCountDown} />} */}
      {showControl && (
        <div className="video_control_container">
          <input
            className="video_control_range"
            type="range"
            value={current}
            max={String(totalTime)}
            onChange={(e) => {
              videoElement.currentTime = Number(e.target.value);
            }}
          />
          <div className="video_control_box">
            <div className="video_control_box_left">
              <button
                className="video_control_button1"
                onClick={() => {
                  if (videoElement) {
                    videoElement.currentTime = 0;
                  }
                }}
              >
                <Icons.BsSkipStart size={38} color="#fff" />
              </button>

              <button
                className="video_control_button1"
                onClick={() => {
                  if (videoElement) {
                    videoElement.currentTime -= 5;
                  }
                }}
              >
                <Icons.TbPlayerTrackPrev size={30} color="#fff" />
              </button>

              <button
                className="video_control_button1"
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
                className="video_control_button1"
                onClick={() => {
                  if (videoElement) {
                    videoElement.currentTime += 5;
                  }
                }}
              >
                <Icons.TbPlayerTrackNext size={30} color="#fff" />
              </button>

              <button
                className="video_control_button1"
                onClick={() => {
                  if (videoElement) {
                    videoElement.currentTime = videoElement.duration;
                  }
                }}
              >
                <Icons.BsSkipEnd size={38} color="#fff" />
              </button>
              <div className="video_control_time">
                {`${timeUpdate(current)} / ${timeUpdate(totalTime)}`}
              </div>
            </div>

            <div className="video_control_box_right">
              <div
                className="video_control_sound_container"
                onMouseEnter={() => {
                  setIsVolume(true);
                }}
                onMouseLeave={() => {
                  setIsVolume(false);
                }}
              >
                <button
                  className="video_control_button1"
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
                  <div className="video_control_sound_toggle_container">
                    <input
                      className="video_control_sound_toggle_range"
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
                className="video_control_button1"
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

export default Controls;
