import React from "react";

import "./Detail.scss";
import DetailPrimary from "./DetailPrimary";
import DetailSecondary from "./DetailSecondary";

const Detail = () => {
  return (
    <wtd-watch-flexy class="wtd-page-manager">
      <div id="columns" className="wtd-watch-flexy">
        <DetailPrimary />
        <DetailSecondary />
      </div>
    </wtd-watch-flexy>
  );
};

export default Detail;
