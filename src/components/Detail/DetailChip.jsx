import React, { useState } from "react";

import Icons from "../../constants/icon";

import { DetailChipData } from "../../constants/data/DetailData";

const DetailChip = () => {
  const [select, setSelect] = useState("모두");
  const [location, setLocation] = useState(0);

  const onPrevClick = () => {
    if (location < 100) {
      setLocation(0);
    } else {
      setLocation(location + 160);
    }
  };

  const onNextClick = () => {
    if (location < -100) {
      setLocation(-170);
    } else {
      setLocation(location - 160);
    }
  };

  return (
    <wtd-detail-chip-render class="wtd-watch-secondary-result-render">
      <div id="content" className="wtd-detail-chip-render">
        <wtd-chip-render>
          <div id="container" className="wtd-chip-render">
            <div id="left-arrow" className="wtd-chip-render">
              <div id="left-arrow-button" className="wtd-chip-render">
                <wtd-button-render class="wtd-chip-render">
                  <wt-button-shape>
                    <button
                      className="wt-button-shape-next prev-button"
                      onClick={onPrevClick}
                    >
                      <div className="wt-button-shape-next-icon">
                        <wt-icon>
                          <Icons.MdArrowBackIosNew size={24} color="#f1f1f1" />
                        </wt-icon>
                      </div>
                    </button>
                  </wt-button-shape>
                </wtd-button-render>
              </div>
            </div>
            <div id="scroll-container" className="wtd-chip-render">
              <iron-selector
                id="chips"
                class="wtd-chip-render"
                style={{ transform: `translateX(${location}px)` }}
              >
                {DetailChipData.map((item, index) => (
                  <wt-chip
                    class={`wtd-chip-render ${
                      item.title === select ? "wtd-chip-select" : ""
                    }`}
                    key={index}
                    onClick={() => {
                      setSelect(item.title);
                    }}
                  >
                    <wt-formatted-string
                      id="text"
                      class="wtd-chip"
                      ellipsis-style
                    >
                      {item.title}
                    </wt-formatted-string>
                  </wt-chip>
                ))}
              </iron-selector>
            </div>
            <div id="right-arrow" className="wtd-chip-render">
              <div id="right-arrow-button" className="wtd-chip-render">
                <wtd-button-render class="wtd-chip-render">
                  <wt-button-shape>
                    <button
                      className="wt-button-shape-next next-button"
                      onClick={onNextClick}
                    >
                      <div className="wt-button-shape-next-icon">
                        <wt-icon>
                          <Icons.MdArrowForwardIos size={24} color="#f1f1f1" />
                        </wt-icon>
                      </div>
                    </button>
                  </wt-button-shape>
                </wtd-button-render>
              </div>
            </div>
          </div>
        </wtd-chip-render>
      </div>
    </wtd-detail-chip-render>
  );
};

export default DetailChip;
