import React, { useState } from "react";

import Icons from "../../constants/icon";

const SidebarListSubItem = () => {
  const [sideHover, setSideHover] = useState(false);

  const onSideMoreClick = () => {
    setSideHover(true);
  };

  const onSideLessClick = () => {
    setSideHover(false);
  };
  return (
    <wtd-guide-col-entry-render class="wtd-guide-section-entry-render">
      <wtd-guide-entry-render
        id="expander-item"
        class="wtd-guide-col-entry-render"
        onClick={onSideMoreClick}
        style={{ display: sideHover ? "none" : "block" }}
      >
        <a id="endpoint" className="wtd-guide-entry-render" href="#!">
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
      <div id="expanded" className="wtd-guide-col-entry-render">
        <div
          id="expandable-items"
          className="wtd-guide-col-entry-render"
          style={{ display: sideHover ? "block" : "none" }}
        >
          <wtd-guide-entry-render
            id="expander-item"
            class="wtd-guide-col-entry-render"
          >
            <a id="endpoint" className="wtd-guide-entry-render" href="#!">
              <wt-paper-item class="wtd-guide-entry-render">
                <wt-icon class="guide-icon wtd-guide-entry-render">
                  <Icons.RiPlayList2Fill size={22} color="#fff" />
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
            <a id="endpoint" className="wtd-guide-entry-render" href="#!">
              <wt-paper-item class="wtd-guide-entry-render">
                <wt-icon class="guide-icon wtd-guide-entry-render">
                  <Icons.RiPlayList2Fill size={22} color="#fff" />
                </wt-icon>
                <wt-formatted-string class="title wtd-guide-entry-render">
                  나중에 보기로 한 동영상
                </wt-formatted-string>
              </wt-paper-item>
            </a>
          </wtd-guide-entry-render>
        </div>

        <wtd-guide-entry-render
          id="col-item"
          class="wtd-guide-col-entry-render"
          onClick={onSideLessClick}
          style={{ display: sideHover ? "block" : "none" }}
        >
          <a id="endpoint" className="wtd-guide-entry-render" href="#!">
            <wt-paper-item class="wtd-guide-entry-render">
              <wt-icon class="guide-icon wtd-guide-entry-render">
                <Icons.HiChevronUp size={26} color="#fff" />
              </wt-icon>
              <wt-formatted-string class="title wtd-guide-entry-render">
                간략히 보기
              </wt-formatted-string>
            </wt-paper-item>
          </a>
        </wtd-guide-entry-render>
      </div>
    </wtd-guide-col-entry-render>
  );
};

export default SidebarListSubItem;
