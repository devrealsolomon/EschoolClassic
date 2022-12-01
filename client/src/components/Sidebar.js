import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import { pageLinks } from "../data/pageLinks";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <SidebarWrapper open={sidebarOpen && "open"} onClick={closeSidebar}>
      <Aside>
        <SidebarLinks>
          <Icon onClick={closeSidebar}>
            <FaTimes />
          </Icon>
          {pageLinks.map((link) => {
            return (
              <SidebarItem
                closeSidebar={closeSidebar}
                key={link.id}
                {...link}
              />
            );
          })}
        </SidebarLinks>
      </Aside>
    </SidebarWrapper>
  );
};
const SidebarWrapper = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  // background:yellow;
  position: fixed;
  z-index: 2000;
  top: 0px;
  left: 0;

  height: 100vh;
  transition: all 0.9s ease-out;
  transform: translateX(-100%);
  transform: ${(props) => props.open === "open" && "translateX(0)"};
`;
const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Aside = styled.aside`
  width: 90vw;
  max-width: 300px;
  display: grid;
  // height:85vh;
  height: 100%;
  flex-direction: column;
  grid-template-rows: auto, 1fr, auto;
  /* background:rgba(0,0,0,0.2); */
  background: #e5e5e5;
  padding: 40px 30px;
  color: #ff0075;
`;
const Icon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: red;
  cursor: pointer;
  font-size: 29px;
  &:hover {
    color: dark-red;
    opacity: 0.7;
  }
`;

export default Sidebar;
