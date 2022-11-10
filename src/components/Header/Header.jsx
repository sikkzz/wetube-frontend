import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";

import GoogleButton from "../GoogleButton";

const Headers = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  width: 100%;
  /* border-bottom: 1px solid #eee; */
  position: fixed;
  background-color: #212121;
`;

const HeaderContainer = styled.div`
  width: 98%;
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
  color: #fff;
`;

const HeaderCenter = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  border-right: none;
  border-radius: 40px 0 0 40px;
  background-color: #212121;
`;

const SearchForm = styled.form`
  margin-left: 10px;
`;

const SearchInput = styled.input`
  border: none;
  height: 30px;
  width: 500px;
  color: #fff;
  background-color: #212121;

  outline: none;
  padding: 2px 6px;
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  color: #eee;
  border: 1px solid #fff;
  border-radius: 0 40px 40px 0;
`;

const HeaderRight = styled.div`
  display: flex;
  width: 260px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/");
  };

  const onStudioClick = () => {
    navigate("/studio")
  }
  
  const onChannelClick = () => {
    navigate("/channel")
  }
  return (
    <Headers>
      <HeaderContainer>
        <HeaderStart>
          <FaBars size={24} color="#fff" />
          <Logo onClick={onLogoClick}>Logo</Logo>
        </HeaderStart>

        <HeaderCenter>
          <SearchBox>
            <SearchContainer>
              <SearchForm>
                <SearchInput type="text" placeholder="검색"></SearchInput>
              </SearchForm>
            </SearchContainer>
            <SearchIcon>
              <BsSearch size={18} />
            </SearchIcon>
          </SearchBox>
        </HeaderCenter>

        <HeaderRight>
          <RiVideoAddLine size={30} color="#fff" onClick={onStudioClick}/>
          <MdOutlineContactPage size={30} color="#fff" onClick={onChannelClick}/>
          <GoogleButton />
        </HeaderRight>
      </HeaderContainer>
    </Headers>
  );
};

export default Header;
