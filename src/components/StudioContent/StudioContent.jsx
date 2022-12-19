import React from "react";
import "./StudioContent.scss";
import testimages from "../../assets/test2.jpg";

const StudioContent = () => {
  const analysisdata = [
    { title: "조회수 순위", analysis: "3/10", emoticon: "🔥" },
    { title: "조회수", analysis: "557", emoticon: "✔️" },
    { title: "노출 클릭률", analysis: "5.1%", emoticon: "✔️" },
    { title: "평균 시청 지속 시간", analysis: "1:20", emoticon: "🔽" },
  ];

  const releasedData = [
    {
      title: "찬우의 Vlog",
      view: 254,
      reivew: 254,
      good: 22,
      image: testimages,
    },
    { title: "은서의 Vlog", view: 154, reivew: 4, good: 20, image: testimages },
    { title: "은진의 Vlog", view: 5, reivew: 2, good: 12, image: testimages },
    { title: "준식의 Vlog", view: 2, reivew: 3, good: 52, image: testimages },
  ];

  const ChannelAnalysis = {
    subscribeData: {
      member: 5000,
      increase: 25,
    },
    summary: [
      { title: "조회수", analysis: "2.5천", emoticon: "✔️" },
      { title: "시청시간(단위:시간)", analysis: "98.5", emoticon: "🔽" },
      { title: "예상수익", analysis: "3.20", emoticon: "⏹️" },
    ],
    popularVideos: [
      { title: "은서의 vlog", analysis: "96" },
      { title: "찬우의 vlog", analysis: "26" },
      { title: "준식의 vlog", analysis: "18" },
    ],
  };

  const changeMenu = (e) => {
    const childsome = e.currentTarget.querySelector(".someout");
    const childsometurn = e.currentTarget.querySelector(".somehover");

    childsome.style.display = "none";
    childsometurn.style.display = "flex";
  };

  const retrunMenu = (e) => {
    const childsome = e.currentTarget.querySelector(".someout");
    const childsometurn = e.currentTarget.querySelector(".somehover");

    childsome.style.display = "flex";
    childsometurn.style.display = "none";
  };

  return (
    <>
      <div className="StudioMain_Container">
        <div className="StudioMain_Container_header">
          <div className="StudioMain_Container_header_name">채널 대시보드</div>
          <div className="StudioMain_Container_header_setting">
            <div className="setting Upload">🚀</div>
            <div className="setting Streming">🔼</div>
            <div className="setting correction">📌</div>
          </div>
        </div>
        <div className="analysis_container">
          <div className="analysis_column">
            <div className="card">
              <div class="recent_video card">
                <div className="recent_video_header">최신 동영상 실적</div>
                <div className="thumnail">
                  <img
                    src={testimages}
                    alt="이미지 없어"
                    className="thumnail_image"
                  ></img>
                </div>
                <div className="analysis_detail">
                  <div className="detail_low">
                    <div>일반적인 실적 대비 처음 165일 1시간</div>
                  </div>

                  {analysisdata.map((x) => {
                    return (
                      <div className="detail_low">
                        <div className="rank">{x.title}</div>
                        <div className="rank_detail">
                          <span>{x.analysis}</span>
                          <span>{x.emoticon}</span>
                        </div>
                      </div>
                    );
                  })}

                  <div className="detail_low_button">
                    <div className="button">
                      <a href="/">동영상 분석으로 이동</a>
                    </div>
                    <div className="button">
                      <a href="/">댓글보기(2)</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="released_video">
              <div className="card_header">게시된 동영상</div>
              <div className="video_column">
                {releasedData.map((x, i) => {
                  return (
                    <div key={i} className="column_row">
                      <img
                        src={x.image}
                        alt="이미지 없어"
                        className="released_video_thumnail"
                      ></img>

                      <div
                        className={`introduce_container ${i}`}
                        onMouseOver={(e) => changeMenu(e)}
                        onMouseOut={(e) => retrunMenu(e)}
                      >
                        <div className="someout">
                          <div className="title">{x.title}</div>
                          <div className="some">
                            <div className="part view">🔼 {x.view}</div>
                            <div className="part review">📄 {x.reivew}</div>
                            <div className="part good">👍 {x.good}</div>
                          </div>
                        </div>

                        <div className="somehover">
                          <div className="part view">🔼 {x.view}</div>
                          <div className="part review">📄 {x.reivew}</div>
                          <div className="part good">👍 {x.good}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="VideoPath">
                <a href="/">동영상으로 이동</a>
              </div>
            </div>
          </div>
          <div className="analysis_column">
            <div className="achievement">
              <div className="achievement_header">새 업적</div>
              <div className="achievement_container">
                <img className="emoticon" src={testimages}></img>
                <div className="achievement_content">
                  <div className="content_title">채널의 생일을 축하합니다!</div>
                  <div className="content_description">
                    그동안 정말 수고 많으셨습니다. 내년에는 내 채널과 커뮤니티가
                    얼마나 더 성장할지 상상해 보세요. 계속해서 나다운 콘텐츠를
                    만들어 보세요.
                  </div>
                </div>
              </div>
              <div className="ShowAnalysis">
                <a href="/">분석보기</a>
              </div>
            </div>

            <div className="ChannelAnalysis_container">
              <div className="ChannelAnalysis_container_header">채널분석</div>

              <div className="Subscirbe_Analysis_box">
                <div>현재 구독자 수</div>
                <div className="member">5000</div>
                <div className="description">지난 28일 동안 19증가</div>
              </div>

              <hr className="box_hr" />

              <div className="summary_box">
                <div className="small_header">요약</div>
                <div className="description">지난 28일</div>

                <div className="summary_annalysis_box">
                  {ChannelAnalysis.summary.map((x) => {
                    return (
                      <div className="detail_low">
                        <div className="rank">{x.title}</div>
                        <div className="rank_detail">
                          <span>
                            {x.title === "예상수익" ? "$ " : ""}
                            {x.analysis}
                          </span>
                          <span>{x.emoticon}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <hr className="box_hr" />

              <div className="popular_Videos">
                <div className="small_header">인기 동영상</div>
                <div className="description">지난 48시간, 조회수</div>

                <div className="video_annalysis_box">
                  {ChannelAnalysis.popularVideos.map((x) => {
                    return (
                      <div className="detail_low">
                        <div className="rank">{x.title}</div>
                        <div className="rank_detail">
                          <span>{x.analysis}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="a">
                <a>채널 분석으로 이동</a>
              </div>
            </div>
          </div>
          <div className="analysis_column"></div>
        </div>
      </div>
    </>
  );
};

export default StudioContent;
