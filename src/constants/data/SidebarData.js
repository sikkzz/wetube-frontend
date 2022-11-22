import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { RiPlayList2Fill } from "react-icons/ri";

const size = 20

export const SidebarData1 = [
  {
    icon: <AiOutlineHome size={size} />,
    title: "홈",
  },
  {
    icon: <ImPlay2 size={size} />,
    title: "Shorts",
  },
  {
    icon: <BsFillCollectionPlayFill size={size} />,
    title: "구독",
  },
];

export const SidebarData2 = [
  {
    icon: <MdOutlineVideoLibrary size={size} />,
    title: "보관함",
  },
  {
    icon: <BsArrowCounterclockwise size={size} />,
    title: "시청 기록",
  },
  {
    icon: <RiVideoLine size={size} />,
    title: "내 동영상",
  },
  {
    icon: <AiOutlineClockCircle size={size} />,
    title: "나중에 볼 동영상",
  },
  {
    icon: <AiOutlineLike size={24} />,
    title: "좋아요 표시한 동영상",
  },
  {
    icon: <RiPlayList2Fill size={24} />,
    title: "나중에 보기로 한 동영상 모음",
  },
];
