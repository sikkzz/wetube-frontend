import React from "react";

import Image from "../../assets/test.jpg";

const HeaderSearchResults = () => {
  return (
    <div id="results" className="results-ready wt-st-search">
      <div id="results-header" className="wt-st-search">
        <span>내 최근 동영상</span>
      </div>
      <ul>
        <li className="wt-st-search">
          <a className="entity-link wt-st-search" href="#!">
            <wt-video-row class="wt-st-search">
              <div id="row-container" className="wt-video-row">
                <div
                  role="cell"
                  className="cell-body wt-video-row"
                  style={{
                    minWidth: "300px",
                    paddingLeft: "24px",
                    paddingRight: "12px",
                    flex: "1 0 300px",
                  }}
                >
                  <wt-video-list-cell class="wt-video-row" show-hover-items>
                    <div id="video-thumbnail" className="wt-video-list-cell">
                      <div
                        id="video-thumbnail-container"
                        className="draft-thumbnail wt-video-list-cell"
                      >
                        <wt-thumbnail class="wt-video-list-cell">
                          <div className="container wt-thumbnail">
                            <wt-img-with-fallback rounded class="wt-thumbnail">
                              <div className="container wt-img-with-fallback">
                                <img
                                  id="img-with-fallback"
                                  className="wt-img-with-fallback"
                                  alt="동영상 이미지 미리보기"
                                  src={Image}
                                />
                              </div>
                            </wt-img-with-fallback>
                            <div className="timestamp wt-thumbnail">
                              <div className="label wt-thumbnail">0:10</div>
                            </div>
                          </div>
                        </wt-thumbnail>
                      </div>
                    </div>
                    <div className="right-section wt-video-list-cell">
                      <h3 className="video-title-wrapper wt-video-list-cell">
                        <a
                          id="video-title"
                          role="button"
                          className="wt-video-list-cell"
                          href="#!"
                        >
                          video
                        </a>
                      </h3>
                      <div className="video-under-title-wrapper wt-video-list-cell">
                        <div className="description placeholder wt-video-list-cell">
                          설명 추가
                        </div>
                      </div>
                    </div>
                  </wt-video-list-cell>
                </div>

                <div
                  role="cell"
                  className="cell-body tablecell-date wt-video-row"
                  style={{
                    minWidth: "100px",
                    paddingLeft: "12px",
                    paddingRight: "24px",
                    flex: "0 0 100px",
                  }}
                >
                  2022. 12. 19
                  <div className="cell-description wt-video-row">
                    업로드 날짜
                  </div>
                </div>
              </div>
            </wt-video-row>
          </a>
        </li>
        <li className="wt-st-search">
          <a className="entity-link wt-st-search" href="#!">
            <wt-video-row class="wt-st-search">
              <div id="row-container" className="wt-video-row">
                <div
                  role="cell"
                  className="cell-body wt-video-row"
                  style={{
                    minWidth: "300px",
                    paddingLeft: "24px",
                    paddingRight: "12px",
                    flex: "1 0 300px",
                  }}
                >
                  <wt-video-list-cell class="wt-video-row" show-hover-items>
                    <div id="video-thumbnail" className="wt-video-list-cell">
                      <div
                        id="video-thumbnail-container"
                        className="draft-thumbnail wt-video-list-cell"
                      >
                        <wt-thumbnail class="wt-video-list-cell">
                          <div className="container wt-thumbnail">
                            <wt-img-with-fallback rounded class="wt-thumbnail">
                              <div className="container wt-img-with-fallback">
                                <img
                                  id="img-with-fallback"
                                  className="wt-img-with-fallback"
                                  alt="동영상 이미지 미리보기"
                                  src={Image}
                                />
                              </div>
                            </wt-img-with-fallback>
                            <div className="timestamp wt-thumbnail">
                              <div className="label wt-thumbnail">0:10</div>
                            </div>
                          </div>
                        </wt-thumbnail>
                      </div>
                    </div>
                    <div className="right-section wt-video-list-cell">
                      <h3 className="video-title-wrapper wt-video-list-cell">
                        <a
                          id="video-title"
                          role="button"
                          className="wt-video-list-cell"
                          href="#!"
                        >
                          video
                        </a>
                      </h3>
                      <div className="video-under-title-wrapper wt-video-list-cell">
                        <div className="description placeholder wt-video-list-cell">
                          설명 추가
                        </div>
                      </div>
                    </div>
                  </wt-video-list-cell>
                </div>

                <div
                  role="cell"
                  className="cell-body tablecell-date wt-video-row"
                  style={{
                    minWidth: "100px",
                    paddingLeft: "12px",
                    paddingRight: "24px",
                    flex: "0 0 100px",
                  }}
                >
                  2022. 12. 19
                  <div className="cell-description wt-video-row">
                    업로드 날짜
                  </div>
                </div>
              </div>
            </wt-video-row>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderSearchResults;
