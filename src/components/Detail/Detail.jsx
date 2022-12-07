import React, { useState } from "react";
import Video from "../../assets/videos/test.mp4";
import Image from "../../assets/test.jpg";

import Icons from "../../constants/icon";

import "./Detail.scss";

const Detail = () => {
  const [sortActive, setSortActive] = useState(false);

  const [inputActive, setInputActive] = useState(false);

  const onSortClick = () => {
    setSortActive(!sortActive);
  };

  const onInputClick = () => {
    setInputActive(true);
  };

  const onCancelClick = () => {
    setInputActive(false);
  };

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
                      <img src={Image} alt="owner_image" />
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

                <div
                  id="subscribe-button"
                  className="detail_content_sub_button_container"
                >
                  <div className="detail_content_sub_button">구독</div>
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
                    <Icons.AiOutlineEllipsis size={22} color="#fff" />
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

                <div className="detail_content_description_snippet_container">
                  <div className="detail_content_description_snippet_data">
                    <span>
                      [👍구독] [🔔알림] [❤️좋아요] [↪공유] [💬댓글] 큰 힘이
                      됩니다
                    </span>
                  </div>
                  <div className="detail_content_description_snippet_tag">
                    <a href="#!">#팝송명곡</a>
                    <a href="#!">#인기팝송</a>
                    <a href="#!">#플레이리스트</a>
                    <a href="#!">더보기</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="detail_content_comment_container">
            <div className="detail_content_comment_header">
              <div className="detail_content_comment_header_title">
                <h2>
                  <span>댓글 </span>
                  <span>191</span>
                  <span>개</span>
                </h2>
                <div className="detail_content_comment_header_title_sort">
                  <div
                    className="detail_content_comment_header_title_sort_container"
                    onClick={onSortClick}
                  >
                    <div className="detail_content_comment_header_title_sort_icon">
                      <Icons.MdOutlineSort size={28} />
                    </div>
                    <div className="detail_content_comment_header_title_sort_label">
                      정렬 기준
                    </div>
                  </div>

                  <div
                    className="detail_content_comment_header_title_sort_dropdown_container"
                    style={{ display: sortActive ? "block" : "none" }}
                  >
                    <div className="detail_content_comment_header_title_sort_dropdown_wrapper">
                      <div className="detail_content_comment_header_title_sort_dropdown_list">
                        <div className="detail_content_comment_header_title_sort_dropdown_list_item sort_dropdown_list_acitve">
                          <a href="#!">인기 댓글순</a>
                        </div>
                        <div className="detail_content_comment_header_title_sort_dropdown_list_item">
                          <a href="#!">최신순</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail_content_comment_header_input">
                <div className="detail_content_comment_header_input_box">
                  <div className="detail_content_comment_header_input_thumbnail">
                    <img src={Image} alt="thumbnail_img" />
                  </div>

                  <div className="detail_content_comment_header_input_main">
                    <div className="detail_content_comment_header_input_creation_container">
                      <div className="detail_content_comment_header_input_creation_box">
                        <form>
                          <input
                            type="text"
                            placeholder="댓글 추가..."
                            onClick={onInputClick}
                          />
                        </form>
                      </div>
                    </div>

                    <div
                      className="detail_content_comment_header_input_footer_container"
                      style={{ visibility: inputActive ? "visible" : "hidden" }}
                    >
                      <div className="detail_content_comment_header_input_footer_button_container">
                        <div className="detail_content_comment_header_input_footer_button_cancel">
                          <button onClick={onCancelClick}>취소</button>
                        </div>
                        <div className="detail_content_comment_header_input_footer_button_submit">
                          <button>댓글</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail_content_comment_main">

            </div>
          </div>
        </div>

        
        <div className="detail_playlist_container"></div>
      </div>
    </>
  );
};

export default Detail;
