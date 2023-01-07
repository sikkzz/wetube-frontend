import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sidebar3 from "../../components/Sidebar/Sidebar3";
import Content from '../../components/Content/Content'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Sidebar3 />
      <Content />
    </>
  );
};

export default LandingPage;
