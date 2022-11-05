import React from "react";
import styled from "styled-components";

import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

import GoogleButton from "../GoogleButton";

const Headers = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #eee;
  position: fixed;
`;

const HeaderContainer = styled.div`
  width: 1590px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderStart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  font-size: 1.6rem;
`;

const HeaderCenter = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchBox = styled.div`
  width: 600px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
`;

const SearchForm = styled.form`
  margin-left: 10px;
`;

const SearchInput = styled.input`
  border: none;
  height: 30px;
  width: 500px;
  color: #000;
  outline: none;
  padding: 2px 6px;
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  background: #eee;
  border: 1px solid #000;
  border-right: none;
`;

const HeaderRight = styled.div``;

const Header = () => {
  return (
    <Headers>
      <HeaderContainer>
        <HeaderStart>
          <FaBars size={24} />
          <Logo href="/">Logo</Logo>
        </HeaderStart>

        <HeaderCenter>
          <SearchBox>
            <SearchForm>
              <SearchInput type="text" placeholder="검색"></SearchInput>
            </SearchForm>
            <SearchIcon>
              <BsSearch size={18} />
            </SearchIcon>
          </SearchBox>
        </HeaderCenter>

        <HeaderRight>
          <GoogleButton />
        </HeaderRight>
      </HeaderContainer>
    </Headers>
  );
};

export default Header;
