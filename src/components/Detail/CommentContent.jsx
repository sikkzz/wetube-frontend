import React, { useState } from "react";

import "./CommentContent.scss";

import Img from "../../assets/test.jpg";
import Icons from "../../constants/icon";
import CommentInput from "./CommentInput";

const CommentContent = () => {
  const [more, setMore] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [replyActive, setReplyActive] = useState(false);
  const [replySecondOpen, setReplySecondOpen] = useState(false);

  const onReplyClick = () => {
    setReplyActive(!replyActive);
  };

  const handleOnMouseOver = () => {
    setMenuHover(true);
  };

  const handleOnMouseOut = () => {
    setMenuHover(false);
  };

  const onMoreClick = () => {
    setMore(!more);
  };

  const onReplyOpen = () => {
    setReplyOpen(true);
  };

  const onSecondReplyOpen = () => {
    setReplySecondOpen(true);
  };

  return (
    <div id="contents" className="wtd-item-section">
      <wtd-comment-thread-render class="wtd-item-section">
        <wtd-comment-render id="comment" class="wtd-comment-thread-render">
          <div
            id="body"
            className="wtd-comment-render"
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}
          >
            <div id="author-thumbnail" className="wtd-comment-render">
              <a className="wtd-comment-render" href="#!">
                <wt-img-shadow class="wtd-comment-render">
                  <img
                    id="img"
                    className="wt-img-shadow"
                    alt="profile_img"
                    src={Img}
                  />
                </wt-img-shadow>
              </a>
            </div>
            <div id="main" className="wtd-comment-render">
              <div id="header" className="wtd-comment-render">
                <div id="header-author" className="wtd-comment-render">
                  <h3 className="wtd-comment-render">
                    <a
                      id="author-text"
                      className="wtd-comment-render"
                      href="#!"
                    >
                      <span className="wtd-comment-render">@user-김준식</span>
                    </a>
                  </h3>
                  <wt-formatted-string class="published-time-text wtd-comment-render">
                    <a className="wt-formatted-string" href="#!">
                      10개월 전(수정됨)
                    </a>
                  </wt-formatted-string>
                </div>
              </div>
              <div id="comment-content" className="wtd-comment-render">
                <wtd-expander id="expander" class="wtd-comment-render">
                  <div
                    id="content"
                    className="wtd-expander"
                    style={{ display: more ? "block" : "-webkit-box" }}
                  >
                    <wt-formatted-string
                      id="content-text"
                      class="wtd-comment-render"
                    >
                      <span>
                        이번 플리는 FLO (플로) 해외 팝 TOP 100곡 기준으로
                        제작되었습니다:)
                      </span>
                      <br />
                      <span>
                        FLO에서 [둘러보기] → [상황]에서 제 플리들을 만나보실 수
                        있어요
                      </span>
                      <br />
                      <span>
                        💙 광고제거 👉{" "}
                        <a id="tag" href="#!">
                          05:31:04
                        </a>{" "}
                        클릭 후 🔄 다시보기
                      </span>
                      <br />
                      <span>
                        [
                        <a id="tag" href="#!">
                          00:01
                        </a>
                        ] 1위 The Kid LAROI & Justin Bieber - STAY{" "}
                      </span>
                      <br />
                      <span>
                        [
                        <a id="tag" href="#!">
                          02:18
                        </a>
                        ] 2위 GAYLE - abcdefu{" "}
                      </span>
                      <br />
                      <span>
                        [
                        <a id="tag" href="#!">
                          05:05
                        </a>
                        ] 3위 GAYLE - abcdefu{" "}
                      </span>
                    </wt-formatted-string>
                  </div>
                  <wt-paper-button
                    id="less"
                    class="wtd-expander"
                    style={{ display: more ? "inline-block" : "none" }}
                    onClick={onMoreClick}
                  >
                    <span className="less-button wtd-comment-render">
                      간략히
                    </span>
                  </wt-paper-button>
                  <wt-paper-button
                    id="more"
                    class="wtd-expander"
                    style={{ display: more ? "none" : "inline-block" }}
                    onClick={onMoreClick}
                  >
                    <span className="more-button wtd-comment-render">
                      자세히 보기
                    </span>
                  </wt-paper-button>
                </wtd-expander>
              </div>
              <wtd-comment-action-button-render
                id="action-buttons"
                class="wtd-comment-render"
              >
                <div id="toolbar" className="wtd-comment-action-button-render">
                  <wtd-toggle-button-render
                    id="like-button"
                    class="wtd-comment-action-button-render"
                  >
                    <wt-button-shape>
                      <button className="wt-button-shape-next good-button">
                        <div className="wt-button-shape-next-icon">
                          <wt-icon>
                            <Icons.RiThumbUpLine size={22} color="#f1f1f1" />
                          </wt-icon>
                        </div>
                      </button>
                    </wt-button-shape>
                  </wtd-toggle-button-render>
                  <span
                    id="vote-count"
                    className="wtd-comment-action-button-render"
                  >
                    140
                  </span>
                  <wtd-toggle-button-render
                    id="dislike-button"
                    class="wtd-comment-action-button-render"
                  >
                    <wt-button-shape>
                      <button className="wt-button-shape-next bad-button">
                        <div className="wt-button-shape-next-icon">
                          <wt-icon>
                            <Icons.RiThumbDownLine size={22} color="#f1f1f1" />
                          </wt-icon>
                        </div>
                      </button>
                    </wt-button-shape>
                  </wtd-toggle-button-render>
                  <div
                    id="reply-button-end"
                    className="wtd-comment-action-button-render"
                  >
                    <wtd-button-render class="wtd-comment-action-button-render">
                      <wt-button-shape>
                        <button
                          className="wt-button-shape-next reply-button"
                          onClick={onReplyOpen}
                        >
                          <div className="cbox wt-button-shape">
                            <span>답글</span>
                          </div>
                        </button>
                      </wt-button-shape>
                    </wtd-button-render>
                  </div>
                </div>
                <div
                  id="reply-dialog"
                  className="wtd-comment-action-button-render"
                  style={{ display: replyOpen ? "block" : "none" }}
                >
                  <wtd-comment-reply-dialog-render
                    id="replybox"
                    class="wtd-comment-action-button-render"
                  >
                    <wtd-commentbox
                      id="commentbox"
                      class="wtd-comment-reply-dialog-render"
                    >
                      <div id="thumbnail-input-row" className="wtd-commentbox">
                        <CommentInput
                          reply={true}
                          setReplyOpen={setReplyOpen}
                        />
                      </div>
                    </wtd-commentbox>
                  </wtd-comment-reply-dialog-render>
                </div>
              </wtd-comment-action-button-render>
            </div>
            <div id="action-menu" className="wtd-comment-render">
              <wtd-menu-render class="wtd-comment-render">
                <wtd-icon-button id="button" class="wtd-menu-render">
                  <button
                    id="button"
                    className="wtd-icon-button"
                    style={{ display: menuHover ? "flex" : "none" }}
                  >
                    <wt-icon class="wtd-menu-render">
                      <Icons.AiOutlineMore size={24} color="#f1f1f1" />
                    </wt-icon>
                  </button>
                </wtd-icon-button>
              </wtd-menu-render>
            </div>
          </div>
        </wtd-comment-render>
        <div id="replies" className="wtd-comment-thread-render">
          <wtd-comment-replies-render class="wtd-comment-thread-render">
            <div id="expander" className="wtd-comment-replies-render">
              <div id="expander-header">
                <div className="more-button wtd-comment-replies-render">
                  <wt-button-render class="more-button wtd-comment-replies-render">
                    <wt-button-shape>
                      <button
                        className="wt-button-shape-next reply-more-button"
                        onClick={onReplyClick}
                      >
                        <div
                          id="reply-more"
                          className="wt-button-shape-next-icon"
                        >
                          <wt-icon>
                            {replyActive ? (
                              <Icons.AiFillCaretUp size={18} color="#3ea6ff" />
                            ) : (
                              <Icons.AiFillCaretDown
                                size={18}
                                color="#3ea6ff"
                              />
                            )}
                          </wt-icon>
                        </div>
                        <div className="cbox wt-button-shape">
                          <span>답글 42개</span>
                        </div>
                      </button>
                    </wt-button-shape>
                  </wt-button-render>
                </div>
              </div>
              <div
                id="expander-contents"
                style={{ display: replyActive ? "block" : "none" }}
              >
                <div id="contents" className="wtd-comment-replies-render">
                  <wtd-comment-render class="wtd-comment-replies-render">
                    <div id="body" className="wtd-comment-render">
                      <div id="author-thumbnail" className="wtd-comment-render">
                        <a className="wtd-comment-render" href="#!">
                          <wt-img-shadow class="wtd-comment-render reply">
                            <img
                              id="img"
                              className="wt-img-shadow"
                              alt="profile_img"
                              src={Img}
                            />
                          </wt-img-shadow>
                        </a>
                      </div>
                      <div id="main" className="wtd-comment-render">
                        <div id="header" className="wtd-comment-render">
                          <div
                            id="header-author"
                            className="wtd-comment-render"
                          >
                            <h3 className="wtd-comment-render">
                              <a
                                id="author-text"
                                className="wtd-comment-render"
                                href="#!"
                              >
                                <span className="wtd-comment-render">
                                  @user-김준식
                                </span>
                              </a>
                            </h3>
                            <wt-formatted-string class="published-time-text wtd-comment-render">
                              <a className="wt-formatted-string" href="#!">
                                10개월 전(수정됨)
                              </a>
                            </wt-formatted-string>
                          </div>
                        </div>
                        <div
                          id="comment-content"
                          className="wtd-comment-render"
                        >
                          <wtd-expander
                            id="expander"
                            class="wtd-comment-render"
                          >
                            <div
                              id="content"
                              className="wtd-expander"
                              style={{
                                display: more ? "block" : "-webkit-box",
                              }}
                            >
                              <wt-formatted-string
                                id="content-text"
                                class="wtd-comment-render"
                              >
                                <span>답글 테스트용</span>
                              </wt-formatted-string>
                            </div>
                          </wtd-expander>
                        </div>
                        <wtd-comment-action-button-render
                          id="action-buttons"
                          class="wtd-comment-render"
                        >
                          <div
                            id="toolbar"
                            className="wtd-comment-action-button-render"
                          >
                            <wtd-toggle-button-render
                              id="like-button"
                              class="wtd-comment-action-button-render"
                            >
                              <wt-button-shape>
                                <button className="wt-button-shape-next good-button">
                                  <div className="wt-button-shape-next-icon">
                                    <wt-icon>
                                      <Icons.RiThumbUpLine
                                        size={22}
                                        color="#f1f1f1"
                                      />
                                    </wt-icon>
                                  </div>
                                </button>
                              </wt-button-shape>
                            </wtd-toggle-button-render>
                            <span
                              id="vote-count"
                              className="wtd-comment-action-button-render"
                            >
                              140
                            </span>
                            <wtd-toggle-button-render
                              id="dislike-button"
                              class="wtd-comment-action-button-render"
                            >
                              <wt-button-shape>
                                <button className="wt-button-shape-next bad-button">
                                  <div className="wt-button-shape-next-icon">
                                    <wt-icon>
                                      <Icons.RiThumbDownLine
                                        size={22}
                                        color="#f1f1f1"
                                      />
                                    </wt-icon>
                                  </div>
                                </button>
                              </wt-button-shape>
                            </wtd-toggle-button-render>
                            <div
                              id="reply-button-end"
                              className="wtd-comment-action-button-render"
                            >
                              <wtd-button-render class="wtd-comment-action-button-render">
                                <wt-button-shape>
                                  <button
                                    className="wt-button-shape-next reply-button"
                                    onClick={onSecondReplyOpen}
                                  >
                                    <div className="cbox wt-button-shape">
                                      <span>답글</span>
                                    </div>
                                  </button>
                                </wt-button-shape>
                              </wtd-button-render>
                            </div>
                          </div>
                          <div
                            id="reply-dialog"
                            className="wtd-comment-action-button-render"
                            style={{
                              display: replySecondOpen ? "block" : "none",
                            }}
                          >
                            <wtd-comment-reply-dialog-render
                              id="replybox"
                              class="wtd-comment-action-button-render"
                            >
                              <wtd-commentbox
                                id="commentbox"
                                class="wtd-comment-reply-dialog-render"
                              >
                                <div
                                  id="thumbnail-input-row"
                                  className="wtd-commentbox"
                                >
                                  <CommentInput
                                    reply={true}
                                    setReplyOpen={setReplyOpen}
                                    setReplySecondOpen={setReplySecondOpen}
                                  />
                                </div>
                              </wtd-commentbox>
                            </wtd-comment-reply-dialog-render>
                          </div>
                        </wtd-comment-action-button-render>
                      </div>
                      <div id="action-menu" className="wtd-comment-render">
                        <wtd-menu-render class="wtd-comment-render">
                          <wtd-icon-button id="button" class="wtd-menu-render">
                            <button
                              id="button"
                              className="wtd-icon-button"
                              style={{ display: menuHover ? "flex" : "none" }}
                            >
                              <wt-icon class="wtd-menu-render">
                                <Icons.AiOutlineMore
                                  size={24}
                                  color="#f1f1f1"
                                />
                              </wt-icon>
                            </button>
                          </wtd-icon-button>
                        </wtd-menu-render>
                      </div>
                    </div>
                  </wtd-comment-render>
                </div>
              </div>
            </div>
          </wtd-comment-replies-render>
        </div>
      </wtd-comment-thread-render>
    </div>
  );
};

export default CommentContent;
