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
  grid-template-rows: repeat(4, auto);
  background: red;
  background-color: #212121;
  padding: 0 20px;
`;

const CardBox = styled.div`
  width: 350px;
  height: 320px;
  display: flex;
  flex-direction: row;
  background: aqua;
  background-color: #212121;
`;

const CardContainer = styled.div``;

const CardProfile = styled.img`
  width: 100%;
  border-radius: 12px;
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
`;

const CardDetailContentBox = styled.div`
  overflow-x: hidden;
`;

const CardDetailContentTitleBox = styled.h3`
  color: #fff;
  margin: 12px 0 4px 0;
`;

const CardDetailContentTitle = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
`;

const CardDetailContentTitleText = styled.p`
  color: #fff;
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 500;
  overflow: hidden;
  display: block;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: normal;
`;

const CardDetailContentMetaBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardDetailContentMetaTitle = styled.div`
  color: #fff;
  font-size: 1rem;
`;

const CardDetailContentMetaDataBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardDetailContentMetaView = styled.div`
  color: #fff;
  font-size: 1rem;
`;

const CardDetailContentMetaDate = styled.div`
  color: #fff;
  padding-left: 1rem;
  font-size: 1rem;
`;

const Content = () => {
  const count = [1, 2, 3, 4];
  return (
    <>
      <ContentContainer>
        <GridContainer>
          {count.map(() => (
            <CardBox>
              <CardContainer>
                <CardProfile src={Image} />
                <CardDetailBox>
                  <CardDetailProfile>
                    <CardDetailProfileBox>
                      <CardDetailProfileImage src={Image} />
                    </CardDetailProfileBox>
                  </CardDetailProfile>
                  <CardDetailContentBox>
                    <CardDetailContentTitleBox>
                      <CardDetailContentTitle>
                        <CardDetailContentTitleText>
                          팝송 명곡 100곡 베스트 모두 해석해버리기| PlayList
                        </CardDetailContentTitleText>
                      </CardDetailContentTitle>
                    </CardDetailContentTitleBox>
                    <CardDetailContentMetaBox>
                      <CardDetailContentMetaTitle>
                        H녀
                      </CardDetailContentMetaTitle>
                      <CardDetailContentMetaDataBox>
                        <CardDetailContentMetaView>
                          조회수 398만회
                        </CardDetailContentMetaView>
                        <CardDetailContentMetaDate>
                          1년전
                        </CardDetailContentMetaDate>
                      </CardDetailContentMetaDataBox>
                    </CardDetailContentMetaBox>
                  </CardDetailContentBox>
                </CardDetailBox>
              </CardContainer>
            </CardBox>
          ))}
        </GridContainer>
      </ContentContainer>
    </>
  );
};

export default Content;
