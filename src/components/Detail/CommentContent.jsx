import React, { useState } from "react";

import "./CommentContent.scss";

import Img from "../../assets/test.jpg";

const CommentContent = () => {
  const [more, setMore] = useState(false);

  const onMoreClick = () => {
    setMore(!more);
  };

  return (
    <div id="contents" className="wtd-item-section">
      <wtd-comment-thread-render class="wtd-item-section">
        <wtd-comment-render id="comment" class="wtd-comment-thread-render">
          <div id="body" className="wtd-comment-render">
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
            </div>
          </div>
        </wtd-comment-render>
      </wtd-comment-thread-render>
    </div>
  );
};

export default CommentContent;
