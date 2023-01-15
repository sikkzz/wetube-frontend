import testimages from "../../assets/test2.jpg";
import Icons from "../../constants/icon";

export const StudioDashboardData = {
  analysisdata: [
    { title: "조회수 순위", analysis: "3/10", emoticon: <Icons.MdNavigateNext/> },
    { title: "조회수", analysis: "557", emoticon: <Icons.AiOutlineCheckCircle/> },
    { title: "노출 클릭률", analysis: "5.1%", emoticon: <Icons.AiOutlineCheckCircle/>},
    { title: "평균 시청 지속 시간", analysis: "1:20", emoticon: <Icons.BsArrowDownCircleFill/> },
  ],

  releasedData: [
    {
      title: "찬우의 Vlog",
      view: 254,
      reivew: 254,
      good: 22,
      image: testimages,
    },
    { title: "은서의 Vlog", view: 154, reivew: 4, good: 20, image: testimages },
    { title: "은진의 Vlog", view: 5, reivew: 2, good: 12, image: testimages },
    { title: "준식의 Vlog", view: 2, reivew: 3, good: 52, image: testimages },
  ],

  ChannelAnalysis: {
    subscribeData: {
      member: 5000,
      increase: 25,
    },
    summary: [
      { title: "조회수", analysis: "2.5천", emoticon: "✔️" },
      { title: "시청시간(단위:시간)", analysis: "98.5", emoticon: "🔽" },
      { title: "예상수익", analysis: "3.20", emoticon: "⏹️" },
    ],
    popularVideos: [
      { title: "은서의 vlog", analysis: "96" },
      { title: "찬우의 vlog", analysis: "26" },
      { title: "준식의 vlog", analysis: "18" },
    ],
  },

  RecentReveiw: [
    {
      profileImg: testimages,
      nickname: "은서",
      month: "2",
      reivew:
        "너무나 예쁜 브이로그에요 행복한 브이로그 앞으로도 많이 만들어줘요",
      Ssunail: testimages,
    },
    {
      profileImg: testimages,
      nickname: "차누",
      month: "5",
      reivew: "필요한 정보너무감사합니다",
      Ssunail: testimages,
    },
    {
      profileImg: testimages,
      nickname: "재민",
      month: "7",
      reivew: "오늘부터 구독할게요",
      Ssunail: testimages,
    },
    {
      profileImg: testimages,
      nickname: "준식",
      month: "10",
      reivew: "확실히 제대로 알게되네요",
      Ssunail: testimages,
    },
  ],

  recentSubscribe: [
    { profileImg: testimages, nickname: "은서", subtotal: "50" },
    { profileImg: testimages, nickname: "차누", subtotal: "50" },
    { profileImg: testimages, nickname: "재민", subtotal: "70" },
    { profileImg: testimages, nickname: "준식", subtotal: "100" },
  ],
};
