import React from "react";
import "./Upload.scss";

import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdUpload } from "react-icons/md";

const Upload = () => {
  return (
    <>
      <div className="upload">
        <div className="upload_title">
          <div className="upload_title_container">
            <div className="upload_title_text">동영상 업로드</div>
            <div className="upload_title_button_container">
              <div className="upload_title_button">
                <AiOutlineInfoCircle size={24} color="#fff" />
              </div>
              <div className="upload_title_button">
                <AiOutlineClose size={24} color="#fff" />
              </div>
            </div>
          </div>
        </div>
        <div className="upload_content">
          <div className="upload_content_container">
            <div className="upload_content_icon_container">
              <div className="upload_content_icon_box">
                <div className="upload_content_icon">
                  <MdUpload size={50} color="#fff" />
                </div>
              </div>
            </div>

            <div className="upload_content_title_container">
              <p className="upload_content_title">
                동영상 파일을 드래그 앤 드롭하여 업로드
              </p>
            </div>

            <div className="upload_content_subtitle_container">
              <p className="upload_content_subtitle">
                동영상을 게시하기 전에는 비공개로 설정됩니다.
              </p>
            </div>

            <div className="upload_content_button_container">
              <div className="upload_content_button">파일 선택</div>
            </div>

            <div className="upload_content_info_container">
              <p className="upload_content_info">
                YouTube에 동영상을 제출하면 YouTube 서비스 약관 및 커뮤니티
                가이드에 동의하게 됩니다.
              </p>
            </div>

            <div className="upload_content_subinfo_container">
              <p className="upload_content_subinfo">
                불법촬영물 게재시 삭제 조치되고 관련 법에 따라 처벌 받을 수
                있습니다. 타인의 저작권 또는 개인정보 보호 권한을 침해해서는 안
                됩니다. 자세히 알아보기
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
