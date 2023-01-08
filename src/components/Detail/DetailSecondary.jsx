import React from "react";

import "./DetailSecondary.scss";
import DetailChip from "./DetailChip";
import DetailSectionItem from "./DetailSectionItem";

const DetailSecondary = () => {
  return (
    <div id="secondary" className="wtd-watch-flexy">
      <div id="secondary-inner" className="wtd-watch-flexy">
        <div id="relative" className="wtd-watch-flexy">
            <wtd-watch-secondary-result-render class="wtd-watch-flexy">
                <div id="items" className="wtd-watch-secondary-result-render">
                    <DetailChip />
                    <DetailSectionItem />
                </div>
            </wtd-watch-secondary-result-render>
        </div>
      </div>
    </div>
  );
};

export default DetailSecondary;
