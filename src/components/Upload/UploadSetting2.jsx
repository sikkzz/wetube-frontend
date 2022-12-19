import React, { useState } from "react";
import "./UploadSetting2.scss";

import Icons from "../../constants/icon";

const UploadSetting2 = () => {
  const [open, setOpen] = useState(false);
  const onCloseClick = () => {
    setOpen(false);
  };
  return (
    <>
      <wt-upload-dialog
        workflow-step="DETAILS"
        style={{ display: "flex" }}
        // ref={uploadRef}
        // style={{ display: open ? "flex" : "none" }}
      >
        <wt-dialog
          id="dialog"
          class="wt-upload-dialog"
          style-target="host"
          role="dialog"
          style={{
            outline: "none",
            zIndex: "2202",
            position: "fixed",
            top: "24px",
            left: "31.5px",
          }}
        >
          <div className="dialog-content wt-upload-dialog">
            <div className="header wt-upload-dialog">
              <div className="title-row wt-upload-dialog">
                <wt-animatable class="metadata-fade-in-section wt-upload-dialog">
                  <div
                    id="title"
                    className="metadata-fade-in-section wt-upload-dialog"
                  >
                    video
                  </div>
                </wt-animatable>
                <div className="close-button-area wt-upload-dialog">
                  <wt-send-feedback-button class="wt-upload-dialog">
                    <wt-icon-button
                      class="wt-upload-dialog"
                      role="button"
                      icon="icon:feedback"
                    >
                      <wt-iron-icon class="wt-icon-button">
                        <Icons.AiOutlineInfoCircle size={24} color="#aaa" />
                      </wt-iron-icon>
                    </wt-icon-button>
                  </wt-send-feedback-button>
                  <wt-icon-button
                    id="close-button"
                    icon="close"
                    class="wt-upload-dialog"
                    role="button"
                    onClick={onCloseClick}
                  >
                    <wt-iron-icon class="wt-icon-button">
                      <Icons.AiOutlineClose size={24} color="#aaa" />
                    </wt-iron-icon>
                  </wt-icon-button>
                </div>
              </div>
              <wt-animatable class="metadata-fade-in-section stepper-animatable wt-upload-dialog">
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
                            <Icons.AiOutlineExclamation
                              size={24}
                              color="#ff4e45"
                            />
                          </wt-iron-icon>
                        </div>
                      </button>
                      <div className="separator wt-stepper" />
                    </div>
                  </div>
                </wt-stepper>
              </wt-animatable>
            </div>
            <wt-animatable
              id="scrollable-content"
              class="metadata-fade-in-section wt-upload-dialog"
            >
              <wt-ve class="wt-upload-dialog">
                <div className="details-header-wrapper wt-upload-dialog"></div>
              </wt-ve>
            </wt-animatable>
          </div>
        </wt-dialog>
      </wt-upload-dialog>
    </>
  );
};

export default UploadSetting2;
