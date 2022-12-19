import React, { useState, useImperativeHandle, forwardRef } from "react";
import "./Upload.scss";

import UploadFilePicker from "./UploadFilePicker";

import Icons from "../../constants/icon";

const Upload = forwardRef(({ uploadRef }, ref) => {
  const [open, setOpen] = useState(false);

  const onUploadClick = () => {
    setOpen(true);
  };

  const onCloseClick = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    onUploadClick,
  }));

  return (
    <>
      <wt-iron-overlay-backdrop
        class="wt-st-search"
        style={{
          display: open ? "block" : "none",
          opacity: open ? "0.6" : "0",
        }}
      />
      <wt-upload-dialog
        workflow-step="SELECT_FILES"
        ref={uploadRef}
        style={{ display: open ? "flex" : "none" }}
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
            left: "344px",
          }}
        >
          <div className="dialog-content wt-upload-dialog">
            <div className="header wt-upload-dialog">
              <div className="title-row wt-upload-dialog">
                <wt-animatable class="metadata-fade-in-section wt-upload-dialog">
                  <div id="title" className="wt-upload-dialog">
                    동영상 업로드
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
            </div>
            <UploadFilePicker />
          </div>
        </wt-dialog>
      </wt-upload-dialog>
    </>
  );
});

export default Upload;
