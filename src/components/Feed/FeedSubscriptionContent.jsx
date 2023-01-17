import React from "react";

import Img from "../../assets/test.jpg";

const FeedSubscriptionContent = () => {
  return (
    <div id="contents" className="wtd-self-render">
      <wtd-grid-render class="wtd-self-render">
        <div id="items" className="wtd-grid-render">
          <wtd-grid-video-render class="wtd-grid-render">
            <div id="dismissible" className="wtd-grid-video-render">
              <wtd-thumbnail class="wtd-grid-video-render">
                <a id="thumbnail" className="wtd-thumbnail medium" href="#!">
                  <wt-image>
                    <img
                      id="img"
                      className="wt-image"
                      src={Img}
                      alt="thumbnail"
                    />
                  </wt-image>
                </a>
              </wtd-thumbnail>
            </div>
          </wtd-grid-video-render>
        </div>
      </wtd-grid-render>
    </div>
  );
};

export default FeedSubscriptionContent;
