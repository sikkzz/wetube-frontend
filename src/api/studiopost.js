import axios from "axios";

function getVideoInfo(Id) {
  // axios 코드
  // const request = axios
  //   .get(`/api/post/${postId}`)
  //   .then((res) => res.data);

  const videoInfo = [
    {
      postId: 0,
      author: {
        userId: 0,
        username: "정찬우",
        profileUrl: "string",
      },
      title: "오늘 코딩을 한다.",
      content: "코틀린 코드를 짜보았다.",
      createdAt: "string",
      thumbnailImg: "string",
      view: 15,
      videoLength: 150,
      liked: true,
    },
    {
      postId: 1,
      author: {
        userId: 1,
        username: "김준식",
        profileUrl: "string",
      },
      title: "리액트를 공부하자",
      content: "리액트와 리덕스를 공부해야겠다.",
      createdAt: "string",
      thumbnailImg: "string",
      view: 500,
      videoLength: 30000,
      liked: true,
    },
  ];

  const data = videoInfo.find((item) => item.postId === Id);
  return data;
}

export { getVideoInfo };
