import React from "react";
import { useNavigate } from "react-router-dom";
import "./Content.scss";
import Image from "../../assets/test.jpg";
import Video from "../../assets/videos/test1.mp4";

import { RiVideoAddLine } from "react-icons/ri";

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
  };

  return (
    <>
      <div className="content">
        <div className="content_grid">
          {count.map((index) => (
            <div className="grid_container" key={index}>
              <div className="grid_card">
                <video
                  loop
                  muted
                  onMouseOver={handleOnMouseOver}
                  onMouseOut={handleOnMouseOut}
                  className="content_profile_video"
                  src={Video}
                />
                <div className="content_detail_container">
                  <a href="#!" className="content_detail_profile_link">
                    <div className="content_detail_profile_container">
                      <img src={Image} alt="detail_profile_image" />
                    </div>
                  </a>
                  <div className="content_detail_meta_container">
                    <div className="content_detail_meta_title">
                      <h3>
                        <a href="#!">
                          <p>Test</p>
                        </a>
                      </h3>
                    </div>

                    <div className="content_detail_meta_body">
                      <h3>김준식</h3>
                      <div className="content_detail_meta_body_data">
                        <p>조회수 398만회</p>
                        <p>1년전</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <RiVideoAddLine size={30} color="#fff" onClick={onTest} />
        </div>
      </div>
    </>
  );
};

export default Content;
