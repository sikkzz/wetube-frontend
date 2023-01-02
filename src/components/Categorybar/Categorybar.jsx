import React, { useState } from "react";
import "./Categorybar.scss";
import { CategorybarData } from "../../constants/data/CategorybarData";

const Categorybar = () => {
  const [chip, setChip] = useState("전체");
  return (
    <>
      <div id="header" className="wt-grid-render">
        <wt-chip-bar class="wt-grid-render">
          <div id="chips-wrapper" className="wt-chip-bar">
            <div id="scroll-container" className="wt-chip-bar">
              <iron-selector id="chips" role="tablist" class="wt-chip-bar">
                {CategorybarData.map((item, index) => (
                  <wt-chip
                    class={`wt-chip-bar${
                      item.title === chip ? " selected" : ""
                    }`}
                    role="tab"
                    key={index}
                    onClick={() => {
                      setChip(item.title);
                    }}
                  >
                    <wt-formatted-string
                      id="text"
                      class="wt-chip"
                      ellipsis-style
                    >
                      {item.title}
                    </wt-formatted-string>
                  </wt-chip>
                ))}
              </iron-selector>
            </div>
          </div>
        </wt-chip-bar>
      </div>
    </>
  );
};

export default Categorybar;
