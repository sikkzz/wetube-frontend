import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Categorybar from "../../components/Categorybar/Categorybar";
import Content from '../../components/Content/Content'
import Content2 from "../../components/Content/Content2";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <Categorybar /> */}
      <Content2 />
    </>
  );
};

export default LandingPage;
