import React from "react";
import Video from "../../assets/videos/test1.mp4";
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
                <a href="#!">#tag1</a>
                <a href="#!">#tag2</a>
                <a href="#!">#tag3</a>
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
                      H녀
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
                      2.8만
                  </div>
                  <div className="detail_content_profile_action_button_down">
                    <Icons.RiThumbDownLine size={22} color="#fff" />
                  </div>
                  <div className="detail_content_profile_action_button_share">
                    <Icons.SlActionRedo size={22} color="#fff" />
                  </div>
                </div>
              </div>

            </div>

            <div className="detail_content_meta_container">

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
