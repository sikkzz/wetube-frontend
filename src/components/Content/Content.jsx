import React from "react";
import styled from "styled-components";

import Image from "../../assets/test.jpg";

const ContentContainer = styled.div`
  position: absolute;
  top: 116px;
  left: 14.468%;
  width: 85.6%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, 200px);
  background: red;
  background-color: #212121;
  padding: 0 20px;
`;

const CardBox = styled.div`
  width: 350px;
  height: 320px;
  /* margin: 0 8px;
margin-bottom: 40px; */
  display: flex;
  flex-direction: row;
  background: aqua;
  background-color: #212121;
`;

const CardContainer = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column; */
`;

const CardProfile = styled.img`
  width: 100%;
  border-radius: 12px;
  /* padding-top: 56.25%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    display: block; */
`;

const CardDetailBox = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0 12px;
  flex: auto;
  display: flex;
  flex-direction: row;
`;

const CardDetailProfile = styled.a`
  height: 36px;
  margin-top: 12px;
  margin-right: 12px;
`;

const CardDetailProfileBox = styled.div`
  background-color: var(--yt-spec-10-percent-layer) !important;
  width: 36px;
  height: 36px;
  object-fit: cover;

  border-radius: 50%;
  background-color: transparent;
  overflow: hidden;
`;

const CardDetailProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  /* width: 48px; */
  /* margin-left: var(--yt-img-margin-left, auto); */
  /* margin-right: var(--yt-img-margin-right, auto); */
  /* max-height: var(--yt-img-max-height, none); */
  /* max-width: var(--yt-img-max-width, 100%); */
  /* border-radius: var(--yt-img-border-radius, none); */
`;

const CardDetailContentBox = styled.div`
  overflow-x: hidden;
  padding-right: 24px;
`;

const CardDetailContentTitleBox = styled.h3`
  color: var(--yt-spec-text-primary);
  margin: 12px 0 4px 0;
`;

const CardDetailContentTitle = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
`;

const CardDetailContent = styled.p`
  color: var(--yt-spec-text-primary);
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 500;
  max-height: 4.4rem;
  overflow: hidden;
  display: block;
  -webkit-line-clamp: 2;
  display: box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
`

const Content = () => {
  return (
    <>
      <ContentContainer>
        <GridContainer>
          <CardBox>
            <CardContainer>
              <CardProfile src={Image} />

              <CardDetailBox>
                <CardDetailProfile>
                  <CardDetailProfileBox>
                    <CardDetailProfileImage src={Image} />
                  </CardDetailProfileBox>
                </CardDetailProfile>
              </CardDetailBox>

              <CardDetailContentBox>
                <CardDetailContentTitleBox>
                  <CardDetailContentTitle>
                    <CardDetailContent>
                      팝송 명곡 100곡 베스트 모두 해석해버리기| PlayList
                    </CardDetailContent>
                  </CardDetailContentTitle>
                </CardDetailContentTitleBox>
              </CardDetailContentBox>
            </CardContainer>
          </CardBox>

          <CardBox>
            <CardContainer>
              <CardProfile src={Image} />
            </CardContainer>
          </CardBox>
          <CardBox>
            <CardContainer>
              <CardProfile src={Image} />
            </CardContainer>
          </CardBox>
          <CardBox>
            <CardContainer>
              <CardProfile src={Image} />
            </CardContainer>
          </CardBox>
        </GridContainer>
      </ContentContainer>
    </>
  );
};

export default Content;
