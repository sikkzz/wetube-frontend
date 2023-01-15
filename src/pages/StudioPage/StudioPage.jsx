import React from "react";
import StudioHeader from "../../components/Header/StudioHeader";
import StudioSidebar from "../../components/Sidebar/StudioSidebar";
import StudioDashbord from "../../components/StudioContent/StudioDashbord";
import StudioContent from "../../components/StudioContent/StudioContent"

const StudioPage = () => {
  return (
    <>
      <StudioHeader />
      <StudioSidebar />
      <StudioDashbord />
      {/* <StudioContent /> */}
      

    </>
  );
};

export default StudioPage;
