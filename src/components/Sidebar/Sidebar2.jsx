import React from "react";

import "./Sidebar2.scss";

import Icons from "../../constants/icon";

import { SidebarData, SidebarData2 } from "../../constants/data/SidebarData";

const Sidebar2 = () => {
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
                    {SidebarData.map((item, index) => (
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
                              {item.icon}
                            </wt-icon>
                            <wt-formatted-string class="title wtd-guide-entry-render">
                              {item.title}
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
                      {SidebarData2.map((item, index) => (
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
                                {item.icon}
                              </wt-icon>
                              <wt-formatted-string class="title wtd-guide-entry-render">
                                {item.title}
                              </wt-formatted-string>
                            </wt-paper-item>
                          </a>
                        </wtd-guide-entry-render>
                      ))}

                      {/* </div> */}

                      <wtd-guide-col-entry-render class="wtd-guide-section-entry-render">
                        <wtd-guide-entry-render
                          id="expander-item"
                          class="wtd-guide-col-entry-render"
                        >
                          <a id="endpoint" className="wtd-guide-entry-render">
                            <wt-paper-item class="wtd-guide-entry-render">
                              <wt-icon class="guide-icon wtd-guide-entry-render">
                                <Icons.HiChevronDown size={26} color="#fff" />
                              </wt-icon>
                              <wt-formatted-string class="title wtd-guide-entry-render">
                                더보기
                              </wt-formatted-string>
                            </wt-paper-item>
                          </a>
                        </wtd-guide-entry-render>
                        <div
                          id="expanded"
                          className="wtd-guide-col-entry-render"
                        >
                          <div
                            id="expandable-items"
                            className="wtd-guide-col-entry-render"
                          >
                            <wtd-guide-entry-render
                              id="expander-item"
                              class="wtd-guide-col-entry-render"
                            >
                              <a
                                id="endpoint"
                                className="wtd-guide-entry-render"
                              >
                                <wt-paper-item class="wtd-guide-entry-render">
                                  <wt-icon class="guide-icon wtd-guide-entry-render">
                                    <Icons.RiPlayList2Fill
                                      size={22}
                                      color="#fff"
                                    />
                                  </wt-icon>
                                  <wt-formatted-string class="title wtd-guide-entry-render">
                                    Playlist 노래모음
                                  </wt-formatted-string>
                                </wt-paper-item>
                              </a>
                            </wtd-guide-entry-render>
                            <wtd-guide-entry-render
                              id="expander-item"
                              class="wtd-guide-col-entry-render"
                            >
                              <a
                                id="endpoint"
                                className="wtd-guide-entry-render"
                              >
                                <wt-paper-item class="wtd-guide-entry-render">
                                  <wt-icon class="guide-icon wtd-guide-entry-render">
                                    <Icons.RiPlayList2Fill
                                      size={22}
                                      color="#fff"
                                    />
                                  </wt-icon>
                                  <wt-formatted-string class="title wtd-guide-entry-render">
                                    나중에 보기로 한 동영상
                                  </wt-formatted-string>
                                </wt-paper-item>
                              </a>
                            </wtd-guide-entry-render>
                          </div>
                        </div>
                      </wtd-guide-col-entry-render>
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
