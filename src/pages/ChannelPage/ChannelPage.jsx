import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChannelContent from "../../components/ChannelContent/ChannelContent";

const ChannelPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <ChannelContent />
    </>
  );
};

export default ChannelPage;
