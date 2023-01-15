import React from "react";

import {
  SidebarData,
  SidebarData2,
  SidebarData3,
  SidebarData4,
  SidebarData5,
} from "../../constants/data/SidebarData";

import SidebarListItem from "./SidebarListItem";
import SidebarListSubItem from "./SidebarListSubItem";

const SidebarList = ({ sidebarTitle }) => {
  return (
    <wtd-guide-section-render class="wtd-guide-render">
      <h3
        className="wtd-guide-section-render"
        style={{
          display:
            sidebarTitle === "타이틀" || sidebarTitle === "옵션"
              ? "none"
              : "block",
        }}
      >
        <wt-formatted-string
          id="guide-section-title"
          class="wtd-guide-section-render"
        >
          {sidebarTitle}
        </wt-formatted-string>
      </h3>
      <div id="items" className="wtd-guide-section-render">
        {
          {
            타이틀: (
              <>
                {SidebarData.map((item, index) => (
                  <SidebarListItem
                    title={item.title}
                    icon={item.icon}
                    link={item.link}
                    key={index}
                  />
                ))}

                <wtd-guide-section-entry-render class="wtd-guide-section-render">
                  {SidebarData2.map((item, index) => (
                    <SidebarListItem
                      title={item.title}
                      icon={item.icon}
                      key={index}
                    />
                  ))}

                  <SidebarListSubItem />
                </wtd-guide-section-entry-render>
              </>
            ),
            구독: (
              <>
                {SidebarData3.map((item, index) => (
                  <SidebarListItem
                    title={item.title}
                    icon={item.icon}
                    key={index}
                  />
                ))}
              </>
            ),
            탐색: (
              <>
                {SidebarData4.map((item, index) => (
                  <SidebarListItem
                    title={item.title}
                    icon={item.icon}
                    key={index}
                  />
                ))}
              </>
            ),
            옵션: (
              <>
                {SidebarData5.map((item, index) => (
                  <SidebarListItem
                    title={item.title}
                    icon={item.icon}
                    key={index}
                  />
                ))}
              </>
            ),
          }[sidebarTitle]
        }
      </div>
    </wtd-guide-section-render>
  );
};

export default SidebarList;
