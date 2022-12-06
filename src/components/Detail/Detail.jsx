import React from "react";
import Video from "../../assets/videos/test.mp4";
import Image from "../../assets/test.jpg";

import Icons from "../../constants/icon";

import "./Detail.scss";

const Detail = () => {
  return (
    <>
      <div className="detail_container">
        <div className="detail_content_container">
          <div className="detail_content_video_container">
            <video src={Video} loop controls muted type="video/mp4" />
          </div>

          <div className="detail_content_info_container">

            <div className="detail_content_title">
              <div className="detail_content_title_tag_container">
                <a href="#!">#팝송명곡</a>
                <a href="#!">#인기팝송</a>
                <a href="#!">#플레이리스트</a>
              </div>
              <div className="detail_content_title_container">
                <h1>팝송 명곡 베스트 100곡 모두 해석해버리기 | PLAYLIST</h1>
              </div>

            </div>

            <div className="detail_content_profile_container">
              <div className="detail_content_profile_owner_container">
                <div className="detail_content_profile_owner_wrapper">
                  <a href="#!" className="profile_owner_link">
                    <div className="profile_owner_image_container">
                      <img src={Image} alt="owner_image"/>
                    </div>
                  </a>
                  <div className="profile_owner_channel_info">
                    <div className="profile_owner_channel_name">
                      <a href="#!">H녀</a>
                    </div>
                    <div className="profile_owner_channel_sub">
                      구독자 57.2만명
                    </div>
                  </div>
                </div>

                <div id="subscribe-button" className="detail_content_sub_button_container">
                  <div className="detail_content_sub_button">
                    구독
                  </div>
                </div>

              </div>

              <div className="detail_content_profile_action">
                <div className="detail_content_profile_action_menu">
                  <div className="detail_content_profile_action_button_up">
                      <Icons.RiThumbUpLine size={22} color="#fff" />
                      <p>2.8만</p>
                  </div>
                  <div className="detail_content_profile_action_button_down">
                    <Icons.RiThumbDownLine size={22} color="#fff" />
                  </div>
                  <div className="detail_content_profile_action_button_share">
                    <Icons.SlActionRedo size={22} color="#fff" />
                    <p>공유</p>
                  </div>
                  <div className="detail_content_profile_action_button_save">
                    <Icons.TfiDownload size={18} color="#fff" />
                    <p>오프라인 저장</p>
                  </div>
                  <div className="detail_content_profile_action_button_more">
                    <Icons.AiOutlineEllipsis size={22} color="#fff"/>
                  </div>
                </div>
              </div>

            </div>

            <div className="detail_content_description_container">
              <div className="detail_content_description_inner">
                <div className="detail_content_description_info_container">
                  <div className="detail_content_description_info_data">
                    <span>조회수 522,501회</span>
                    <span> </span>
                    <span>2022. 12. 06.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="detail_content_comment_container"></div>
        </div>
        <div className="detail_playlist_container"></div>
      </div>
    </>
  );
};

export default Detail;
