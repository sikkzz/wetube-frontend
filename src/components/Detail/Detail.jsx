import React from "react";
import Video from "../../assets/videos/test1.mp4";
import "./Detail.scss";

const Detail = () => {
  return (
    <>
      <div className="detail_container">
        <div className="detail_content_container">
          <div className="detail_content_video_container">
            <video src={Video} autoPlay loop controls muted type="video/mp4" />
          </div>

          <div className="detail_content_info_container"></div>

          <div className="detail_content_comment_container"></div>
        </div>
        <div className="detail_playlist_container"></div>
      </div>
    </>
  );
};

export default Detail;
