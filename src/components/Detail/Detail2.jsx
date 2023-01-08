import React from "react";

import "./Detail2.scss";
import DetailPrimary from "./DetailPrimary";
import DetailSecondary from "./DetailSecondary";

const Detail2 = () => {
  return (
    <wtd-watch-flexy class="wtd-page-manager">
      <div id="columns" className="wtd-watch-flexy">
        <DetailPrimary />
        <DetailSecondary />
      </div>
    </wtd-watch-flexy>
  );
};

export default Detail2;
