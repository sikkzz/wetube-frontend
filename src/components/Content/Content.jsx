import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Image from "../../assets/test2.jpg";
import Image2 from "../../assets/test.jpg";

import { timeFormat } from "../../utils/timeformating";

import Categorybar from "../Categorybar/Categorybar";

import "./Content.scss";

import { getPostInfo } from "../../modules/post";

const Content = () => {
  const count = [1, 2, 3, 4];

  // const postState = useSelector((state) => state.post)


  const [postInfo, setPostInfo] = useState([
    {
      postId: 1,
      author: {
        userId: 1,
        username: "김준식",
        profileUrl:
          "https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj",
      },
      title: "비디오 포스트 제목",
      view: "11만회",
      createAt: "1주전",
      thumbnailImg:
        "https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw",
      videoLength: timeFormat(19865), // second
    },
    {
      postId: 2,
      author: {
        userId: 2,
        username: "김준식",
        profileUrl:
          "https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj",
      },
      title: "비디오 포스트 제목",
      view: "22만회",
      createAt: "2주전",
      thumbnailImg:
        "https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw",
      videoLength: timeFormat(21865), // second
    },
    {
      postId: 3,
      author: {
        userId: 3,
        username: "김준식",
        profileUrl:
          "https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj",
      },
      title: "비디오 포스트 제목",
      view: "33만회",
      createAt: "3주전",
      thumbnailImg:
        "https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw",
      videoLength: timeFormat(27865), // second
    },
    {
      postId: 4,
      author: {
        userId: 4,
        username: "김준식",
        profileUrl:
          "https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj",
      },
      title: "비디오 포스트 제목",
      view: "44만회",
      createAt: "4주전",
      thumbnailImg:
        "https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw",
      videoLength: timeFormat(10865), // second
    },
  ]);

  // useEffect(() => {
  //   getPostInfo()
  //   setPostInfo(postState)
  // }, []);

  return (
    <wt-grid-render style={{ "--wt-grid-item-row": "4" }}>
      <Categorybar />
      <div id="contents" className="wt-grid-render">
        {count.map((index) => (
          <wt-grid-row class="wt-grid-render" key={index}>
            <div id="contents" className="wt-grid-row">
              {postInfo.map((item, index) => (
                <wt-item-render class="wt-grid-row" key={index}>
                  <div id="content" className="wt-item-render">
                    <wt-grid-media class="wt-item-render">
                      <div id="dismissible" className="wt-grid-media">
                        <wtd-thumbnail class="wt-grid-media">
                          <a
                            id="thumbnail"
                            className="wt-simple-endpoint wtd-thumbnail"
                            href={`/detail/${item.postId}`}
                          >
                            <wt-image class="wtd-thumbnail">
                              <img
                                className="wtd-thumbnail"
                                alt="thumbnail"
                                src={item.thumbnailImg}
                              />
                            </wt-image>
                            <div id="overlays" className="wtd-thumbnail">
                              <wtd-thumbnail-overlay-progress-render class="wtd-thumbnail">
                                <div
                                  id="progress"
                                  className="wtd-thumbnail-overlay-progress-render"
                                  style={{ width: "10%" }}
                                />
                              </wtd-thumbnail-overlay-progress-render>
                              <wtd-thumbnail-overlay-time-status-render class="wtd-thumbnail">
                                <span
                                  id="text"
                                  className="wtd-thumbnail-overlay-time-status-render"
                                >
                                  {item.videoLength}
                                </span>
                              </wtd-thumbnail-overlay-time-status-render>
                            </div>
                          </a>
                        </wtd-thumbnail>
                        <div id="details" className="wt-grid-media">
                          <a
                            id="profile_link"
                            className="wt-grid-media"
                            href="#!"
                          >
                            <wt-img-shadow id="profile" class="wt-grid-media">
                              <img
                                id="img"
                                className="wt-img-shadow"
                                src={item.author.profileUrl}
                                alt="profile_img"
                              />
                            </wt-img-shadow>
                          </a>
                          <div id="meta" className="wt-grid-media">
                            <h3 className="wt-grid-media">
                              <a
                                id="video-title-link"
                                className="wt-grid-media"
                                href={`/detail/${item.postId}`}
                              >
                                <wt-formatted-string
                                  id="video-title"
                                  class="wt-grid-media"
                                >
                                  {item.title}
                                </wt-formatted-string>
                              </a>
                            </h3>
                            <wtd-video-meta-block class="grid wt-grid-media">
                              <div
                                id="metadata"
                                className="wtd-video-meta-block"
                              >
                                <div
                                  id="byline-container"
                                  className="wtd-video-meta-block"
                                >
                                  <wtd-channel-name
                                    id="channel-name"
                                    class="wtd-video-meta-block"
                                  >
                                    <div
                                      id="container"
                                      className="wtd-channel-name"
                                    >
                                      <div
                                        id="text-container"
                                        className="wtd-channel-name"
                                      >
                                        <wt-formatted-string
                                          id="text"
                                          class="wtd-channel-name"
                                          ellipsis-style
                                        >
                                          <a
                                            className="wt-formatted-string"
                                            href="#!"
                                          >
                                            {item.author.username}
                                          </a>
                                        </wt-formatted-string>
                                      </div>
                                    </div>
                                  </wtd-channel-name>
                                </div>
                                <div
                                  id="metadata-line"
                                  className="wtd-video-meta-block"
                                >
                                  <span className="wtd-video-meta-block">
                                    조회수 {item.view}
                                  </span>
                                  <span className="wtd-video-meta-block">
                                    {item.createAt}
                                  </span>
                                </div>
                              </div>
                            </wtd-video-meta-block>
                          </div>
                        </div>
                      </div>
                    </wt-grid-media>
                  </div>
                </wt-item-render>
              ))}
            </div>
          </wt-grid-row>
        ))}
      </div>
    </wt-grid-render>
  );
};

export default Content;
