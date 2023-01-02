import React from "react";
import "./Categorybar.scss";
import { CategorybarData } from "../../constants/data/CategorybarData";

const Categorybars = () => {
  return (
    <>
      <div id="header" className="wt-grid-renderer">
        <wt-chip-bar class="wt-grid-renderer">
          <div id="chips-wrapper" className="wt-chip-bar">
            <div id="scroll-container" className="wt-chip-bar">
              <iron-selector id="chips" role="tablist" class="wt-chip-bar">
                {CategorybarData.map((item, index) => (
                  <wt-chip class="wt-chip-bar" role="tab">
                    <wt-formatted-string id="text" class="wt-chip">
                      {item.title}
                    </wt-formatted-string>
                  </wt-chip>
                ))}
              </iron-selector>
            </div>
          </div>
        </wt-chip-bar>
      </div>

      {/* <wt-chips class="wt-chips">
        <div id="container" className="wt-chips">
          {CategorybarData.map((item, index) => (
            <wt-chips-wrapper class="wt-chips" key={index}>
              <div className="wt-chips-wrapper">{item.title}</div>
            </wt-chips-wrapper>
          ))}
        </div>
      </wt-chips> */}
    </>
  );
};

export default Categorybars;
