import React from "react";
import "./Categorybar.scss";
import { CategorybarData } from "../../constants/data/CategorybarData";

const Categorybars = () => {
  return (
    <>
      <wt-chips class="wt-chips">
        <div id="container" className="wt-chips">
          {CategorybarData.map((item, index) => (
            <wt-chips-wrapper class="wt-chips" key={index}>
              <div className="wt-chips-wrapper">{item.title}</div>
            </wt-chips-wrapper>
          ))}
        </div>
      </wt-chips>
    </>
  );
};

export default Categorybars;
