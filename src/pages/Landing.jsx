import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Categorybar from "../components/Categorybar/Categorybar";
import Content from "../components/Content/Content";

import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <div className="container">
        <div className="headers_container">
          <Header />
        </div>
        <div className="contents_container">
          <div className="sidebar_container">
            <Sidebar />
          </div>
          <div className="mains_container">
            <div className="category_container">
              <Categorybar />
            </div>
            <div className="detail_container">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
