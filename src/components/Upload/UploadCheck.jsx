import React from "react";
import Icons from "../../constants/icon";
import "./UploadCheck.scss";

const UploadCheck = () => {
  return (
    <>
      <wt-animatable
        id="scrollable-content"
        class="metadata-fade-in-section wt-upload-dialog"
      >
        <wt-upload-check>
          <div className="top-row wt-upload-check">
            <h1 className="wt-upload-check">검토</h1>
            <div className="description wt-upload-check">
              YouTube에서 동영상에 공개 상태를 제한할 수 있는 문제가 있는지
              검사합니다. 그러면 동영상을 게시하기 전에 문제를 해결할 수
              있습니다. <a href="#!">자세히 알아보기</a>
            </div>
          </div>
          <div className="status-container wt-upload-check">
            <wt-upload-check-status>
              <div id="content-wrapper" className="wt-upload-check-status">
                <div id="content" className="wt-upload-check-status">
                  <div id="status" className="wt-upload-check-status">
                    <div id="title" className="wt-upload-check-status">
                      저작권
                    </div>
                    <div
                      id="icon-and-description"
                      className="wt-upload-check-status"
                    >
                      <div
                        id="results-container"
                        className="wt-upload-check-status"
                      >
                        <span
                          id="results-description"
                          className="wt-upload-check-status"
                        >
                          발견된 문제가 없습니다.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id="action" className="wt-upload-check-status">
                    <wt-iron-icon
                      id="success-icon"
                      class="wt-upload-check-status"
                    >
                      <Icons.AiOutlineCheck size={24} color="#2ba640" />
                    </wt-iron-icon>
                  </div>
                </div>
              </div>
            </wt-upload-check-status>
            <div id="disclaimer" className="wt-upload-check">
              주의: 검사 결과는 확정적이지 않습니다. 동영상에 영향을 미치는
              문제가 나중에 발생할 수도 있습니다.
              <a href="#!">자세히 알아보기</a>
            </div>
          </div>
          <wt-send-feedback-button class="wt-upload-check">
            <button className="remove-default-style wt-upload-check">
              <div className="feedback-text wt-upload-check">의견 보내기</div>
            </button>
          </wt-send-feedback-button>
        </wt-upload-check>
      </wt-animatable>
    </>
  );
};

export default UploadCheck;
