import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Categorybar from "../../components/Categorybar/Categorybar";
import Content from "../../components/Content/Content";


import "./Landing.scss";

const Landing = () => {
  return (
    <>
      <div className="landing_containers">
        <div className="headers_container">
          <Header />
        </div>
        <div className="landing_contents_container">
          <div className="landing_sidebars_container">
            <Sidebar />
          </div>
          <div className="landing_mains_container">
            <div className="landing_categorys_container">
              <Categorybar />
            </div>
            <div className="landing_details_container">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
