import React from "react";
import "./UploadSetting.scss";
import Icons from "../../constants/icon";

import Image from "../../assets/test.jpg";
import Video from "../../assets/videos/test2.mp4";

import { UploadStepData } from "../../constants/data/UploadStepData";

const UploadSetting = () => {
  return (
    <>
      <div className="upload_setting">
        <div className="upload_setting_header">
          <div className="upload_setting_title_container">
            <div className="upload_setting_title_text">video</div>
            <div className="upload_setting_title_button_container">
              <div className="upload_setting_title_button_box">
                <Icons.AiOutlineInfoCircle size={24} color="#fff" />
              </div>
              <div className="upload_setting_title_button_box">
                <Icons.AiOutlineClose size={24} color="#fff" />
              </div>
            </div>
          </div>

          <div className="upload_setting_stepper_container">
            <div className="upload_setting_stepper_box">
              <div className="upload_setting_stepper_wrapper">
                {/* {UploadStepData.map((item, index) => (
                  <div className="upload_setting_step_container" key={index}>
                    <button className="upload_setting_step_button">
                      <div className="upload_setting_step_title">
                        {item.title}
                      </div>
                      <div className="upload_setting_step_icon" />
                    </button>
                    <div className="upload_setting_step_separator" />
                  </div>
                ))} */}

                <div className="upload_setting_step_container">
                  <button className="upload_setting_step_button">
                    <div className="upload_setting_step_title">세부정보</div>
                    <div className="upload_setting_step_icon" />
                  </button>
                  <div className="upload_setting_step_separator" />
                </div>

                <div className="upload_setting_step_container">
                  <button className="upload_setting_step_button">
                    <div className="upload_setting_step_title">동영상 요소</div>
                    <div className="upload_setting_step_icon2" />
                  </button>
                  <div className="upload_setting_step_separator" />
                </div>

                <div className="upload_setting_step_container">
                  <button className="upload_setting_step_button">
                    <div className="upload_setting_step_title">검토</div>
                    <div className="upload_setting_step_icon3">
                      <Icons.AiOutlineCheck size={14} color="#1f1f1f" />
                    </div>
                  </button>
                  <div className="upload_setting_step_separator" />
                </div>

                <div className="upload_setting_step_container">
                  <button className="upload_setting_step_button">
                    <div className="upload_setting_step_title">공개 상태</div>
                    <div className="upload_setting_step_icon4">
                      <Icons.AiOutlineExclamation size={15} color="#ff4e45" />
                    </div>
                  </button>
                  <div className="upload_setting_step_separator" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="upload_setting_content">
          <div className="upload_setting_content_container">
            <div className="upload_setting_content_header">
              <h1>세부정보</h1>
              <button>
                <div>세부정보 재사용</div>
              </button>
            </div>

            <div className="upload_setting_content_detail">
              <div className="upload_setting_content_detail_left">
                <div className="upload_setting_content_detail_left_data">
                  <div className="upload_setting_content_detail_input_title">
                    <div className="upload_setting_content_detail_input_text_area">
                      <div className="upload_setting_content_detail_input_outer">
                        <div className="upload_setting_content_detail_input_label">
                          제목(필수 항목)
                          <div className="upload_setting_content_detail_input_help_icon">
                            <Icons.AiOutlineQuestionCircle
                              size={18}
                              color="#aaa"
                            />
                          </div>
                        </div>

                        <div className="upload_setting_content_detail_input_child">
                          <div>
                            <textarea
                              className="upload_setting_content_detail_input_text_area_box"
                              type="text"
                              placeholder="동영상을 설명하는 제목 추가(채널을 멘션하려면 @ 입력)"
                            />
                          </div>
                          <div className="upload_setting_content_detail_input_bottom">
                            <div className="upload_setting_content_detail_input_char_count">
                              1/100
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="upload_setting_content_detail_input_title">
                    <div className="upload_setting_content_detail_input_text_area">
                      <div className="upload_setting_content_detail_input_outer">
                        <div className="upload_setting_content_detail_input_label">
                          설명
                          <div className="upload_setting_content_detail_input_help_icon">
                            <Icons.AiOutlineQuestionCircle
                              size={18}
                              color="#aaa"
                            />
                          </div>
                        </div>

                        <div className="upload_setting_content_detail_input_child">
                          <div>
                            <textarea
                              className="upload_setting_content_detail_input_text_area_box text_area_detail area_detail"
                              placeholder="시청자에게 동영상에 대해 이야기하기(채널을 멘션하려면 @ 입력)"
                            />
                          </div>
                          <div className="upload_setting_content_detail_input_bottom">
                            <div className="upload_setting_content_detail_input_char_count">
                              1/100
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="upload_setting_content_detail_thumbnail">
                    <div className="upload_setting_content_detail_thumbnail_container">
                      <div className="upload_setting_content_detail_thumbnail_title">
                        미리보기 이미지
                      </div>

                      <div className="upload_setting_content_detail_thumbnail_sub_label">
                        동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요.
                        시청자의 시선을 사로잡을만한 이미지를 사용해 보세요.
                        <a href="#!">자세히 알아보기</a>
                      </div>

                      <div className="upload_setting_content_detail_thumbnail_list_container">
                        <div className="upload_setting_content_detail_thumbnail_image_upload">
                          <div className="upload_setting_content_detail_thumbnail_image_upload_inner">
                            <button>
                              <div id="tooltip_icon">
                                <Icons.AiOutlineQuestionCircle
                                  size={20}
                                  color="#909090"
                                />
                              </div>
                              <div id="add_photo_icon">
                                <Icons.MdOutlineAddPhotoAlternate
                                  size={24}
                                  color="#aaa"
                                />
                              </div>
                              <span>미리보기 이미지 업로드</span>
                            </button>
                          </div>
                        </div>

                        <div className="upload_setting_content_detail_thumbnail_list_cell">
                          <button>
                            <div id="image_outer">
                              <div id="image_inner">
                                <img src={Image} alt="list_image" />
                              </div>
                            </div>
                          </button>
                        </div>

                        <div className="upload_setting_content_detail_thumbnail_list_cell">
                          <button>
                            <div id="image_outer">
                              <div id="image_inner">
                                <img src={Image} alt="list_image" />
                              </div>
                            </div>
                          </button>
                        </div>

                        <div className="upload_setting_content_detail_thumbnail_list_cell">
                          <button>
                            <div id="image_outer">
                              <div id="image_inner">
                                <img src={Image} alt="list_image" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="upload_setting_content_detail_playlist">
                    <div className="upload_setting_content_detail_playlist_title">
                      재생목록
                    </div>
                    <div className="upload_setting_content_detail_playlist_sub_label">
                      동영상을 1개 이상의 재생목록에 추가하세요. 시청자가 내
                      콘텐츠를 더 빨리 발견하는 데 도움이 될 수 있습니다.
                      <a href="#!">자세히 알아보기</a>
                    </div>
                    <div className="upload_setting_content_detail_playlist_select">
                      <div className="upload_setting_content_detail_playlist_select_col">
                        <div className="upload_setting_content_detail_playlist_dropdown">
                          <div className="upload_setting_content_detail_playlist_dropdown_container">
                            <div className="upload_setting_content_detail_playlist_dropdown_left">
                              <span>선택</span>
                            </div>
                            <div className="upload_setting_content_detail_playlist_dropdown_right">
                              <div className="upload_setting_content_detail_playlist_dropdown_right_icon">
                                <Icons.AiFillCaretDown size={16} color="#aaa" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="upload_setting_content_detail_kids">
                    <div className="upload_setting_content_detail_kids_title">
                      시청자층
                    </div>
                    <div className="upload_setting_content_detail_kids_select">
                      <div className="upload_setting_content_detail_kids_select_title">
                        아동용 동영상인가요? (필수사항)
                      </div>
                      <div className="upload_setting_content_detail_kids_select_description">
                        모든 크리에이터는 위치에 상관없이 아동 온라인 개인정보
                        보호법(COPPA) 및 기타 법률을 준수해야 할 법적인 의무가
                        있습니다. 아동용 동영상인지 여부는 크리에이터가 지정해야
                        합니다.<a href="#!">아동용 콘텐츠란 무엇인가요?</a>
                      </div>
                      <div className="upload_setting_content_detail_kids_select_info">
                        <div className="upload_setting_content_detail_kids_select_info_box">
                          <div className="upload_setting_content_detail_kids_select_info_icon">
                            <Icons.AiOutlineExclamationCircle
                              size={20}
                              color="#aaa"
                            />
                          </div>
                          <div className="upload_setting_content_detail_kids_select_info_text">
                            <span>
                              아동용 동영상에서는 개인 맞춤 광고 및 알림 등의
                              기능을 사용할 수 없습니다. 크리에이터가 아동용으로
                              설정한 동영상은 다른 아동용 동영상과 함께 추천될
                              가능성이 높습니다.
                            </span>
                            <a href="#!">자세히 알아보기</a>
                          </div>
                        </div>
                      </div>
                      <div className="upload_setting_content_detail_kids_select_radio">
                        <div className="upload_setting_content_detail_kids_select_radio_box">
                          <div className="upload_setting_content_detail_kids_select_radio_button">
                            <div className="upload_setting_content_detail_kids_select_radio_container">
                              <div id="off_radio" />
                              <div id="on_radio" />
                            </div>
                            <div className="upload_setting_container_detail_kids_select_radio_label">
                              예, 아동용입니다.
                            </div>
                          </div>
                          <div
                            id="second"
                            className="upload_setting_content_detail_kids_select_radio_button"
                          >
                            <div className="upload_setting_content_detail_kids_select_radio_container">
                              <div id="off_radio" />
                              <div id="on_radio" />
                            </div>
                            <div className="upload_setting_container_detail_kids_select_radio_label">
                              아니요, 아동용이 아닙니다
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="upload_setting_content_detail_kids_button">
                      <div className="upload_setting_content_detail_kids_button_icon">
                        <Icons.MdOutlineKeyboardArrowDown
                          size={24}
                          color="#aaa"
                        />
                      </div>
                      <div className="upload_setting_content_detail_kids_button_icon2">
                        <Icons.MdOutlineKeyboardArrowUp
                          size={24}
                          color="#aaa"
                        />
                      </div>
                      <h3>연령 제한(고급)</h3>
                    </div>
                  </div>
                </div>
                <div className="upload_setting_content_detail_left_more">
                  <div className="upload_setting_content_more_button">
                    자세히 보기
                  </div>
                  <div className="upload_setting_content_more_text">
                    유료 프로모션, 태그, 자막 등
                  </div>
                </div>
              </div>
              <div className="upload_setting_content_detail_right">
                <div className="upload_setting_content_detail_right_inner">
                  <div className="upload_setting_content_detail_right_container">
                    <div className="upload_setting_content_detail_video_container">
                      <video controls>
                        <source src={Video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="upload_setting_content_detail_video_link_container">
                      <div className="upload_setting_content_detail_video_link_text">
                        <div className="upload_setting_content_detail_video_link_label">
                          동영상 링크
                        </div>
                        <div className="upload_setting_content_detail_video_link_value">
                          <span>
                            <a href="#!">https://youtu.be/3CmFUEOJvz8</a>
                          </span>
                        </div>
                      </div>
                      <div className="upload_setting_content_detail_video_link_icon">
                        <div className="upload_setting_content_detail_video_link_icon_container">
                          <div className="upload_setting_content_detail_video_link_icon_inner">
                            <Icons.MdContentCopy size={24} color="#aaa" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="upload_setting_content_detail_video_name_container">
                      파일 이름
                    </div>
                    <div className="upload_setting_content_detail_video_name_original">
                      video.mp4 (파일이름)
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

export default UploadSetting;
