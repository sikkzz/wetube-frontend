import React from "react";
import "./UploadReview.scss";

import Icons from "../../constants/icon";

import Image from "../../assets/test.jpg";
import Video from "../../assets/videos/test.mp4";

const UploadReview = () => {
  return (
    <>
      <wt-animatable
        id="scrollable-content"
        class="metadata-fade-in-section wt-upload-dialog"
      >
        <wt-upload-review>
          <div className="top-row wt-upload-review">
            <h1 className="wt-upload-review">공개 상태</h1>
            <div className="description wt-upload-review">
              게시할 시기와 동영상을 볼 수 있는 사람을 선택하세요.
            </div>
          </div>
          <div className="left-col wt-upload-review">
            <div id="visibility-container" className="wt-upload-review">
              <wt-video-visibility-select
                class="wt-upload-review"
                verbose
                first-container-style="selected"
                second-container-style
              >
                <div
                  id="first-container"
                  className="wt-video-visibility-select"
                >
                  <wt-radio-button
                    class="container-radio wt-video-visibility-select"
                    name="FIRST_CONTAINER"
                    role="radio"
                    active
                    checked
                  >
                    <div
                      id="radioContainer"
                      className="wt-radio-button"
                      style-target="container"
                    >
                      <div id="offRadio" className="wt-radio-button" />
                      <div id="onRadio" className="wt-radio-button" />
                    </div>
                    <div
                      id="radioLabel"
                      className="wt-radio-button"
                      style-target="label"
                    >
                      저장 또는 게시
                    </div>
                  </wt-radio-button>
                  <p className="visibility-description wt-video-visibility-select">
                    동영상을 <b className="wt-video-visibility-select">공개</b>,{" "}
                    <b className="wt-video-visibility-select">일부 공개</b> 또는{" "}
                    <b className="wt-video-visibility-select">비공개</b>로
                    설정합니다.
                  </p>
                  <wt-radio-group
                    id="privacy-radio"
                    class="wt-video-visibility-select"
                    role="radiogroup"
                  >
                    <wt-radio-button
                      id="private-radio-button"
                      name="PRIVATE"
                      class="wt-video-visibility-select"
                      role="radio"
                      active
                      checked
                    >
                      <div
                        id="radioContainer"
                        className="wt-radio-button"
                        style-target="container"
                      >
                        <div id="offRadio" className="wt-radio-button" />
                        <div id="onRadio" className="wt-radio-button" />
                      </div>
                      <div
                        id="radioLabel"
                        className="wt-radio-button"
                        style-target="label"
                      >
                        비공개
                      </div>
                    </wt-radio-button>
                    <p className="visibility-description wt-video-visibility-select">
                      나와 내가 선택한 사람만 내 동영상을 시청할 수 있습니다.
                    </p>
                    <wt-radio-button
                      name="UNLISTED"
                      class="wt-video-visibility-select"
                      role="radio"
                    >
                      <div
                        id="radioContainer"
                        className="wt-radio-button"
                        style-target="container"
                      >
                        <div id="offRadio" className="wt-radio-button" />
                        <div id="onRadio" className="wt-radio-button" />
                      </div>
                      <div
                        id="radioLabel"
                        className="wt-radio-button"
                        style-target="label"
                      >
                        일부 공개
                      </div>
                    </wt-radio-button>
                    <div className="visibility-description wt-video-visibility-select">
                      동영상 링크가 있으면 누구든 내 동영상을 볼 수 있습니다.
                    </div>
                    <wt-radio-button
                      id="private-radio-button"
                      name="PUBLIC"
                      class="wt-video-visibility-select"
                      role="radio"
                    >
                      <div
                        id="radioContainer"
                        className="wt-radio-button"
                        style-target="container"
                      >
                        <div id="offRadio" className="wt-radio-button" />
                        <div id="onRadio" className="wt-radio-button" />
                      </div>
                      <div
                        id="radioLabel"
                        className="wt-radio-button"
                        style-target="label"
                      >
                        공개
                      </div>
                    </wt-radio-button>
                    <p className="visibility-description wt-video-visibility-select">
                      누구나 내 동영상을 시청할 수 있습니다.
                    </p>
                    <div className="instant-premiere-container wt-video-visibility-select">
                      <wt-checkbox
                        id="enable-premiere-checkbox"
                        class="wt-video-visibility-select"
                        role="checkbox"
                        disabled
                      >
                        <div id="checkbox-container" className="wt-checkbox">
                          <div id="checkbox" className="wt-checkbox" />
                        </div>
                        <div className="label wt-checkbox">
                          인스턴트 Premieres 동영상으로 설정
                        </div>
                      </wt-checkbox>
                      <wt-icon-tooltip
                        compact
                        class="wt-video-visibility-select"
                      >
                        <wt-iron-icon id="icon" class="wt-icon-tooltip" compact>
                          <Icons.AiOutlineQuestionCircle
                            size={20}
                            color="#aaa"
                          />
                        </wt-iron-icon>
                      </wt-icon-tooltip>
                    </div>
                  </wt-radio-group>
                </div>
                <div
                  id="second-container"
                  className="wt-video-visibility-select"
                >
                  <wt-radio-button
                    id="schedule-radio-button"
                    class="container-radio wt-video-visibility-select"
                    name="SCHEDULE"
                    role="radio"
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
                      예약
                    </div>
                  </wt-radio-button>
                  <p className="visibility-description wt-video-visibility-select">
                    동영상을 <b className="wt-visibility-select">공개</b>로
                    설정할 날짜를 선택합니다.
                  </p>
                </div>
              </wt-video-visibility-select>
            </div>

            <div className="guidelines-section wt-upload-review">
              <h2 className="wt-upload-review">
                게시 전에 다음 사항을 확인하세요.
              </h2>
              <div className="guidelines-subsection kids wt-upload-review">
                <h3 className="wt-upload-review">
                  이 동영상에 어린이가 등장하나요?
                </h3>
                <div className="guidelines-description wt-upload-review">
                  <span className="wt-upload-review">
                    위해, 착취, 괴롭힘, 노동법 위반으로부터 미성년자를 보호하는
                    YouTube 정책을 준수해야 합니다.
                    <a href="#!">자세히 알아보기</a>
                  </span>
                </div>
              </div>

              <div className="guidelines-subsection overall wt-upload-review">
                <h3 className="wt-upload-review">
                  콘텐츠 전반에 대한 가이드라인을 찾으시나요?
                </h3>
                <div className="guidelines-description wt-upload-review">
                  <span className="wt-upload-review">
                    YouTube 커뮤니티 가이드를 활용하면 문제를 예방하고 YouTube를
                    안전하고 활발한 커뮤니티로 유지할 수 있습니다
                    <a href="#!">자세히 알아보기</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="right-col wt-upload-review">
            <wt-video-info class="wt-upload-review">
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

                <div className="video-title wt-video-info">video</div>

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
              </div>
            </wt-video-info>
          </div>
        </wt-upload-review>
      </wt-animatable>
    </>
  );
};

export default UploadReview;
