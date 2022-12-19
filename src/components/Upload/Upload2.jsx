import React from "react";
import "./Upload2.scss";

import Icons from "../../constants/icon";

const Upload2 = () => {
  return (
    <>
      <wt-upload-dialog workflow-step="SELECT_FILES">
        <wt-dialog
          id="dialog"
          class="wt-upload-dialog"
          style-target="host"
          role="dialog"
          style={{
            outline: "none",
            zIndex: "2202",
            position: "fixed",
            top: "24px",
            left: "31.5px",
          }}
        >
            <div className="dialog-content wt-upload-dialog">
                
            </div>
        </wt-dialog>
      </wt-upload-dialog>
    </>
  );
};

export default Upload2;
