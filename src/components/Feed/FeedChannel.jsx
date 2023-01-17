import React from "react";

import FeedChannelRender from "./FeedChannelRender";

import "./Feed.scss";

const FeedChannel = () => {
  return (
    <wtd-section-list-render>
      <div id="contents" className="wtd-section-list-render">
        <wtd-item-section-render class="wtd-section-list-render">
          <div id="contents" className="wtd-item-section-render">
            <wtd-self-render class="wtd-item-section-render">
              <div id="dismissible" className="wtd-self-render">
                <div id="contents" className="wtd-self-render">
                  <wtd-expanded-self-contents-render class="wtd-self-render">
                    <div
                      id="grid-container"
                      className="wtd-expanded-self-contents-render"
                    >
                      <FeedChannelRender />
                      <FeedChannelRender />
                    </div>
                  </wtd-expanded-self-contents-render>
                </div>
              </div>
            </wtd-self-render>
          </div>
        </wtd-item-section-render>
      </div>
    </wtd-section-list-render>
  );
};

export default FeedChannel;
