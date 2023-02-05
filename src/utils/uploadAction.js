import axios from "axios";

export const uploadClick = async (e, { setStep }) => {
  setStep("DETAILS");
  const api_url = `http://localhost:8080`;
  const file = e.target.files[0];
  const fileName = file.name;
  const fileSize = file.size;
  const formData = new FormData();

  if (!file) {
    return;
  }

  formData.append("video", file);

  console.log(file.name);
  console.log(file.size);

  let start = new Date();

  // 서버에 업로드 시작 요청
  let res = await axios.post(`${api_url}/upload`, {
    fileName: fileName,
  });
  const uploadId = res.data.uploadId;
  const newFilename = res.data.fileName;

  // 세션 스토리지에 정보 저장
  sessionStorage.setItem("uploadId", uploadId);
  sessionStorage.setItem("fileName", newFilename);

  const chunkSize = 10 * 1024 * 1024;
  const chunkCount = Math.floor(fileSize / chunkSize) + 1;
  console.log(`chunkCount: ${chunkCount}`);

  let UploadArray = [];

  for (let uploadCount = 1; uploadCount < chunkCount + 1; uploadCount++) {
    // 파일 사이즈 청크 크기에 맞춰서 조정
    let start = (uploadCount - 1) * chunkSize;
    let end = uploadCount * chunkSize;
    let fileBlob =
      uploadCount < chunkCount ? file.slice(start, end) : file.slice(start);

    // 서버에서 url 발급
    let getSignedUrlRes = await axios.post(`${api_url}/upload-signed-url`, {
      fileName: newFilename,
      partNumber: uploadCount,
      uploadId: uploadId,
    });

    let preSignedUrl = getSignedUrlRes.data.preSignedUrl;
    console.log(`preSignedUrl ${uploadCount} : ${preSignedUrl}`);
    console.log(fileBlob);

    // 서버에서 발급받은 url을 이용해 서버에 청크 업로드
    let uploadChunk = await fetch(preSignedUrl, {
      method: "PUT",
      body: fileBlob,
    });
    console.log(uploadChunk);

    // 응답 헤더에 있는 Etag와 파트 번호
    let EtagHeader = uploadChunk.headers.get("ETag").replaceAll('"', "");
    console.log(EtagHeader);
    let uploadPartDetails = {
      awsETag: EtagHeader,
      partNumber: uploadCount,
    };

    UploadArray.push(uploadPartDetails);
  }

  console.log(UploadArray);

  // 청크 업로드가 완료되면 서버에 업로드 완료 요청 실행
  // 업로드 아이디랑 part번호에 해당하는 Etag를 가진 parts도 같이 요청
  await axios({
    baseURL: api_url,
    url: "/complete-upload",
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    fileName: newFilename,
    parts: UploadArray,
    uploadId: uploadId,
  })
    .then((res) => {
      let end = new Date();
      console.log("파일 업로드에 걸린 시간 : " + (end - start) + "ms");
      console.log(res.data, "업로드 완료 응답");
      setStep("DETAILS");
    })
    .catch((err) => {
      console.error(err);
    });
};
