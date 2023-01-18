import React from "react";
import SubThumbnail from "./SubThumbnail";
import SubDetail from "./SubDetail";

const FeedSubscriptionContent = () => {
  return (
    <div id="contents" className="wtd-self-render">
      <wtd-grid-render class="wtd-self-render">
        <div id="items" className="wtd-grid-render">
          <wtd-grid-video-render class="wtd-grid-render">
            <div id="dismissible" className="wtd-grid-video-render">
              <SubThumbnail />
              <SubDetail />
            </div>
          </wtd-grid-video-render>
          <wtd-grid-video-render class="wtd-grid-render">
            <div id="dismissible" className="wtd-grid-video-render">
              <SubThumbnail />
              <SubDetail />
            </div>
          </wtd-grid-video-render>
          <wtd-grid-video-render class="wtd-grid-render">
            <div id="dismissible" className="wtd-grid-video-render">
              <SubThumbnail />
              <SubDetail />
            </div>
          </wtd-grid-video-render>
        </div>
      </wtd-grid-render>
    </div>
  );
};

export default FeedSubscriptionContent;
