import React, { useState, useEffect } from "react";
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
  }

  const handleOnMouseOut = (e) => {
    e.currentTarget.pause();
  }

  return (
    <>
      <div className="content">
        <div className="content_grid">
          {count.map((index) => (
            <div className="content_box" key={index}>
              <div className="content_container">
                <video
                  loop
                  muted
                  onMouseOver={handleOnMouseOver}
                  onMouseOut={handleOnMouseOut}
                  className="content_profile_video"
                  src={Video}
                />
                <div className="content_detail_container">
                  <a className="content_detail_profile_box" href="#!">
                    <div className="content_detail_profile_container">
                      <img
                        className="content_detail_profile_image"
                        src={Image}
                        alt="detail_profile_image"
                      />
                    </div>
                  </a>
                  <div className="content_detail_meta_container">
                    <h3 className="content_detail_meta_title_container">
                      <a className="content_detail_meta_title" href="#!">
                        <p className="content_detail_meta_title_text">Test</p>
                      </a>
                    </h3>
                    <div className="content_detail_meta_body_container">
                      <div className="content_detail_meta_body_sub">김준식</div>
                      <div className="content_detail_meta_body_data">
                        <div className="content_detail_meta_body_view">
                          조회수 398만회
                        </div>
                        <div className="content_detail_meta_body_date">
                          1년전
                        </div>
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
