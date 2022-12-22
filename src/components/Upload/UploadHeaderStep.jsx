import React from "react";

import Icons from "../../constants/icon";

const UploadHeaderStep = () => {
  return (
    <>
      <wt-stepper class="wt-upload-dialog">
        <div className="stepper wt-stepper">
          <div className="step-and-separator wt-stepper">
            <button className="step remove-default-style wt-stepper">
              <div className="step-title wt-stepper">세부정보</div>
              <div className="step-badge wt-stepper"></div>
            </button>
            <div className="separator wt-stepper"></div>
          </div>

          <div className="step-and-separator wt-stepper">
            <button
              className="step remove-default-style wt-stepper"
              state="default"
            >
              <div className="step-title wt-stepper">동영상 요소</div>
              <div className="step-badge wt-stepper"></div>
            </button>
            <div className="separator wt-stepper"></div>
          </div>
          <div className="step-and-separator wt-stepper">
            <button
              className="step remove-default-style wt-stepper"
              state="complete"
            >
              <div className="step-title wt-stepper">검토</div>
              <div className="step-badge wt-stepper">
                <wt-iron-icon class="step-badge-check wt-stepper">
                  <Icons.AiOutlineCheck size={16} color="#1f1f1f" />
                </wt-iron-icon>
              </div>
            </button>
            <div className="separator wt-stepper"></div>
          </div>
          <div className="step-and-separator wt-stepper">
            <button
              className="step remove-default-style wt-stepper"
              state="error"
            >
              <div className="step-title wt-stepper">공개 상태</div>
              <div className="step-badge wt-stepper">
                <wt-iron-icon class="step-badge-error wt-stepper">
                  <Icons.AiOutlineExclamation size={24} color="#ff4e45" />
                </wt-iron-icon>
              </div>
            </button>
            <div className="separator wt-stepper" />
          </div>
        </div>
      </wt-stepper>
    </>
  );
};

export default UploadHeaderStep;
