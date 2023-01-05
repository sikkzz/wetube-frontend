import React, { useState } from "react";

import "./Comment.scss";

import Icons from "../../constants/icon";
import Img from "../../assets/test.jpg";

import CommentContent from "./CommentContent";

const Comment = () => {
  const [sortActive, setSortActive] = useState(false);
  const [inputActive, setInputActive] = useState(false);

  const onSortClick = () => {
    setSortActive(!sortActive);
  };

  const onInputClick = () => {
    setInputActive(true);
  };

  const onCancelClick = () => {
    setInputActive(false);
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
                <wt-img-shadow
                  id="author-thumbnail"
                  class="wtd-comment-simplebox-render"
                >
                  <img
                    id="img"
                    className="wt-img-shadow"
                    alt="author_profile"
                    src={Img}
                  />
                </wt-img-shadow>
                <div
                  id="placeholder-area"
                  className="wtd-comment-simplebox-render"
                >
                  <div id="input-box" className="wtd-comment-simplebox-render">
                    <form>
                      <input
                        type="text"
                        placeholder="댓글 추가..."
                        onClick={onInputClick}
                      />
                    </form>
                  </div>
                  <div
                    id="footer"
                    className="wtd-comment-simplebox-render"
                    style={{ display: inputActive ? "flex" : "none" }}
                  >
                    <div id="buttons" className="wtd-comment-simplebox-render">
                      <wtd-button-render
                        id="cancel-button"
                        class="wtd-comment-simplebox-render"
                      >
                        <wt-button-shape>
                          <button
                            className="wt-button-shape-next cancel-button"
                            onClick={onCancelClick}
                          >
                            <div className="cbox wt-button-shape">
                              <span>취소</span>
                            </div>
                          </button>
                        </wt-button-shape>
                      </wtd-button-render>
                      <wtd-button-render
                        id="submit-button"
                        class="wtd-comment-simplebox-render"
                      >
                        <wt-button-shape>
                          <button className="wt-button-shape-next submit-button">
                            <div className="cbox wt-button-shape">
                              <span>댓글</span>
                            </div>
                          </button>
                        </wt-button-shape>
                      </wtd-button-render>
                    </div>
                  </div>
                </div>
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
