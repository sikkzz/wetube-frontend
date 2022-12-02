import React from "react";
import Header from "../../components/Header/Header";
import Video from "../../assets/videos/test1.mp4";

const Detail = () => {
  return (
    <>
      <div className="detail_containers">
        <div className="headers_container">
          <Header />
        </div>
        <div className="detail_contents_container">
          <div className="test">
            <video
              src={Video}
              autoPlay
              loop
              controls
              muted
              type="video/mp4"
              className="test_video"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
