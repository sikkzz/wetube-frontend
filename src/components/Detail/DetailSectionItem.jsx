import React from "react";

import DetailSectionItemVideo from "./DetailSectionItemVideo";

const DetailSectionItem = () => {
  return (
    <wtd-item-section-render class="wtd-watch-secondary-result-render">
      <div id="contents" className="wtd-item-section-render">
        <DetailSectionItemVideo />
        <DetailSectionItemVideo />
      </div>
    </wtd-item-section-render>
  );
};

export default DetailSectionItem;
