import React from "react";

const SidebarListItem = ({ title, icon, link }) => {
  return (
    <wtd-guide-entry-render class="wtd-guide-section-render">
      <a id="endpoint" className="wtd-guide-entry-render" href={link}>
        <wt-paper-item class="wtd-guide-entry-render">
          <wt-icon class="guide-icon wtd-guide-entry-render">{icon}</wt-icon>
          <wt-formatted-string class="title wtd-guide-entry-render">
            {title}
          </wt-formatted-string>
        </wt-paper-item>
      </a>
    </wtd-guide-entry-render>
  );
};

export default SidebarListItem;
