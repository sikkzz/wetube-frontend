import React from "react";

import Icons from "../../constants/icon";

const UploadHeaderButton = ({ modalOpen, setModalOpen }) => {
  const onCloseClick = () => {
    setModalOpen(false);
  };
  return (
    <>
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
    </>
  );
};

export default UploadHeaderButton;
