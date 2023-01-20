import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import FeedChannel from "../../components/Feed/FeedChannel";

const FeedChannelPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <FeedChannel />
    </>
  );
};

export default FeedChannelPage;
