import React, { useEffect, useState, useRef } from "react";

import Icons from "../../constants/icon";

const UploadFilePicker = () => {
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);

  const [uploadStep, setUploadStep] = useState("file_picker");

  //   const handleClickFileInput = () => {
  //     fileInputRef.current?.click();
  //   };

  const uploadProfile = (e) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  // const showImage = useMemo(() => {
  //   if (!imageFile && imageFile == null) {
  //     return null;
  //   }
  //   return (
  //     <img
  //       src={imageFile.thumbnail}
  //       alt={imageFile.type}
  //       onClick={handleClickFileInput}
  //       style={{ width: "100px" }}
  //     />
  //   );
  // }, [imageFile]);

  useEffect(() => {
    if (imageFile) {
      setUploadStep("setting");
    }
  }, [imageFile]);
  
  return (
    <>
      <wt-upload-file-picker
        id="wt-upload-dialog-file-picker"
        class="wt-upload-dialog"
        style={{ display: uploadStep === "file_picker" ? "flex" : "none" }}
      >
        <div
          id="content"
          className="wt-upload-file-picker"
          style={{ position: "relative" }}
        >
          <wt-upload-file-picker-animation
            id="animation"
            class="wt-upload-file-picker"
          >
            <div id="circle" className="wt-upload-file-picker-animation">
              <Icons.MdUpload size={60} color="#909090" />
            </div>
          </wt-upload-file-picker-animation>
          <p className="label wt-upload-file-picker">
            동영상 파일을 드래그 앤 드롭하여 업로드
          </p>
          <p className="sublabel wt-upload-file-picker">
            동영상을 게시하기 전에는 비공개로 설정됩니다.
          </p>
          <wt-button
            id="select-files-button"
            type="filled"
            class="wt-upload-file-picker"
            role="button"
          >
            <label className="label wt-button">
              파일 선택
              <input
                type="file"
                id="file"
                onChange={uploadProfile}
                ref={fileInputRef}
                multiple="multiple"
                name="Filedata"
                style={{
                  // position: "absolute",
                  // overflow: "hidden",
                  // width: "0px",
                  // height: "0px",
                  // opacity: "0",
                  // left: "0px",
                  // top: "0px",
                  display: "none",
                }}
              />
            </label>
          </wt-button>

          <p className="disclaimer wt-upload-file-picker">
            YouTube에 동영상을 제출하면 YouTube <a href="#!">서비스 약관</a> 및{" "}
            <a href="#!">커뮤니티 가이드</a>에 동의하게 됩니다.
          </p>
          <p className="disclaimer wt-upload-file-picker">
            <span>
              불법촬영물 게재시 삭제 조치되고 관련 법에 따라 처벌 받을 수
              있습니다. 타인의 저작권 또는 개인정보 보호 권한을 침해해서는 안
              됩니다.{" "}
            </span>
            <a href="#!">자세히 알아보기</a>
          </p>
        </div>
      </wt-upload-file-picker>
    </>
  );
};

export default UploadFilePicker;
