import React from "react";

const FeedSubscriptionHeader = () => {
  return (
    <div className="grid-subheader wtd-self-render">
      <div id="title-container" className="wtd-self-render">
        <h2 className="wtd-self-render">
          <span id="title" className="wtd-self-render">
            오늘
          </span>
        </h2>
        <div id="spacer" className="wtd-self-render" />
        <div id="subscribe-button" className="wtd-self-render">
          <wtd-button-render class="wtd-self-render">
            <wt-button-shape>
              <a
                id="self-render"
                className="wt-button-shape-next"
                href="/feed/channel"
              >
                <div className="cbox wt-button-shape">
                  <span>채널 관리</span>
                </div>
              </a>
            </wt-button-shape>
          </wtd-button-render>
        </div>
      </div>
    </div>
  );
};

export default FeedSubscriptionHeader;
