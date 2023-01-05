import React, { useState } from "react";

import "./Comment.scss";

import Icons from "../../constants/icon";

import CommentContent from "./CommentContent";
import CommentInput from "./CommentInput";

const Comment = () => {
  const [sortActive, setSortActive] = useState(false);

  const onSortClick = () => {
    setSortActive(!sortActive);
  };

  return (
    <wtd-comments id="comments" class="wtd-watch-flexy">
      <wtd-item-section id="sections" class="wtd-comments">
        <div id="header" className="wtd-item-section">
          <wtd-comments-header class="wtd-item-section">
            <div id="title" className="wtd-comments-header">
              <h2 id="count" className="wtd-comments-header">
                <wt-formatted-string class="count-text wtd-comments-header">
                  <span className="wt-formatted-string">댓글 152개</span>
                </wt-formatted-string>
              </h2>
              <span id="sort-menu" className="wtd-comments-header">
                <wt-dropdown-menu onClick={onSortClick}>
                  <wt-menu-button class="wt-dropdown-menu">
                    <div id="trigger" className="wt-menu-button">
                      <wt-paper-button id="label" class="wt-dropdown-menu">
                        <wt-icon id="label-icon" class="wt-dropdown-menu">
                          <Icons.MdOutlineSort size={28} />
                        </wt-icon>
                        <div id="icon-label" className="wt-dropdown-menu">
                          정렬 기준
                        </div>
                      </wt-paper-button>
                    </div>
                    <wt-iron-dropdown
                      id="dropdown"
                      class="wt-menu-button"
                      style={{ display: sortActive ? "block" : "none" }}
                    >
                      <div id="contentWrapper" className="wt-iron-dropdown">
                        <div className="dropdown-content wt-menu-button">
                          <wt-listbox
                            id="menu"
                            class="dropdown-content wt-dropdown-menu"
                          >
                            <a
                              className="wt-dropdown-menu iron-selected"
                              href="#!"
                            >
                              <wt-paper-item class="wt-dropdown-menu">
                                <wt-paper-item-body class="wt-dropdown-menu">
                                  <div className="item wt-dropdown-menu">
                                    인기 댓글순
                                  </div>
                                </wt-paper-item-body>
                              </wt-paper-item>
                            </a>
                            <a className="wt-dropdown-menu" href="#!">
                              <wt-paper-item class="wt-dropdown-menu">
                                <wt-paper-item-body class="wt-dropdown-menu">
                                  <div className="item wt-dropdown-menu">
                                    최신순
                                  </div>
                                </wt-paper-item-body>
                              </wt-paper-item>
                            </a>
                          </wt-listbox>
                        </div>
                      </div>
                    </wt-iron-dropdown>
                  </wt-menu-button>
                </wt-dropdown-menu>
              </span>
            </div>
            <div id="simple-box" className="wtd-comments-header">
              <wtd-comment-simplebox-render class="wtd-comments-header">
                <CommentInput reply={false} />
              </wtd-comment-simplebox-render>
            </div>
          </wtd-comments-header>
        </div>
        <CommentContent />
      </wtd-item-section>
    </wtd-comments>
  );
};

export default Comment;
