import React, { useState } from "react";
import "./StudioContent.scss";

import StudioSidebar from "../Sidebar/StudioSidebar";
import StudioInnerContent from "./StudioInnerContent";
import StudioDashboard from "./StudioDashboard";

const StudioContent = () => {
  const [renderLayout, setRenderLayout] = useState("dashboard");

  console.log(renderLayout);

  return (
    <>
      <div className="nav-and-main-content">
        <StudioSidebar setRenderLayout={setRenderLayout} />
        {
          {
            dashboard: <StudioDashboard />,
            contents: <StudioInnerContent />,
          }[renderLayout]
        }
      </div>
    </>
  );
};

export default StudioContent;
