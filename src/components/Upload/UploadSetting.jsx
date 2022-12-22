import React from "react";
import "./UploadSetting.scss";
import "./UploadReview.scss";

import Video from "../../assets/videos/test.mp4";
import Image from "../../assets/test.jpg";

import Icons from "../../constants/icon";

const UploadSetting = () => {
  return (
    <>
      <wt-animatable
        id="scrollable-content"
        class="metadata-fade-in-section wt-upload-dialog"
      >
        <wt-ve class="wt-upload-dialog">
          <div className="details-header-wrapper wt-upload-dialog">
            <h1 className="wt-upload-dialog">세부정보</h1>
            <wt-button
              id="reuse-detail-button"
              class="wt-upload-dialog"
              role="button"
            >
              <div className="label wt-button">세부정보 재사용</div>
            </wt-button>
          </div>
          <wt-video-metadata-editor
            id="detail"
            class="wt-upload-dialog"
            floating-sidepanel
          >
            <div className="left-col wt-video-metadata-editor">
              <wt-video-metadata-editor-basic
                id="basic"
                class="wt-video-metadata-editor"
              >
                <div className="input-container title wt-video-metadata-editor-basic">
                  <wt-social-suggestions-textbox
                    id="title-textarea"
                    class="wt-video-metadata-editor-basic"
                  >
                    <wt-form-input-container
                      id="container"
                      class="focused fill-height wt-social-suggestions-textbox"
                    >
                      <div id="outer" className="wt-form-input-container">
                        <div id="label" className="wt-form-input-container">
                          제목(필수 항목)
                          <div
                            id="label-help-tooltip"
                            className="wt-form-input-container"
                          >
                            <wt-iron-icon
                              id="help-icon"
                              class="help-outline-icon wt-form-input-container"
                              compact
                              role="tooltip"
                            >
                              <Icons.AiOutlineQuestionCircle
                                size={20}
                                color="#aaa"
                              />
                            </wt-iron-icon>
                          </div>
                        </div>
                        <div
                          id="child-input"
                          className="wt-form-input-container"
                        >
                          <div
                            id="container-content"
                            className="wt-social-suggestions-textbox"
                          >
                            <wt-social-suggestion-input
                              id="input"
                              class="fill-height wt-social-suggestions-textbox"
                            >
                              <div
                                slot="input"
                                contentEditable={true}
                                aria-required="true"
                                aria-invalid="false"
                                suppressContentEditableWarning={true}
                                id="textbox"
                                className="wt-social-suggestions-textbox"
                                aria-label="동영상을 설명하는 제목 추가(채널을 멘션하려면 @ 입력)"
                              >
                                video
                              </div>
                            </wt-social-suggestion-input>
                            <div className="container-bottom wt-social-suggestions-textbox">
                              <div className="char-counter wt-social-suggestions-textbox">
                                1/100
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </wt-form-input-container>
                  </wt-social-suggestions-textbox>
                </div>

                <div className="input-container description wt-video-metadata-editor-basic">
                  <wt-social-suggestions-textbox
                    id="description-textarea"
                    class="wt-video-metadata-editor-basic"
                  >
                    <wt-form-input-container
                      id="container"
                      class="focused fill-height wt-social-suggestions-textbox"
                    >
                      <div id="outer" className="wt-form-input-container">
                        <div id="label" className="wt-form-input-container">
                          설명
                          <div
                            id="label-help-tooltip"
                            className="wt-form-input-container"
                          >
                            <wt-iron-icon
                              id="help-icon"
                              class="help-outline-icon wt-form-input-container"
                              compact
                              role="tooltip"
                            >
                              <Icons.AiOutlineQuestionCircle
                                size={20}
                                color="#aaa"
                              />
                            </wt-iron-icon>
                          </div>
                        </div>
                        <div
                          id="child-input"
                          className="wt-form-input-container"
                        >
                          <div
                            id="container-content"
                            className="wt-social-suggestions-textbox"
                          >
                            <wt-social-suggestion-input
                              id="input"
                              class="fill-height wt-social-suggestions-textbox"
                            >
                              <div
                                slot="input"
                                contentEditable={true}
                                aria-required="true"
                                aria-invalid="false"
                                suppressContentEditableWarning={true}
                                id="textbox"
                                className="wt-social-suggestions-textbox"
                                aria-label="시청자에게 동영상에 대해 이야기하기(채널을 멘션하려면 @ 입력)"
                              ></div>
                            </wt-social-suggestion-input>
                            <div className="container-bottom wt-social-suggestions-textbox">
                              <div className="char-counter wt-social-suggestions-textbox">
                                1/100
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </wt-form-input-container>
                  </wt-social-suggestions-textbox>
                </div>

                <div className="input-container wt-video-metadata-editor-basic">
                  <wt-thumbnail-compact-editor-old class="wt-video-metadata-editor-basic">
                    <div
                      className="label wt-thumbnail-compact-editor-old"
                      id="autogen-thumb-label"
                    >
                      미리보기 이미지
                    </div>
                    <div className="sublabel wt-thumbnail-compact-editor-old">
                      동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요.
                      시청자의 시선을 사로잡을만한 이미지를 사용해 보세요.{" "}
                      <a href="#!">자세히 알아보기</a>
                    </div>
                    <div
                      id="still-picker"
                      role="listbox"
                      className="wt-thumbnail-compact-editor-old"
                    >
                      <wt-thumbnail-compact-editor-uploader-old class="wt-thumbnail-compact-editor-old">
                        <div className="upload-picker wt-thumbnail-compact-editor-uploader-old">
                          <button className="remove-default-style wt-thumbnail-compact-editor-uploader-old">
                            <wt-iron-icon
                              id="tooltip-icon"
                              class="help-tooltip wt-thumbnail-compact-editor-uploader-old"
                              compact
                            >
                              <Icons.AiOutlineQuestionCircle
                                size={20}
                                color="#909090"
                              />
                            </wt-iron-icon>
                            <wt-iron-icon
                              id="add-photo-icon"
                              class="wt-thumbnail-compact-editor-uploader-old"
                            >
                              <Icons.MdOutlineAddPhotoAlternate
                                size={24}
                                color="#aaa"
                              />
                            </wt-iron-icon>
                            <span>미리보기 이미지 업로드</span>
                          </button>
                        </div>
                      </wt-thumbnail-compact-editor-uploader-old>
                      <wt-still-cell
                        role="option"
                        class="wt-thumbnail-compact-editor-old"
                      >
                        <button className="remove-default-style wt-still-cell">
                          <wt-img-with-fallback
                            class="still wt-still-cell"
                            rounded
                          >
                            <div className="container wt-img-with-fallback">
                              <img
                                id="img-with-fallback"
                                className="wt-img-with-fallback"
                                src={Image}
                                alt="업로드 미리보기 이미지"
                              />
                            </div>
                          </wt-img-with-fallback>
                        </button>
                      </wt-still-cell>

                      <wt-still-cell
                        role="option"
                        class="wt-thumbnail-compact-editor-old"
                        selected
                      >
                        <button className="remove-default-style wt-still-cell">
                          <wt-img-with-fallback
                            class="still wt-still-cell"
                            rounded
                          >
                            <div className="container wt-img-with-fallback">
                              <img
                                id="img-with-fallback"
                                className="wt-img-with-fallback"
                                src={Image}
                                alt="업로드 미리보기 이미지"
                              />
                            </div>
                          </wt-img-with-fallback>
                        </button>
                      </wt-still-cell>

                      <wt-still-cell
                        role="option"
                        class="wt-thumbnail-compact-editor-old"
                      >
                        <button className="remove-default-style wt-still-cell">
                          <wt-img-with-fallback
                            class="still wt-still-cell"
                            rounded
                          >
                            <div className="container wt-img-with-fallback">
                              <img
                                id="img-with-fallback"
                                className="wt-img-with-fallback"
                                src={Image}
                                alt="업로드 미리보기 이미지"
                              />
                            </div>
                          </wt-img-with-fallback>
                        </button>
                      </wt-still-cell>
                    </div>
                  </wt-thumbnail-compact-editor-old>
                </div>

                <div className="input-container wt-video-metadata-editor-basic">
                  <div className="section-label-with-description wt-video-metadata-editor-basic">
                    재생목록
                  </div>
                  <div className="section-description wt-video-metadata-editor-basic">
                    동영상을 1개 이상의 재생목록에 추가하세요. 시청자가 내
                    콘텐츠를 더 빨리 발견하는 데 도움이 될 수 있습니다.{" "}
                    <a href="#!">자세히 알아보기</a>
                  </div>
                  <div className="compact-row wt-video-metadata-editor-basic">
                    <div className="col wt-video-metadata-editor-basic">
                      <wt-video-metadata-playlist class="wt-video-metadata-editor-basic">
                        <wt-text-dropdown-trigger class="dropdown wt-video-metadata-playlist">
                          <wt-dropdown-trigger class="use-placeholder wt-text-dropdown-trigger">
                            <div className="container wt-dropdown-trigger">
                              <div className="left-container wt-dropdown-trigger">
                                <span className="dropdown-trigger-text wt-text-dropdown-trigger">
                                  선택
                                </span>
                              </div>
                              <div className="right-container wt-dropdown-trigger">
                                <wt-iron-icon class="wt-dropdown-trigger">
                                  <Icons.AiFillCaretDown
                                    size={16}
                                    color="#aaa"
                                  />
                                </wt-iron-icon>
                              </div>
                            </div>
                          </wt-dropdown-trigger>
                        </wt-text-dropdown-trigger>
                      </wt-video-metadata-playlist>
                    </div>
                    <div className="col wt-video-metadata-editor-basic"></div>
                  </div>
                </div>

                <div
                  className="input-container wt-video-metadata-editor-basic"
                  id="audience"
                >
                  <div className="section-label wt-video-metadata-editor-basic">
                    시청자층
                  </div>
                  <wt-kids-select class="wt-video-metadata-editor-basic">
                    <div className="radio-button-title wt-kids-select">
                      아동용 동영상인가요? (필수사항)
                    </div>
                    <div className="description wt-kids-select">
                      모든 크리에이터는 위치에 상관없이 아동 온라인 개인정보
                      보호법(COPPA) 및 기타 법률을 준수해야 할 법적인 의무가
                      있습니다. 아동용 동영상인지 여부는 크리에이터가 지정해야
                      합니다. <a href="#!">아동용 콘텐츠란 무엇인가요?</a>
                    </div>
                    <div className="infobox-container wt-kids-select">
                      <div className="infobox wt-kids-select">
                        <wt-iron-icon compact class="wt-kids-select">
                          <Icons.AiOutlineExclamationCircle
                            size={20}
                            color="#aaa"
                          />
                        </wt-iron-icon>
                        <div className="wt-kids-select">
                          <span className="wt-kids-select">
                            아동용 동영상에서는 개인 맞춤 광고 및 알림 등의
                            기능을 사용할 수 없습니다. 크리에이터가 아동용으로
                            설정한 동영상은 다른 아동용 동영상과 함께 추천될
                            가능성이 높습니다.{" "}
                          </span>
                          <a href="#!">자세히 알아보기</a>
                        </div>
                      </div>
                    </div>
                    <div className="kids-rating-container wt-kids-select">
                      <wt-radio-group class="kids-group wt-kids-select">
                        <wt-radio-button
                          name="VIDEO_KIDS"
                          class="wt-kids-select"
                          role="radio"
                          aria-checked="false"
                          aria-disabled="false"
                          // aria-selected="false"
                          checked
                        >
                          <div
                            id="radioContainer"
                            style-target="container"
                            className="wt-radio-button"
                          >
                            <div id="offRadio" className="wt-radio-button" />
                            <div id="onRadio" className="wt-radio-button" />
                          </div>
                          <div
                            id="radioLabel"
                            style-target="label"
                            className="wt-radio-button"
                          >
                            <wt-ve class="wt-kids-select" role="none">
                              예, 아동용입니다
                            </wt-ve>
                          </div>
                        </wt-radio-button>
                        <wt-radio-button
                          name="VIDEO_KIDS_NOT"
                          class="wt-kids-select"
                          role="radio"
                          aria-checked="false"
                          aria-disabled="false"
                          // aria-selected="false"
                        >
                          <div
                            id="radioContainer"
                            style-target="container"
                            className="wt-radio-button"
                          >
                            <div id="offRadio" className="wt-radio-button" />
                            <div id="onRadio" className="wt-radio-button" />
                          </div>
                          <div
                            id="radioLabel"
                            style-target="label"
                            className="wt-radio-button"
                          >
                            <wt-ve class="wt-kids-select" role="none">
                              아니요, 아동용이 아닙니다
                            </wt-ve>
                          </div>
                        </wt-radio-button>
                      </wt-radio-group>
                    </div>
                  </wt-kids-select>
                  <button className="expand-button remove-default-style wt-video-metadata-editor-basic">
                    <wt-iron-icon class="remove-default-style wt-video-metadata-editor-basic">
                      <Icons.MdOutlineKeyboardArrowDown
                        size={24}
                        color="#aaa"
                      />
                    </wt-iron-icon>
                    <h3 className="section-label wt-video-metadata-editor-basic">
                      연령 제한(고급)
                    </h3>
                  </button>
                </div>
              </wt-video-metadata-editor-basic>

              <div className="toggle-section wt-video-metadata-editor">
                <wt-button
                  id="toggle-button"
                  class="wt-video-metadata-editor"
                  role="button"
                >
                  <div className="label wt-button">자세히 보기</div>
                </wt-button>
                <div className="more-options-description wt-video-metadata-editor">
                  유료 프로모션, 태그, 자막 등
                </div>
              </div>
            </div>

            <wt-video-metadata-editor-sidepanel class="wt-video-metadata-editor">
              <wt-video-info class="input-container wt-video-metadata-editor-sidepanel">
                <div className="container wt-video-info">
                  <wt-html5-video-player class="wt-video-info">
                    <wt-video-player
                      id="video-player"
                      class="wt-html5-video-player"
                    >
                      <div className="player-wrapper wt-video-player wt-html5-video-player">
                        <wt-video-player-control
                          id="video-player"
                          class="video-player wt-video-player locked"
                        >
                          <div
                            id="video-container"
                            className="wt-video-player-control"
                          >
                            <div
                              id="video-source-slot"
                              className="wt-video-player-control"
                            >
                              <div
                                id="video-source-container"
                                className="wt-video-player"
                              >
                                <wt-html5-video-source
                                  id="video-source"
                                  class="wt-html5-video-player"
                                >
                                  <video
                                    id="video"
                                    className="wt-html5-video-source"
                                  >
                                    <source src={Video}></source>
                                  </video>
                                </wt-html5-video-source>
                              </div>
                              <div
                                id="thumbnail-container"
                                className="wt-video-player"
                              >
                                <wt-img-with-fallback class="wt-video-player">
                                  <div className="container wt-img-with-fallback">
                                    <img
                                      id="img-with-fallback"
                                      className="wt-img-with-fallback"
                                      src={Image}
                                      alt="img_with_fallback"
                                    />
                                  </div>
                                </wt-img-with-fallback>
                              </div>
                            </div>

                            <div
                              id="toolbar-container"
                              className="wt-video-player-control"
                            ></div>
                          </div>
                        </wt-video-player-control>
                      </div>
                    </wt-video-player>
                  </wt-html5-video-player>

                  <div className="row wt-video-info">
                    <div className="left wt-video-info">
                      <div className="label wt-video-info">동영상 링크</div>
                      <div className="value wt-video-info">
                        <span className="video-url wt-video-info">
                          <a href="#!">https://youtu.be/xzfgWc-MMcI</a>
                        </span>
                      </div>
                    </div>
                    <div className="right wt-video-info">
                      <wt-icon-button class="wt-video-info">
                        <wt-iron-icon class="wt-icon-button">
                          <Icons.MdContentCopy size={24} color="#aaa" />
                        </wt-iron-icon>
                      </wt-icon-button>
                    </div>
                  </div>

                  <div className="label wt-video-info">파일 이름</div>

                  <div id="original-filename" className="value wt-video-info">
                    video.mp4
                  </div>
                </div>
              </wt-video-info>
            </wt-video-metadata-editor-sidepanel>
          </wt-video-metadata-editor>
        </wt-ve>
      </wt-animatable>
    </>
  );
};

export default UploadSetting;
