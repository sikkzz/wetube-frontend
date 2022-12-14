import React from "react";
import "./UploadSetting.scss";
import Icons from "../../constants/icon";

import Image from "../../assets/test.jpg";

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
                <div className="upload_setting_content_detail_left_container">
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
