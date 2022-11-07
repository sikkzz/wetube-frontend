import React from "react";
import styled from "styled-components";

const Categorybars = styled.div`
  position: fixed;
  top: 60px;
  left: 250px;
  width: 1472px;
  height: 56px;
  background: red;
`;

const CategoryContainer = styled.div`
  width: 1180px;
  height: 56px;
  background: #fff;
  margin: 0 auto;
`;

const Categorybar = () => {
  return (
    <Categorybars>
      <CategoryContainer></CategoryContainer>
    </Categorybars>
  );
};

export default Categorybar;
