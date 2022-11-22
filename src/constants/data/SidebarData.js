import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { MdPlaylistPlay } from "react-icons/md";

export const SidebarData1 = [
  {
    icon: <AiOutlineHome size={24} />,
    title: "홈",
  },
  {
    icon: <ImPlay2 size={24} />,
    title: "Shorts",
  },
  {
    icon: <BsFillCollectionPlayFill size={24} />,
    title: "구독",
  },
];

export const SidebarData2 = [
  {
    icon: <MdOutlineVideoLibrary size={24} />,
    title: "보관함",
  },
  {
    icon: <BsArrowCounterclockwise size={24} />,
    title: "시청 기록",
  },
  {
    icon: <RiVideoLine size={24} />,
    title: "내 동영상",
  },
  {
    icon: <AiOutlineClockCircle size={24} />,
    title: "나중에 볼 동영상",
  },
  {
    icon: <AiOutlineLike size={24} />,
    title: "좋아요 표시한 동영상",
  },
  {
    icon: <MdPlaylistPlay size={24} />,
    title: "나중에 보기로 한 동영상 모음",
  },
];
