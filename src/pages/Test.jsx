import React from "react";
import styled from "styled-components";

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav nav"
    "asideLeft category"
    "asideLeft main";
  /* "footer footer"; */
  grid-template-rows: 1fr 1fr 9fr;
  grid-template-rows: 60px 56px 1fr;
  grid-template-columns: 1fr 6fr;
  grid-template-columns: 250px 1fr;
`;

const Nav = styled.nav`
  grid-area: nav;
  background: aqua;
`;
const AsideLeft = styled.aside`
  grid-area: asideLeft;
  background: yellow;
`;
const Category = styled.div`
  grid-area: category;
  background: green;
`;
const Main = styled.main`
  grid-area: main;
  background: blue;
`;

const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainCard = styled.div`
  background: red;
  width: 300px;
  height: 300px;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

const Test = () => {
  return (
    <GridLayout>
      <Nav>Nav Area</Nav>
      <AsideLeft>Aside</AsideLeft>
      <Category>Category</Category>
      <Main>
        <MainRow>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
        </MainRow>
        <MainRow>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
        </MainRow>
        <MainRow>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
        </MainRow>
        <MainRow>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
          <MainCard>Card</MainCard>
        </MainRow>
      </Main>
    </GridLayout>
  );
};

export default Test;
