import React from "react";
import Image from "../../assets/test.jpg";

import Categorybar from "../Categorybar/Categorybar";
const Content2 = () => {
  return (
    <wt-grid-render style={{ "--wt-grid-item-row": "4" }}>
      <Categorybar />
      <div id="contents" className="wt-grid-render">
        <wt-grid-row class="wt-grid-render">
          <div id="contents" className="wt-grid-row">
            <wt-item-render class="wt-grid-row">
              <div id="content" className="wt-item-render">
                <wt-grid-media class="wt-item-render">
                  <div id="dismissible" className="wt-grid-media">
                    <wtd-thumbnail class="wt-grid-media">
                      <a
                        id="thumbnail"
                        className="wt-simple-endpoint wtd-thumbnail"
                        href="/detail"
                      >
                        <wt-image class="wtd-thumbnail">
                          <img
                            className="wtd-thumbnail"
                            alt="thumbnail"
                            src={Image}
                          />
                        </wt-image>
                        <div id="overlays" className="wtd-thumbnail">
                            <wtd-thumbnail-overlay-progress-render class="wtd-thumbnail">
                               <div id="progress" className="wtd-thumbnail-overlay-progress-render" style={{width: "10%"}}/> 
                            </wtd-thumbnail-overlay-progress-render>
                            <wtd-thumbnial-overlay-time-status-render class="wtd-thumbnail">
                                
                            </wtd-thumbnial-overlay-time-status-render>
                        </div>
                      </a>
                    </wtd-thumbnail>
                  </div>
                </wt-grid-media>
              </div>
            </wt-item-render>
          </div>
        </wt-grid-row>
      </div>
    </wt-grid-render>
  );
};

export default Content2;
