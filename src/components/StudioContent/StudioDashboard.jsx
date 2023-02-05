import React from "react";
import "./StudioDashboard.scss";
import testimages from "../../assets/test2.jpg";
import { StudioDashboardData } from "../../constants/data/StudioDashboardData";
import { useState, useEffect } from "react";
import Icons from "../../constants/icon";
import ModalPortal from "../../Portal";
import Upload from "../Upload/Upload";
import { getVideoInfo } from "../../api/studiopost";

const StudioDashboard = () => {
  const [VideoInfo, setVideoInfo] = useState({});
  const [active, setactive] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const onUploadClick = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const data = getVideoInfo(1);
    setVideoInfo(data);
  }, []);

  return (
    <>
      <div className="StudioMain_Container">
        <div className="StudioMain_Container_header">
          <div className="StudioMain_Container_header_name">채널 대시보드</div>
          <div className="StudioMain_Container_header_setting">
            <div className="setting Upload" onClick={onUploadClick}>
              <Icons.MdUpload size={20} />
            </div>
            <div className="setting Streming">
              <Icons.MdOutlineWifiTethering size={20} />
            </div>
            <div className="setting correction">
              <Icons.TfiPencilAlt size={20} />
            </div>
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
                  <div className="title">{VideoInfo.title}</div>
                </div>
                <div className="analysis_detail">
                  <div className="detail_low_description">
                    <div>일반적인 실적 대비 처음 165일 1시간</div>
                  </div>

                  <div className="detail_low">
                    <div className="rank">조회수 순위</div>
                    <div className="rank_detail">
                      <span>3/10</span>
                      <span>
                        <Icons.MdNavigateNext />
                      </span>
                    </div>
                  </div>

                  <div className="detail_low">
                    <div className="rank">조회수</div>
                    <div className="rank_detail">
                      <span>{VideoInfo.view}</span>
                      <span>
                        <Icons.AiOutlineCheckCircle />
                      </span>
                    </div>
                  </div>

                  <div className="detail_low">
                    <div className="rank">노출 클릭률</div>
                    <div className="rank_detail">
                      <span>5.1%</span>
                      <span>
                        <Icons.AiOutlineCheckCircle />
                      </span>
                    </div>
                  </div>

                  <div className="detail_low">
                    <div className="rank">평균시청 지속시간</div>
                    <div className="rank_detail">
                      <span>1:20</span>
                      <span>
                        <Icons.BsArrowDownCircleFill />
                      </span>
                    </div>
                  </div>

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
                {StudioDashboardData.releasedData.map((x, i) => {
                  return (
                    <div key={i} className="column_row">
                      <img
                        src={x.image}
                        alt="이미지 없어"
                        className="released_video_thumnail"
                      ></img>

                      <div
                        className={`introduce_container ${i}`}
                        onMouseOver={() => setactive(i)}
                        onMouseOut={() => setactive("")}
                      >
                        <div
                          className="someout"
                          style={{ display: active === i ? "none" : "flex" }}
                        >
                          <div className="title">{x.title}</div>
                          <div className="some">
                            <div className="part view">
                              <Icons.FiBarChart2 /> {x.view}
                            </div>
                            <div className="part review">
                              <Icons.BsChatLeftText /> {x.reivew}
                            </div>
                            <div className="part good">
                              <Icons.BsHandThumbsUp /> {x.good}
                            </div>
                          </div>
                        </div>

                        <div
                          className="somehover"
                          style={{ display: active === i ? "flex" : "none" }}
                        >
                          <div className="part view">
                            <Icons.BsArrowDownCircleFill /> {x.view}
                          </div>
                          <div className="part review">
                            <Icons.AiOutlineCheckCircle /> {x.reivew}
                          </div>
                          <div className="part good">
                            <Icons.AiOutlineCheckCircle /> {x.good}
                          </div>
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
                <img className="emoticon" src={testimages} alt=""></img>
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
                  {StudioDashboardData.ChannelAnalysis.summary.map((x, i) => {
                    return (
                      <div className="detail_low" key={i}>
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
                  {StudioDashboardData.ChannelAnalysis.popularVideos.map(
                    (x, i) => {
                      return (
                        <div className="detail_low" key={i}>
                          <div className="rank">{x.title}</div>
                          <div className="rank_detail">
                            <span>{x.analysis}</span>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="a">
                <a>채널 분석으로 이동</a>
              </div>
            </div>
            <div className="RecentReivew">
              <div className="RecentReivew_header">
                <div className="title">최신 댓글</div>
                <div className="description">내가 응답하지 않은 채널 댓글</div>
              </div>

              {StudioDashboardData.RecentReveiw.map((x, i) => {
                return (
                  <>
                    <div className="reviewBox" key={i}>
                      <div>
                        <img className="profileImg" src={x.profileImg} alt="" />
                      </div>
                      <div className="reivewContent">
                        <div className="nickname">
                          <div>{x.nickname}</div>
                          <div>*</div>
                          <div>{x.month}개월전</div>
                        </div>
                        <div className="reivew">{x.reivew}</div>
                      </div>
                      <div>
                        <img className="Ssumnail" src={x.Ssunail} alt="" />
                      </div>
                    </div>
                    <hr className="reviewHr" />
                  </>
                );
              })}

              <div className="a">
                <a>더보기</a>
              </div>
            </div>

            <div className="recentSubscribe">
              <div className="recentSubscribe_header">
                <div className="title">최근구독자</div>
                <div className="description">지난 90일</div>
              </div>
              {StudioDashboardData.recentSubscribe.map((x, index) => {
                if (index < 3)
                  return (
                    <div className="subScribeMember" key={index}>
                      <div>
                        <img
                          className="subscribeProfile"
                          src={x.profileImg}
                          alt=""
                        />
                      </div>
                      <div className="subScribeMemberInfo">
                        <div className="nickname">{x.nickname}</div>
                        <div className="subtotal">구독자 {x.subtotal}명</div>
                      </div>
                    </div>
                  );
              })}
              <div className="a">
                <a href="/">더보기</a>
              </div>
            </div>
          </div>
          <div className="analysis_column">
            <div className="newsBox">
              <div className="newsHeader">뉴스</div>
              <div>
                <div>
                  <img className="newsTumnail" src={testimages} alt="" />
                </div>
                <div className="newstitle">이제 핸들을 사용할 수 있습니다.</div>
                <div className="newsdescription">
                  YouTube에서 핸들이 표시되기 시작합니다. 핸들을 시청자와
                  공유하여 내 채널의 고유한 식별 정보를 널리 알리세요.
                </div>
              </div>
              <div>
                <a href="/">자세히 알아보기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalPortal>
        <Upload modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </ModalPortal>
    </>
  );
};

export default StudioDashboard;
