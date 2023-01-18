import React from "react";

import Img from "../../assets/test.jpg";

const SubThumbnail = () => {
  return (
    <wtd-thumbnail class="wtd-grid-video-render">
      <a id="thumbnail" className="wtd-thumbnail medium" href="#!">
        <wt-image>
          <img id="img" className="wt-image" src={Img} alt="thumbnail" />
        </wt-image>
      </a>
    </wtd-thumbnail>
  );
};

export default SubThumbnail;
