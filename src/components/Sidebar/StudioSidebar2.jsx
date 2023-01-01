import React from "react";
import Img from "../../assets/test2.jpg";

import Icons from "../../constants/icon";

import { StudioSidebarData } from "../../constants/data/StudioSidebarData";

const StudioSidebar2 = () => {
  return (
    <wt-side-st class="wt-page">
      <nav id="left-nav" className="wt-side-st">
        <div className="thumbnail-wrapper thumbnail-wrapper-channel wt-side-st">
          <wt-overlay-with-link class="image-thumbnail thumbnail-overlay wt-side-st">
            <div className="overlay-container wt-overlay-with-link">
              <div className="grey-overlay wt-overlay-with-link" />
              <div className="overlay-with-link wt-overlay-with-link">
                <a
                  href="#!"
                  id="overlay-link-to-youtube"
                  className="overlay-link wt-overlay-with-link"
                >
                  <wt-icon-button
                    id="overlay-icon"
                    overlay
                    class="wt-overlay-with-link"
                    role="button"
                  >
                    <wt-iron-icon class="wt-icon-button">
                      <Icons.BsBoxArrowUpRight size={24} color="#fff" />
                    </wt-iron-icon>
                  </wt-icon-button>
                </a>
              </div>
            </div>
          </wt-overlay-with-link>
          <img
            className="thumbnail image-thumbnail wt-side-st"
            alt="사용자"
            src={Img}
          />
          <div id="entity-label-container" className="wt-side-st">
            <div id="entity-type" className="entity-type wt-side-st">
              내 채널
            </div>
            <div id="entity-name" className="entity-name wt-side-st">
              김준식
            </div>
          </div>
        </div>
        <wt-animatable class="top-section wt-side-st">
          <ul id="main-menu" className="wt-side-st">
            {/* <li className="wt-side-st">
              <a className="menu-item-link wt-side-st" href="#!">
                <wt-icon-item
                  role="button"
                  class="dashboard iron-selected wt-side-st"
                >
                  <div id="contentIcon" className="content-icon wt-icon-item">
                    <wt-iron-icon class="wt-side-st">
                      <Icons.RiDashboardLine size={24} />
                    </wt-iron-icon>
                  </div>
                  <div className="nav-item-text wt-side-st">
                    대시보드
                  </div>
                </wt-icon-item>
              </a>
            </li> */}

            {StudioSidebarData.map((item, index) => (
              <li className="wt-side-st" key={index}>
                <a className="menu-item-link wt-side-st" href="#!">
                  <wt-icon-item role="button" class="dashboard wt-side-st">
                    <div id="contentIcon" className="content-icon wt-icon-item">
                      <wt-iron-icon class="wt-side-st">
                        {item.icon}
                      </wt-iron-icon>
                    </div>
                    <div className="nav-item-text wt-side-st">{item.title}</div>
                  </wt-icon-item>
                </a>
              </li>
            ))}
          </ul>
        </wt-animatable>
      </nav>
    </wt-side-st>
  );
};

export default StudioSidebar2;
