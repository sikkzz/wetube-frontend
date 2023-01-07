import React from "react";

import "./Sidebar2.scss";

import Icons from "../../constants/icon";

const Sidebar2 = () => {
  const count = [1, 2, 3];
  const count2 = [1, 2, 3, 4, 5];
  return (
    <div id="guide" className="wtd-app">
      <div id="guide-wrapper" className="wtd-app">
        <div id="guide-spacer" className="wtd-app" />
        <div id="guide-content" className="wtd-app">
          <div id="guide-inner-content" className="wtd-app">
            <wtd-guide-render id="guide-render" class="wtd-app">
              <div id="sections" className="wtd-guide-render">
                <wtd-guide-section-render class="wtd-guide-render">
                  <div id="items" className="wtd-guide-section-render">
                    {count.map((item, index) => (
                      <wtd-guide-entry-render
                        class="wtd-guide-section-render"
                        key={index}
                      >
                        <a
                          id="endpoint"
                          className="wtd-guide-entry-render"
                          href="/"
                        >
                          <wt-paper-item class="wtd-guide-entry-render">
                            <wt-icon class="guide-icon wtd-guide-entry-render">
                              <Icons.AiOutlineHome size={24} color="#fff" />
                            </wt-icon>
                            <wt-formatted-string class="title wtd-guide-entry-render">
                              홈
                            </wt-formatted-string>
                          </wt-paper-item>
                        </a>
                      </wtd-guide-entry-render>
                    ))}

                    <wtd-guide-section-entry-render class="wtd-guide-section-render">
                      {/* <div
                        id="header"
                        className="wtd-guide-section-entry-render"
                      > */}
                      {count2.map((item, index) => (
                        <wtd-guide-entry-render class="wtd-guide-section-render" key={index}>
                          <a
                            id="endpoint"
                            className="wtd-guide-entry-render"
                            href="/"
                          >
                            <wt-paper-item class="wtd-guide-entry-render">
                              <wt-icon class="guide-icon wtd-guide-entry-render">
                                <Icons.AiOutlineHome size={24} color="#fff" />
                              </wt-icon>
                              <wt-formatted-string class="title wtd-guide-entry-render">
                                홈
                              </wt-formatted-string>
                            </wt-paper-item>
                          </a>
                        </wtd-guide-entry-render>
                      ))}

                      {/* </div> */}
                    </wtd-guide-section-entry-render>
                  </div>
                </wtd-guide-section-render>
                <wtd-guide-section-render class="wtd-guide-render"></wtd-guide-section-render>
              </div>
            </wtd-guide-render>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
