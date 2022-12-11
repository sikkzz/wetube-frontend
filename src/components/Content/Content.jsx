import React from "react";
import { useNavigate } from "react-router-dom";
import "./Content.scss";
import Image from "../../assets/test.jpg";
import Video from "../../assets/videos/test.mp4";

const Content = () => {
  const navigate = useNavigate();
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const onTest = () => {
    navigate("/upload");
  };

  const handleOnMouseOver = (e) => {
    e.currentTarget.play();
  };

  const handleOnMouseOut = (e) => {
    e.currentTarget.pause();
    console.log("a")
  };

  return (
    <>
      <div className="content">
        <div className="content_grid">
          {count.map((index) => (
            <div className="grid_container" key={index}>
              <a href="/detail">
                <div className="grid_card">
                  <a href="/detail">
                    <video
                      loop
                      muted
                      onMouseOver={handleOnMouseOver}
                      onMouseOut={handleOnMouseOut}
                      className="content_profile_video"
                      src={Video}
                    />
                  </a>
                  <div className="content_detail_container">
                    <a href="/channel" className="content_detail_profile_link">
                      <div className="content_detail_profile_container">
                        <img src={Image} alt="detail_profile_image" />
                      </div>
                    </a>
                    <div className="content_detail_meta_container">
                      <div className="content_detail_meta_title">
                        <h3>
                          <a href="/detail">
                            <p>Test</p>
                          </a>
                        </h3>
                      </div>

                      <div className="content_detail_meta_body">
                        <h3>
                          <a href="/channel">김준식</a>
                        </h3>
                        <div className="content_detail_meta_body_data">
                          <p>조회수 398만회</p>
                          <p>1년전</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
          <button onClick={onTest}>업로드 테스트</button>
        </div>
      </div>
    </>
  );
};

export default Content;
