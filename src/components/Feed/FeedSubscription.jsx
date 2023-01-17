import React from "react";

import "./FeedSubscription.scss";
import FeedSubscriptionContent from "./FeedSubscriptionContent";
import FeedSubscriptionHeader from "./FeedSubscriptionHeader";

const FeedSubscription = () => {
  return (
    <wtd-section-list-render>
      <div id="contents" className="wtd-section-list-render">
        <wtd-item-section-render class="wtd-section-list-render">
          <div id="contents" className="wtd-item-section-render">
            <wtd-self-render class="wtd-item-section-render">
              <div id="dismissible" className="wtd-self-render">
                <FeedSubscriptionHeader />
                <FeedSubscriptionContent />
              </div>
            </wtd-self-render>
          </div>
        </wtd-item-section-render>
      </div>
    </wtd-section-list-render>
  );
};

export default FeedSubscription;
