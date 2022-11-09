import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Categorybar from "../components/Categorybar/Categorybar";
import Content from "../components/Content/Content";

const Container = styled.div`
  background: #212121;
  width: 100%;
  height: 100vh;
`;

const Landing = () => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Categorybar />
      <Content />
    </Container>
  );
};

export default Landing;
