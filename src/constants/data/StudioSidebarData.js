import React from "react";
import Icons from "../icon";

const size = 24;

export const StudioSidebarData = [
  {
    icon: <Icons.RiDashboardLine size={size} />,
    title: "대시보드",
    id: "dashboard",
  },
  {
    icon: <Icons.MdOutlineVideoLibrary size={size} />,
    title: "콘텐츠",
    id: "contents",
  },
  {
    icon: <Icons.MdOutlineAnalytics size={size} />,
    title: "분석",
    id: "analytics",
  },
  {
    icon: <Icons.MdOutlineInsertComment size={size} />,
    title: "댓글",
    id: "comments",
  },
  {
    icon: <Icons.FaRegKeyboard size={size} />,
    title: "자막",
    id: "translations",
  },
  {
    icon: <Icons.AiOutlineCopyrightCircle size={size} />,
    title: "저작권",
    id: "copyright",
  },
  {
    icon: <Icons.BiDollar size={size} />,
    title: "수익 창출",
    id: "monetization",
  },
  {
    icon: <Icons.HiOutlinePencil size={size} />,
    title: "맞춤설정",
    id: "editing",
  },
  {
    icon: <Icons.MdOutlineLibraryMusic size={size} />,
    title: "오디오 보관함",
    id: "music",
  },
];

export const StudioSidebarData2 = [
  {
    icon: <Icons.AiOutlineHome size={size} />,
    title: "설정",
  },
  {
    icon: <Icons.AiOutlineHome size={size} />,
    title: "의견 보내기",
  },
];
