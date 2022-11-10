import React from "react";
import styled from "styled-components";

const Categorybars = styled.div`
  position: fixed;
  /* top: 60px;
  left: 14.468%; */
  width: 85.6%;
  height: 56px;
  background-color: #212121;
`;

const CategoryContainer = styled.div`
  /* width: 930px; */
  width: 62.8735%;
  height: 56px;
  /* background: #fff; */
  
  margin: 0 auto;
`;

const CategoryItemBox = styled.div`
  margin: 12px;
  height: 32px;
  min-width: 12px;
  padding: 0 10px;
  border-radius: 8px;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  display: inline-flex;
  white-space: nowrap;
  font-size: 0.8rem;
  background: #fff;
  color: #000;
`;

const CategoryItem = styled.div`
  max-width: 20rem;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Categorybar = () => {
  return (
    <Categorybars>
      <CategoryContainer>
        <CategoryItemBox>
          <CategoryItem>카테고리</CategoryItem>
        </CategoryItemBox>
        <CategoryItemBox>
          <CategoryItem>카테고리</CategoryItem>
        </CategoryItemBox>
        <CategoryItemBox>
          <CategoryItem>카테고리</CategoryItem>
        </CategoryItemBox>
        <CategoryItemBox>
          <CategoryItem>카테고리</CategoryItem>
        </CategoryItemBox>
        <CategoryItemBox>
          <CategoryItem>카테고리</CategoryItem>
        </CategoryItemBox>
        <CategoryItemBox>
          <CategoryItem>카테고리</CategoryItem>
        </CategoryItemBox>
        <CategoryItemBox>
          <CategoryItem>카테고리</CategoryItem>
        </CategoryItemBox>
        <CategoryItemBox>
          <CategoryItem>카테고리</CategoryItem>
        </CategoryItemBox>
      </CategoryContainer>
    </Categorybars>
  );
};

export default Categorybar;
