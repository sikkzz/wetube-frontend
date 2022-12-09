import React, { useState, useRef } from "react";
import Video from "../../assets/videos/test2.mp4";
import AdVideo from '../../assets/videos/test.mp4';
import Image from "../../assets/test.jpg";

import Controls from "../Video/Controls";

import Icons from "../../constants/icon";

import "./Detail.scss";

const Detail = () => {
  const [sortActive, setSortActive] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [replyActive, setReplyActive] = useState(false);
  const listRef = useRef();
  const [count, setCount] = useState(50);

  const controllerRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const srcRef = useRef(null);

  const onSortClick = () => {
    setSortActive(!sortActive);
  };

  const onInputClick = () => {
    setInputActive(true);
  };

  const onCancelClick = () => {
    setInputActive(false);
  };

  const handleOnMouseOver = () => {
    setMenuHover(true);
  };

  const handleOnMouseOut = () => {
    setMenuHover(false);
  };

  const onReplyClick = () => {
    setReplyActive(!replyActive);
  };

  const onPrevClick = () => {};

  const onNextClick = () => {
    setCount(count + 50);
    console.log(count);
    listRef.current.style.transform = `translateX(-${count}px)`;
  };

  const containerProps = {
    ref: containerRef,
    tabIndex: 0,
    onKeyDown: (e) => {
      if (controllerRef.current) controllerRef.current.handleKeyDown(e);
    },
    onMouseEnter: () => {
      if (controllerRef.current) controllerRef.current.handleMouseIn();
    },
    onMouseLeave: () => {
      if (controllerRef.current) controllerRef.current.handleMouseLeave();
    },
    onMouseMove: (e) => {
      if (controllerRef.current) controllerRef.current.handleMouseMove(e);
    },
  };

  const videoProps = {
    ref: videoRef,
    width: "100%",
    controls: false,
    onTimeUpdate: () => {
      if (controllerRef.current) controllerRef.current.handleTimeUpdate();
    },
    onClick: () => {
      if (controllerRef.current) controllerRef.current.handleVideoClick();
    },
  };

  const controlProps = {
    ref: controllerRef,
    containerRef: containerRef,
    videoRef: videoRef,
    srcRef: srcRef,
  };

  return (
    <>
      <div className="detail_container">
        <div className="detail_content_container">
          <div className="detail_content_video_container" {...containerProps}>
            <video {...videoProps}>
              <source ref={srcRef} src={Video} type="video/mp4" />
            </video>
            <Controls {...controlProps} />
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
                  <div className="detail_content_comment_header_input_profile">
                    <a href="#!">
                      <img src={Image} alt="profile_img" />
                    </a>
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
              <div className="detail_content_comment_container">
                <div className="detail_content_comment_box">
                  <div
                    className="detail_content_comment_body"
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                  >
                    <div className="detail_content_comment_body_profile_container">
                      <a href="#!">
                        <div className="detail_content_comment_body_profile">
                          <img src={Image} alt="comment_profile_img" />
                        </div>
                      </a>
                    </div>

                    <div className="detail_content_comment_body_text_container">
                      <div className="detail_content_comment_body_text_header">
                        <div className="detail_content_comment_body_text_header_author">
                          <h3 className="detail_content_comment_body_text_header_author_title">
                            <a href="#!">
                              <span>@sling0623</span>
                            </a>
                          </h3>
                          <p>
                            <a href="#!">3주 전(수정됨)</a>
                          </p>
                        </div>
                      </div>

                      <div className="detail_content_comment_body_text_content_container">
                        <div className="detail_content_comment_body_text_expander">
                          <div className="detail_content_comment_body_text_content">
                            <a href="#!">0:00 </a>
                            <span>Start now text</span>
                            <br />
                            <a href="#!">0:00 </a>
                            <span>Start now text</span>
                            <br />
                            <a href="#!">0:00 </a>
                            <span>Start now text</span>
                            <br />
                          </div>
                          <div className="detail_content_comment_body_text_more">
                            <span>자세히 보기</span>
                          </div>
                        </div>
                      </div>

                      <div className="detail_content_comment_body_text_action_container">
                        <div className="detail_content_comment_body_text_action_toolbar">
                          <div className="detail_content_comment_body_text_action_up">
                            <Icons.RiThumbUpLine size={22} color="#f1f1f1" />
                          </div>
                          <span className="detail_content_comment_body_text_action_up_count">
                            93
                          </span>
                          <div className="detail_content_comment_body_text_action_down">
                            <Icons.RiThumbDownLine size={22} color="#f1f1f1" />
                          </div>
                          <div className="detail_content_comment_body_text_action_reply">
                            <div className="detail_content_comment_body_text_action_reply_box">
                              <button>답글</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_content_comment_body_menu_container">
                      <div className="detail_content_comment_body_menu_box">
                        <div
                          className="detail_content_comment_body_more_button"
                          style={{ display: menuHover ? "flex" : "none" }}
                        >
                          <Icons.AiOutlineMore size={24} color="#f1f1f1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail_content_comment_reply_container">
                  <div className="detail_content_comment_reply_box">
                    <div className="detail_content_comment_reply_expander">
                      <div className="detail_content_comment_reply_expander_header">
                        <div
                          className="detail_content_comment_reply_expander_more"
                          style={{ display: replyActive ? "none" : "flex" }}
                        >
                          <div
                            className="detail_content_comment_reply_expander_more_button_container"
                            onClick={onReplyClick}
                          >
                            <div className="detail_content_comment_reply_expander_more_button">
                              <div className="detail_content_comment_reply_expander_more_button_icon">
                                <Icons.AiFillCaretDown
                                  size={18}
                                  color="#3ea6ff"
                                />
                              </div>
                              <div className="detail_content_comment_reply_expander_more_button_text">
                                <span>답글 1개</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="detail_content_comment_reply_expander_less"
                          style={{ display: replyActive ? "flex" : "none" }}
                        >
                          <div
                            className="detail_content_comment_reply_expander_less_button_container"
                            onClick={onReplyClick}
                          >
                            <div className="detail_content_comment_reply_expander_less_button">
                              <div className="detail_content_comment_reply_expander_less_button_icon">
                                <Icons.AiFillCaretUp
                                  size={18}
                                  color="#3ea6ff"
                                />
                              </div>
                              <div className="detail_content_comment_reply_expander_less_button_text">
                                <span>답글 1개</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="detail_content_comment_reply_expander_content"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail_content_comment_container">
                <div className="detail_content_comment_box">
                  <div
                    className="detail_content_comment_body"
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                  >
                    <div className="detail_content_comment_body_profile_container">
                      <a href="#!">
                        <div className="detail_content_comment_body_profile">
                          <img src={Image} alt="comment_profile_img" />
                        </div>
                      </a>
                    </div>

                    <div className="detail_content_comment_body_text_container">
                      <div className="detail_content_comment_body_text_header">
                        <div className="detail_content_comment_body_text_header_author">
                          <h3 className="detail_content_comment_body_text_header_author_title">
                            <a href="#!">
                              <span>@sling0623</span>
                            </a>
                          </h3>
                          <p>
                            <a href="#!">3주 전(수정됨)</a>
                          </p>
                        </div>
                      </div>

                      <div className="detail_content_comment_body_text_content_container">
                        <div className="detail_content_comment_body_text_expander">
                          <div className="detail_content_comment_body_text_content">
                            <a href="#!">0:00 </a>
                            <span>Start now text</span>
                            <br />
                            <a href="#!">0:00 </a>
                            <span>Start now text</span>
                            <br />
                            <a href="#!">0:00 </a>
                            <span>Start now text</span>
                            <br />
                          </div>
                          <div className="detail_content_comment_body_text_more">
                            <span>자세히 보기</span>
                          </div>
                        </div>
                      </div>

                      <div className="detail_content_comment_body_text_action_container">
                        <div className="detail_content_comment_body_text_action_toolbar">
                          <div className="detail_content_comment_body_text_action_up">
                            <Icons.RiThumbUpLine size={22} color="#f1f1f1" />
                          </div>
                          <span className="detail_content_comment_body_text_action_up_count">
                            93
                          </span>
                          <div className="detail_content_comment_body_text_action_down">
                            <Icons.RiThumbDownLine size={22} color="#f1f1f1" />
                          </div>
                          <div className="detail_content_comment_body_text_action_reply">
                            <div className="detail_content_comment_body_text_action_reply_box">
                              <button>답글</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="detail_content_comment_body_menu_container">
                      <div className="detail_content_comment_body_menu_box">
                        <div
                          className="detail_content_comment_body_more_button"
                          style={{ display: menuHover ? "flex" : "none" }}
                        >
                          <Icons.AiOutlineMore size={24} color="#f1f1f1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail_content_comment_reply_container">
                  <div className="detail_content_comment_reply_box">
                    <div className="detail_content_comment_reply_expander">
                      <div className="detail_content_comment_reply_expander_header">
                        <div
                          className="detail_content_comment_reply_expander_more"
                          style={{ display: replyActive ? "none" : "flex" }}
                        >
                          <div
                            className="detail_content_comment_reply_expander_more_button_container"
                            onClick={onReplyClick}
                          >
                            <div className="detail_content_comment_reply_expander_more_button">
                              <div className="detail_content_comment_reply_expander_more_button_icon">
                                <Icons.AiFillCaretDown
                                  size={18}
                                  color="#3ea6ff"
                                />
                              </div>
                              <div className="detail_content_comment_reply_expander_more_button_text">
                                <span>답글 1개</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="detail_content_comment_reply_expander_less"
                          style={{ display: replyActive ? "flex" : "none" }}
                        >
                          <div
                            className="detail_content_comment_reply_expander_less_button_container"
                            onClick={onReplyClick}
                          >
                            <div className="detail_content_comment_reply_expander_less_button">
                              <div className="detail_content_comment_reply_expander_less_button_icon">
                                <Icons.AiFillCaretUp
                                  size={18}
                                  color="#3ea6ff"
                                />
                              </div>
                              <div className="detail_content_comment_reply_expander_less_button_text">
                                <span>답글 1개</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="detail_content_comment_reply_expander_content"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail_playlist_container">
          <div className="detail_playlist_box">
            <div className="detail_playlist_tag_container">
              <div className="detail_playlist_tag_content">
                <div className="detail_playlist_tag_wrapper">
                  <div className="detail_playlist_tag_left_arrow">
                    <div className="detail_playlist_tag_left_arrow_button">
                      <div className="detail_playlist_tag_left_arrow_button_box">
                        <div
                          className="left_arrow_button"
                          onClick={onPrevClick}
                        >
                          <Icons.MdArrowBackIosNew size={24} color="#f1f1f1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="detail_playlist_tag_item_container"
                    ref={listRef}
                  >
                    <div className="detail_playlist_tag_item_box">
                      <div className="detail_playlist_tag_item detail_playlist_tag_item_active">
                        <p>모두</p>
                      </div>
                    </div>
                    <div className="detail_playlist_tag_item_box">
                      <div className="detail_playlist_tag_item">
                        <p>관련 콘텐츠</p>
                      </div>
                    </div>
                    <div className="detail_playlist_tag_item_box">
                      <div className="detail_playlist_tag_item">
                        <p>실시간</p>
                      </div>
                    </div>
                    <div className="detail_playlist_tag_item_box">
                      <div className="detail_playlist_tag_item">
                        <p>최근에 업로드된 동영상</p>
                      </div>
                    </div>
                    <div className="detail_playlist_tag_item_box">
                      <div className="detail_playlist_tag_item">
                        <p>감상한 동영상</p>
                      </div>
                    </div>
                  </div>
                  <div className="detail_playlist_tag_right_arrow">
                    <div className="detail_playlist_tag_right_arrow_button">
                      <div className="detail_playlist_tag_right_arrow_button_box">
                        <div
                          className="right_arrow_button"
                          onClick={onNextClick}
                        >
                          <Icons.MdArrowForwardIos size={24} color="#f1f1f1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail_playlist_content_container">
              <div className="detail_playlist_content_list">
                <div className="detail_playlist_content_list_item_container">
                  <div className="detail_playlist_content_list_item_box">
                    <div className="detail_playlist_content_list_item_profile">
                      <a
                        href="#!"
                        className="detail_playlist_content_list_item_profile_link"
                      >
                        <div className="detail_playlist_content_list_item_image_container">
                          <img src={Image} alt="list_image" />
                        </div>
                        <div className="detail_playlist_content_list_item_overlay_container">
                          <div className="detail_playlist_content_item_progress_container">
                            <div className="detail_playlist_content_item_progress"></div>
                          </div>
                          <div className="detail_playlist_content_item_time_container">
                            <span> 3:09:18 </span>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="detail_playlist_content_list_item_meta">
                      <div className="detail_playlist_content_list_item_meta_data">
                        <a href="#!">
                          <h3>
                            <span>
                              ⭐️3시간 DJ아스터⭐️2022클럽에서 유행하는 노래 /
                              페스티벌 / 탑골EDM / 미친텐션클럽음악 (광고없음)
                            </span>
                          </h3>
                          <div className="detail_playlist_content_list_item_meta_sub_container">
                            <div className="detail_playlist_content_list_item_meta_sub_box">
                              <div className="detail_playlist_content_list_item_meta_sub_title">
                                <div className="detail_playlist_content_list_item_meta_sub_channel">
                                  <div className="detail_playlist_content_list_item_meta_sub_channel_name">
                                    <p>ASTER MUSIC</p>
                                  </div>
                                </div>
                              </div>

                              <div className="detail_playlist_content_list_item_meta_sub_info">
                                <span>조회수 197만회</span>
                                <span className="detail_playlist_content_list_item_meta_sub_date">
                                  8개월 전
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="detail_playlist_content_list_item_box">
                    <div className="detail_playlist_content_list_item_profile">
                      <a
                        href="#!"
                        className="detail_playlist_content_list_item_profile_link"
                      >
                        <div className="detail_playlist_content_list_item_image_container">
                          <img src={Image} alt="list_image" />
                        </div>
                        <div className="detail_playlist_content_list_item_overlay_container">
                          <div className="detail_playlist_content_item_progress_container">
                            <div className="detail_playlist_content_item_progress"></div>
                          </div>
                          <div className="detail_playlist_content_item_time_container">
                            <span> 3:09:18 </span>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="detail_playlist_content_list_item_meta">
                      <div className="detail_playlist_content_list_item_meta_data">
                        <a href="#!">
                          <h3>
                            <span>
                              ⭐️3시간 DJ아스터⭐️2022클럽에서 유행하는 노래 /
                              페스티벌 / 탑골EDM / 미친텐션클럽음악 (광고없음)
                            </span>
                          </h3>
                          <div className="detail_playlist_content_list_item_meta_sub_container">
                            <div className="detail_playlist_content_list_item_meta_sub_box">
                              <div className="detail_playlist_content_list_item_meta_sub_title">
                                <div className="detail_playlist_content_list_item_meta_sub_channel">
                                  <div className="detail_playlist_content_list_item_meta_sub_channel_name">
                                    <p>ASTER MUSIC</p>
                                  </div>
                                </div>
                              </div>

                              <div className="detail_playlist_content_list_item_meta_sub_info">
                                <span>조회수 197만회</span>
                                <span className="detail_playlist_content_list_item_meta_sub_date">
                                  8개월 전
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
