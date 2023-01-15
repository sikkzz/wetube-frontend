import React from "react";
import StudioHeader from "../../components/Header/StudioHeader";
import StudioSidebar from "../../components/Sidebar/StudioSidebar";
import StudioDashboard from "../../components/StudioContent/StudioDashboard";
import StudioContent from "../../components/StudioContent/StudioContent";

const StudioPage = () => {
  return (
    <>
      <StudioHeader />
      <StudioSidebar />
      {/* <StudioDashboard /> */}
      <StudioContent />
    </>
  );
};

export default StudioPage;
