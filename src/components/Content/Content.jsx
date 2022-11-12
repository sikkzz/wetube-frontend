import React from "react";
import "./Content.scss";
import Image from "../../assets/test.jpg";

const Contents = () => {
  const count = [1, 2, 3, 4];

  return (
    <>
      <div className="content">
        <div className="content_grid">
          {count.map(() => (
            <div className="content_box">
              <div className="content_container">
                <img
                  className="content_profile_image"
                  src={Image}
                  alt="content_profile"
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
                        <p className="content_detail_meta_title_text">
                          팝송 명곡 100곡 베스트 모두 해석해버리기| PlayList
                        </p>
                      </a>
                    </h3>
                    <div className="content_detail_meta_body_container">
                      <div className="content_detail_meta_body_sub">H녀</div>
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
        </div>
      </div>
    </>
  );
};

export default Contents;
