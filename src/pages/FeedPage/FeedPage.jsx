import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import FeedChannel from "../../components/Feed/FeedChannel";
import FeedSubscription from "../../components/Feed/FeedSubscription";

const FeedPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <FeedChannel /> */}
      <FeedSubscription />
    </>
  );
};

export default FeedPage;
