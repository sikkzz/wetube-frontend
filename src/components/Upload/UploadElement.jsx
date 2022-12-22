import React from "react";
import "./UploadElement.scss";
import Icons from "../../constants/icon";

const UploadElement = () => {
  return (
    <>
      <wt-animatable
        id="scrollable-content"
        class="metadata-fade-in-section wt-upload-dialog"
      >
        <wt-upload-video-element>
          <h1 className="wt-upload-video-element">동영상 요소</h1>
          <div className="description wt-upload-video-element">
            <span className="wt-upload-video-element">
              카드와 최종 화면을 사용하여 시청자에게 관련 동영상, 웹사이트, 클릭
              유도문안을 표시하세요.
            </span>
            <a href="#!" className="wt-upload-video-element">
              자세히 알아보기
            </a>
          </div>
          <div className="container wt-upload-video-element">
            <div className="still-processing-scrim wt-upload-video-element" />
            <wt-iron-icon class="wt-upload-video-element">
              <Icons.FaRegKeyboard size={24} color="#aaa" />
            </wt-iron-icon>
            <div className="text-content wt-upload-video-element">
              <h3 className="wt-upload-video-element">자막 추가</h3>
              <div className="section-sublabel wt-upload-video-element">
                동영상에 자막을 추가하여 더 많은 시청자에게 다가가세요.
              </div>
            </div>
            <wt-button disabled>
              <div className="label wt-button">추가</div>
            </wt-button>
          </div>

          <div className="container wt-upload-video-element">
            <div className="still-processing-scrim wt-upload-video-element" />
            <wt-iron-icon class="wt-upload-video-element">
              <Icons.RiCheckboxMultipleBlankLine size={24} color="#aaa" />
            </wt-iron-icon>
            <div className="text-content wt-upload-video-element">
              <h3 className="wt-upload-video-element">최종 화면 추가</h3>
              <div className="section-sublabel wt-upload-video-element">
                동영상이 끝날 때 관련 콘텐츠를 홍보합니다.
              </div>
            </div>
            <wt-button
              id="import-from-video-button"
              class="wt-upload-video-element"
              disabled
            >
              <div className="label wt-button">동영상에서 가져오기</div>
            </wt-button>
            <wt-button disabled>
              <div className="label wt-button">추가</div>
            </wt-button>
          </div>

          <div className="container wt-upload-video-element">
            <div className="still-processing-scrim wt-upload-video-element" />
            <wt-iron-icon class="wt-upload-video-element">
              <Icons.AiOutlineInfoCircle size={24} color="#aaa" />
            </wt-iron-icon>
            <div className="text-content wt-upload-video-element">
              <h3 className="wt-upload-video-element">카드 추가</h3>
              <div className="section-sublabel wt-upload-video-element">
                동영상 재생 중에 관련 콘텐츠를 홍보합니다.
              </div>
            </div>
            <wt-button disabled>
              <div className="label wt-button">추가</div>
            </wt-button>
          </div>
        </wt-upload-video-element>
      </wt-animatable>
    </>
  );
};

export default UploadElement;
