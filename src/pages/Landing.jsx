import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Categorybar from "../components/Categorybar/Categorybar";
import Content from "../components/Content/Content";


import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <div className="containers">
        <div className="headers_container">
          <Header />
        </div>
        <div className="contents_container">
          <div className="sidebars_container">
            <Sidebar />
          </div>
          <div className="mains_container">
            <div className="categorys_container">
              <Categorybar />
            </div>
            <div className="details_container">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
