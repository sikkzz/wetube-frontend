import React from "react";
import VideoPlayer from "../Video/VideoPlayer";
import VideoDetail from "../Video/VideoDetail";

const DetailPrimary = () => {
  return (
    <div id="primary" className="wtd-watch-flexy">
      <div id="priamry-inner" className="wtd-watch-flexy">
        <VideoPlayer />
        <VideoDetail />
      </div>
    </div>
  );
};

export default DetailPrimary;
