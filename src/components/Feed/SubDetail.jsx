import React from "react";

const SubDetail = () => {
  return (
    <div id="details" className="wtd-grid-video-render">
      <div id="meta" className="wtd-grid-video-render">
        <h3 className="wtd-grid-video-render">
          <a id="video-title" className="wtd-grid-video-render" href="#!">
            2022년 사랑받은 인기팝송 100곡 모두 해석해버리기 | PLAYLIST
          </a>
        </h3>
        <div id="metadata-container" className="wtd-grid-video-render">
          <div id="metadata" className="wtd-grid-video-render">
            <div id="byline-container" className="wtd-grid-video-render">
              <wtd-channel-name id="channel-name" class="wtd-grid-video-render">
                <wt-formatted-string id="text" class="wtd-channel-name">
                  <a className="wt-formatted-string" href="#!">
                    H녀
                  </a>
                </wt-formatted-string>
              </wtd-channel-name>
            </div>
            <div id="metadata-line" className="wtd-grid-video-render">
              <span className="wtd-grid-video-render">조회수 22만회</span>
              <span className="wtd-grid-video-render">10일 전</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDetail;
