import React from "react";
import StudioHeader from "../../components/Header/StudioHeader";
import StudioSidebar from "../../components/Sidebar/StudioSidebar";

import StudioContent from "../../components/StudioContent/StudioContent";
import StudioDashboard from "../../components/StudioContent/StudioDashboard";

const StudioPage = () => {
  return (
    <>
      <StudioHeader />
      <StudioContent />
    </>
  );
};

export default StudioPage;
