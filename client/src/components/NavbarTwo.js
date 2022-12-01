import React from "react";
import sch_logo from "../images/logo_sch.png";
import styled from "styled-components";
import { pageLinks } from "../data/pageLinks";
import BlueButton from "./BlueButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
const NavbarTwo = ({ openSidebar }) => {
  const userInfo = useSelector((state) => state.signInInfo?.userInfo);
  return (
    <Wrapper>
      <Link to={userInfo?.school ? "/" : "/landing_page"}>
        <Logo src={sch_logo} alt="Logo" />
      </Link>
      <Links>
        {pageLinks.map((pageLink) => (
          <Link to={pageLink.url}>
            <PageLink key={pageLink.id}>{pageLink.name}</PageLink>
          </Link>
        ))}
      </Links>
      <Link to={userInfo?.school ? "/logout" : "/register"}>
        <BlueButton title={userInfo?.school ? "Logout" : "Add your school"} />
      </Link>
      <NavToggle>
        <FaBars onClick={openSidebar} />
      </NavToggle>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 120px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  @media screen and (max-width: 1150px) {
    padding: 0 20px;
  }
`;
const Logo = styled.img`
  width: 75px;
  height: 75px;
  cursor: pointer;
  object-fit: center;
`;
const Links = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const PageLink = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  height: 100%;
  padding: 25px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #141414;
  margin-right: 40px;
  transition: all 0.5s linear;
  &:hover {
    opacity: 0.8;
  }
`;
const NavToggle = styled.div`
  cursor: pointer;
  color: #141414;
  padding-right: 20px;
  transition: all 0.6s linear;
  font-size: 37px;
  @media screen and (min-width: 800px) {
    display: none;
  }
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;
export default NavbarTwo;
