import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import "./Upload.scss";

import UploadFilePicker from "./UploadFilePicker";
import UploadSetting from "./UploadSetting";
import UploadElement from "./UploadElement";
import UploadCheck from "./UploadCheck";
import UploadReview from "./UploadReview";
import UploadHeaderStep from "./UploadHeaderStep";
import UploadFooter from "./UploadFooter";
import UploadHeaderButton from "./UploadHeaderButton";

const Upload = forwardRef(({ uploadRef }, ref) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("");

  const onUploadClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    setStep("SELECT_FILES");
  }, []);

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
        workflow-step={step}
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
            left: "22.917%",
          }}
        >
          <div className="dialog-content wt-upload-dialog">
            <div className="header wt-upload-dialog">
              <div className="title-row wt-upload-dialog">
                <wt-animatable class="metadata-fade-in-section wt-upload-dialog">
                  {step === "SELECT_FILES" ? (
                    <div id="title" className="wt-upload-dialog">
                      동영상 업로드
                    </div>
                  ) : (
                    <div
                      id="title"
                      className="metadata-fade-in-section wt-upload-dialog"
                    >
                      video
                    </div>
                  )}
                </wt-animatable>

                <UploadHeaderButton setOpen={setOpen} />
              </div>

              <wt-animatable class="metadata-fade-in-section stepper-animatable wt-upload-dialog">
                {step === "SELECT_FILES" ? "" : <UploadHeaderStep />}
              </wt-animatable>
            </div>

            {
              {
                SELECT_FILES: <UploadFilePicker setStep={setStep} />,
                DETAILS: <UploadSetting />,
                VIDEO_ELEMENTS: <UploadElement />,
                CHECKS: <UploadCheck />,
                REVIEW: <UploadReview />,
              }[step]
            }

            <UploadFooter step={step} setStep={setStep} />
          </div>
        </wt-dialog>
      </wt-upload-dialog>
    </>
  );
});

export default Upload;
