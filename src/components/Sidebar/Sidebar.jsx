import React from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";

const SideBarContainer = styled.nav`
  background-color: #212121;
  width: 250px;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 60px;
`;

const SideList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const SideLine = styled.div`
  border-bottom: 1px solid #fff;
`;

const SideListMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const SideListItem = styled.li`
  display: flex;
  justify-content: start;
  list-style: none;
  padding: 1rem 2.8rem;
  color: #fff;
  align-items: center;
`;

const SideListItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemContent = styled.div`
  margin-left: 20px;
  font-size: 1.2rem;
`;

const Sidebar = () => {
  return (
    <SideBarContainer>
      <SideList>
        <SideLine>
          <SideListMenu>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Content</ItemContent>
              </SideListItemBox>
            </SideListItem>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Content</ItemContent>
              </SideListItemBox>
            </SideListItem>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Content</ItemContent>
              </SideListItemBox>
            </SideListItem>
          </SideListMenu>
        </SideLine>

        <SideLine>
          <SideListMenu>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Text</ItemContent>
              </SideListItemBox>
            </SideListItem>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Text</ItemContent>
              </SideListItemBox>
            </SideListItem>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Text</ItemContent>
              </SideListItemBox>
            </SideListItem>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Text</ItemContent>
              </SideListItemBox>
            </SideListItem>
          </SideListMenu>
        </SideLine>

        <SideLine>
          <SideListMenu>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Service</ItemContent>
              </SideListItemBox>
            </SideListItem>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Service</ItemContent>
              </SideListItemBox>
            </SideListItem>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Service</ItemContent>
              </SideListItemBox>
            </SideListItem>
            <SideListItem>
              <SideListItemBox>
                <AiOutlineHome size={24} />
                <ItemContent>Service</ItemContent>
              </SideListItemBox>
            </SideListItem>
          </SideListMenu>
        </SideLine>
      </SideList>
    </SideBarContainer>
  );
};

export default Sidebar;
