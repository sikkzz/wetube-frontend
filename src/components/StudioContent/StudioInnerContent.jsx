import "./StudioInnerContent.scss"
import Icons from "../../constants/icon";
import { useState } from "react";
import testimages from "../../assets/test2.jpg";

const StudioInnerContent = () => {
  const [select, selectSet] = useState(0);

  return (
    <>
      <div className="main">
        <div id="page-title-container" className="page-title-container">
          <h1 className="page-title">채널 콘텐츠</h1>
        </div>
        <div className="header" style={{ width: "1648px" }}>
          <div className="tabsContent">
            <div
              className={`tab-content ${select === 0 ? "active" : ""}`}
              onClick={() => selectSet(0)}
            >
              <span className="title">동영상</span>
              <span className={`selectionBar`}></span>
            </div>
            <div
              className={`tab-content ${select === 1 ? "active" : ""}`}
              onClick={() => selectSet(1)}
            >
              <span className="title">실시간 스트리밍</span>
              <span className={`selectionBar`}></span>
            </div>
            <div
              className={`tab-content ${select === 2 ? "active" : ""}`}
              onClick={() => selectSet(2)}
            >
              <span className="title">게시물</span>
              <span className={`selectionBar`}></span>
            </div>
            <div
              className={`tab-content ${select === 3 ? "active" : ""}`}
              onClick={() => selectSet(3)}
            >
              <span className="title">재생목록</span>
              <span className={`selectionBar`}></span>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="header">
            <div className="left-header">
              <div className="filer-icon">
                <Icons.VscListFilter
                  size={40}
                  style={{
                    padding: "8px",
                    margin: "4px 24px 4px 20px",
                    color: "#AAAAAA",
                  }}
                />
              </div>
              <div className="filter">
                <input type={"text"} placeholder="필터"></input>
              </div>
            </div>
            <div className="table-header">
              <div className="checkboxBox">
                <input className="checkbox" type={"Checkbox"}></input>
              </div>
              <div className="video">동영상</div>
              <div className="publicPrivate">공개 상태</div>
              <div className="profit">수익 창출</div>
              <div className="restriction">제한사항</div>
              <div className="date">날짜</div>
              <div className="view">조회수</div>
              <div className="review">댓글</div>
              <div className="good">좋아요(싫어요대비)</div>
            </div>
          </div>
          <div className="contentRow">
            <input className="checkbox" type={"Checkbox"} />
            <div className="video-cell">
              <div className="videoPart">
                <div className="video-thumnail">
                  <img className="thumnail" src={testimages} alt="thumbnail" />
                </div>
                <div className="right-section">
                  <h3 className="video-title">컴활 2급 필기 1과목 1강</h3>
                  <div className="video-description">
                    아름다운 세상의 이야기를 들어보세요. 정말 행복해줄수 있는
                    기억을 선사할거에요
                  </div>
                </div>
              </div>
            </div>

            <div className="cell1">
              <div>
                <div className="part">
                  <div className="icon">
                    <Icons.BsEye
                      size={20}
                      style={{
                        color: "green",
                      }}
                    />
                  </div>
                  <div>공개</div>
                </div>
              </div>
            </div>

            <div className="cell2">
              <div>
                <div className="part">
                  <div className="icon">
                    <Icons.MdAttachMoney
                      size={20}
                      style={{
                        color: "green",
                      }}
                    />
                  </div>
                  <div>사용</div>
                </div>
              </div>
            </div>

            <div className="cell3">
              <div>
                <div className="part">
                  <div>없음</div>
                </div>
              </div>
            </div>

            <div className="cell4">
              <div>2022. 6. 29</div>
              <div>게시 날짜</div>
            </div>

            <div className="cell5">
              <div>610</div>
            </div>

            <div className="cell6">
              <div>2</div>
            </div>
            <div className="cell7">
              <div>100%</div>
              <div>좋아요1개</div>
              <div>
                <progress
                  id="file"
                  max="100"
                  value="70"
                  style={{ width: `90px` }}
                >
                  {" "}
                  70%{" "}
                </progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioInnerContent;
