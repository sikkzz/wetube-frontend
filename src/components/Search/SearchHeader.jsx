import React from "react";

import Icons from "../../constants/icon";

const SearchHeader = () => {
  return (
    <div id="header-container">
      <div id="sub-menu">
        <wtd-search-sub-menu-render>
          <div id="filter-menu" className="wtd-search-sub-menu-render">
            <div id="container" className="wtd-search-sub-menu-render">
              <wtd-toggle-button-render class="wtd-search-sub-menu-render">
                <wt-button-shape>
                  <button className="wt-button-shape-next sort-button">
                    <div className="wt-button-shape-next-icon">
                      <wt-icon style={{ width: "24px", height: "24px" }}>
                        <Icons.BiSortDown color="#fff" size={24} />
                      </wt-icon>
                    </div>
                    <div className="cbox wt-button-shape">
                       <span>필터</span> 
                    </div>
                  </button>
                </wt-button-shape>
              </wtd-toggle-button-render>
            </div>
          </div>
        </wtd-search-sub-menu-render>
      </div>
    </div>
  );
};

export default SearchHeader;
