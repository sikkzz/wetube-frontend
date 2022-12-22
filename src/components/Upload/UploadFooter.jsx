import React, { useEffect, useState } from "react";

import Icons from "../../constants/icon";

const UploadFooter = ({ step, setStep }) => {
  const [next, setNext] = useState("DETAILS");
  const [prev, setPrev] = useState("VIDEO_ELEMENTS");

  useEffect(() => {
    if (step === "DETAILS") {
      setNext("VIDEO_ELEMENTS");
    } else if (step === "VIDEO_ELEMENTS") {
      setNext("CHECKS");
      setPrev("DETAILS");
    } else if (step === "CHECKS") {
      setNext("REVIEW");
      setPrev("DETAILS");
    } else if (step === "REVIEW") {
      setPrev("CHECKS");
    }
  }, [step]);

  const onNextClick = () => {
    setStep(next);
  };

  const onPrevClick = () => {
    setStep(prev);
  };

  return (
    <>
      <wt-animatable class="button-area metadata-fade-in-section wt-upload-dialog">
        <div className="inner-button-area wt-upload-dialog">
          <div className="left-button-area wt-upload-dialog">
            <wt-video-upload-progress class="wt-upload-dialog">
              <wt-iron-icon
                id="uploadding-badge"
                class="wt-video-upload-progress"
                role="tooltip"
              >
                <Icons.TbArrowBarUp size={24} color="#3ea6ff" />
              </wt-iron-icon>
              <wt-iron-icon
                id="processing-badge"
                class="wt-video-upload-progress"
                role="tooltip"
              >
                <Icons.RiHdLine size={24} color="#3ea6ff" />
              </wt-iron-icon>
              <wt-iron-icon
                id="checks-badge"
                class="wt-video-upload-progress"
                role="tooltip"
              >
                <Icons.AiOutlineCheckCircle size={24} color="#3ea6ff" />
              </wt-iron-icon>
              <span className="progress-label wt-video-upload-progress">
                검사가 완료되었습니다. 발견된 문제가 없습니다.
              </span>
            </wt-video-upload-progress>
          </div>
          <div className="right-button-area wt-upload-dialog">
            <wt-button
              id="back-button"
              type="secondary"
              class="wt-upload-dialog"
              role="button"
              style={{ display: step === "DETAILS" ? "none" : "inline-flex" }}
              onClick={onPrevClick}
            >
              <div className="label wt-button">뒤로</div>
            </wt-button>
            <wt-button
              id="next-button"
              type="filled"
              class="wt-upload-dialog"
              role="button"
              onClick={onNextClick}
              style={{ display: step === "REVIEW" ? "none" : "inline-flex" }}
            >
              <div className="label wt-button">다음</div>
            </wt-button>
            <wt-button
              id="done-button"
              type="filled"
              class="wt-upload-dialog"
              role="button"
              style={{ display: step === "REVIEW" ? "inline-flex" : "none" }}
            >
              <div className="label wt-button">저장</div>
            </wt-button>
          </div>
        </div>
      </wt-animatable>
    </>
  );
};

export default UploadFooter;
