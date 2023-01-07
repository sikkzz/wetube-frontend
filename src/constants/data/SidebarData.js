import React from "react";
import Icons from "../icon";

const size = 22;

export const SidebarData = [
  {
    icon: <Icons.AiOutlineHome size={size} />,
    title: "홈",
    link: "/",
  },
  {
    icon: <Icons.ImPlay2 size={size} />,
    title: "Shorts",
    link: "/shorts",
  },
  {
    icon: <Icons.BsFillCollectionPlayFill size={size} />,
    title: "구독",
  },
];

export const SidebarData2 = [
  {
    icon: <Icons.MdOutlineVideoLibrary size={size} />,
    title: "보관함",
  },
  {
    icon: <Icons.BsArrowCounterclockwise size={size} />,
    title: "시청 기록",
  },
  {
    icon: <Icons.RiVideoLine size={size} />,
    title: "내 동영상",
  },
  {
    icon: <Icons.AiOutlineClockCircle size={size} />,
    title: "나중에 볼 동영상",
  },
  {
    icon: <Icons.AiOutlineLike size={size} />,
    title: "좋아요 표시한 동영상",
  },
];
