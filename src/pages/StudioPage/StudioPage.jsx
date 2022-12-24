import React from "react";
import StudioHeader from "../../components/Header/StudioHeader";
import StudioSidebar from "../../components/Sidebar/StudioSidebar";
import StudioContent from "../../components/StudioContent/StudioContent";

const StudioPage = () => {
  return (
    <>
      <StudioHeader />
      <StudioSidebar />
      <StudioContent />
    </>
  );
};

export default StudioPage;
