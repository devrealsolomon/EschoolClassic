import React, { useRef } from "react";
import { BiLogOut, BiRefresh } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { FaBlog, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import TabItem from "./TabItem";
const Tabs = () => {
  const tabItems = [
    {
      url: "/admin",
      title: "Overview",
      icon: <FaHome />,
      id: 1,
    },
    {
      url: "/admin/schools",
      title: "My Schools",
      icon: <BsPersonCircle />,
      id: 2,
    },
    {
      url: "/admin/management",
      title: "Management",
      icon: <BiRefresh />,
      id: 3,
    },
    {
      url: "/admin/edit_profile",
      title: "Edit Profile",
      icon: <BiRefresh />,
      id: 4,
    },
    {
      url: "/admin/blogs",
      title: "Blogs",
      icon: <FaBlog />,
      id: 8,
    },
    
    {
      url: "/admin/logout",
      title: "Logout",
      icon: <BiLogOut />,
      id: 5,
    },
  ];
  const selectedIndex = useRef(0);
  return (
    <Wrapper>
      <Top>
        <Logo>
          <LogoCircle />
        </Logo>
        <LogoTexts>
          <LogoTitle>EDET Schools</LogoTitle>
          <Dashboard>Dashboard</Dashboard>
        </LogoTexts>
      </Top>
      <Account>Account</Account>
      {tabItems.map((tabItem) => {
        return (
          <Link to={tabItem.url}>
            <TabItem
              key={tabItem.id}
              {...tabItem}
              selectedIndex={selectedIndex}
            />
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 340px !important;
  height: 100%;
  max-width: 100%;
  display: flex;

  border-right: 1px solid lightgray;

  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Top = styled.div`
  display: flex;
  height: 120px !important;
  align-items: center;
`;
const LogoTexts = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  width: 50px;
  height: 50px;
  background: #000f2d;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;
const LogoCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
`;

const LogoTitle = styled.h1`
  height: 28px;

  font-family: "Test Heldane Display";
  font-family: "DM Sans";
  font-style: bold;
  font-weight: 900;
  font-size: 18px;
  line-height: 28px;

  color: #000000;
`;
const Dashboard = styled.h4`
  width: 71px;
  height: 24px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.7);
`;

const Account = styled.h3`
  font-family: "DM Sans";
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  transition: all 0.5s linear;
  margin-top: 0px;
  align-self: start;
  margin-left: 85px;
  color: rgba(0, 15, 45, 0.5);
  &:hover {
    text-decoration: underline;
  }
`;
export default Tabs;
