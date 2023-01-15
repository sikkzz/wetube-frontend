import React, { useState } from "react";

import Icons from "../../constants/icon";
import Upload from "../Upload/Upload";

import "./StudioHeader.scss";
import HeaderSearchResults from "./HeaderSearchResults";

import ModalPortal from "../../Portal";

const StudioHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onUploadClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <wt-st-header class="wt-entity-page">
        <header className="wt-st-header">
          <wt-icon-button
            id="nav-icon"
            class="wt-st-header"
            icon="menu"
            role="button"
          >
            <wt-iron-icon class="wt-icon-button">
              <Icons.FaBars size={24} color="#aaa" />
            </wt-iron-icon>
          </wt-icon-button>
          <wt-home-button class="wt-st-header">
            <a id="home-button" className="wt-home-button" href="/studio">
              WeTube
            </a>
          </wt-home-button>
          <wt-st-search id="st-search" class="wt-st-header" expanded>
            <div id="search-layer" className="wt-st-search">
              <wt-iron-icon class="search-icon wt-st-search">
                <Icons.BsSearch size={20} color="#606060" />
              </wt-iron-icon>
              <wt-search-form class="wt-st-search">
                <form name="searchForm" className="wt-st-search">
                  <input
                    id="query-input"
                    className="wt-st-search"
                    placeholder="채널에서 검색하기"
                  />
                </form>
              </wt-search-form>
              <wt-icon-button
                id="clear-icon"
                icon="clear"
                class="wt-st-search"
                role="button"
                hidden
              >
                <wt-iron-icon class="wt-icon-button">
                  <Icons.AiOutlineClose size={20} color="#606060" />
                </wt-iron-icon>
              </wt-icon-button>
              {/* <HeaderSearchResults /> */}
            </div>
          </wt-st-search>
          <div className="right-section wt-st-header">
            <wt-help id="help-widget" class="wt-st-header">
              <wt-icon-button
                id="help-icon"
                icon="help-outline"
                class="wt-st-header"
                role="button"
              >
                <wt-iron-icon class="wt-icon-button">
                  <Icons.AiOutlineQuestionCircle size={24} color="#aaa" />
                </wt-iron-icon>
              </wt-icon-button>
            </wt-help>
            <wt-button
              id="create-icon"
              role="button"
              class="wt-st-header"
              type="filled"
              onClick={onUploadClick}
            >
              <wt-iron-icon class="inline wt-button">
                <Icons.RiVideoAddLine size={24} color="ff4e45" />
              </wt-iron-icon>
              <div className="label wt-button">만들기</div>
            </wt-button>
          </div>
        </header>
      </wt-st-header>
      <ModalPortal>
        <Upload modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </ModalPortal>
    </>
  );
};

export default StudioHeader;
