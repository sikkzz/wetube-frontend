import React from "react";

import {
  SidebarFooterData,
  SidebarFooterData2,
} from "../../constants/data/SidebarData";

const SidebarFooter = () => {
  return (
    <div id="footer" className="wtd-guide-render">
      <div id="guide-links-primary" className="wtd-guide-render">
        {SidebarFooterData.map((item, index) => (
          <a href={item.link} key={index}>
            {item.title}
          </a>
        ))}
      </div>
      <div id="guide-links-secondary" className="wtd-guide-render">
        {SidebarFooterData2.map((item, index) => (
          <a href={item.link} key={index}>
            {item.title}
          </a>
        ))}
      </div>
      <div id="copyright" className="wtd-guide-render">
        © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain
        View CA 94043, USA, 0807-882-594 (무료),
        yt-support-solutions-kr@google.com, 호스팅: Google LLC,{" "}
        <a href="#!">사업자정보, 불법촬영물 신고</a> 크리에이터들이 유튜브 상에
        게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다.
        유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지
        않습니다.
      </div>
    </div>
  );
};

export default SidebarFooter;
