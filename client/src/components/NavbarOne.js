import React from "react";
import { MdLanguage, MdKeyboardArrowDown } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavbarOne = () => {
  const userInfo = useSelector((state) => state.signInInfo?.userInfo);
  return (
    <Wrapper>
      <Content>
        <PhoneNumber>+234 0810 640 5712</PhoneNumber>
        <Language>
          <div>
            <MdLanguage />
          </div>
          <h2>English</h2>
        </Language>
        <Link to={userInfo?.school ? "/logout" : "/login"}>
          <User>
            <div className="icon_wrapper">
              {/* <div className="icon"> */}
              <BsPersonCircle />
              {/* </div> */}
            </div>

            <h1>{userInfo?.school ? userInfo?.school.school_name : "Login"}</h1>
            <div className="carousel">
              <MdKeyboardArrowDown />
            </div>
          </User>
        </Link>
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  padding-right: 100px;
  height: 80px;
  background: #141414;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
const Content = styled.div`
  width: 30%;
  @media screen and (max-width: 1100px) {
    width: 50%;
  }
  @media screen and (max-width: 700px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
  display: flex;
  justify-content: space-between;
`;

const PhoneNumber = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  color: #ffffff;
`;
const Language = styled.div`
  display: flex;
  align-items: center;

  div {
    color: #ffffff;
    margin-right: 5px;
  }
  h2 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
  }
`;
const User = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  transition: all 0.5s linear;
  &:hover {
    opacity: 0.8;
  }
  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    margin-right: 6px;
    color: #ffffff;
  }
  .icon_wrapper {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    border-radius: 50%;
    background: #ffffff;
  }
  .carousel {
    color: white;
  }
`;

export default NavbarOne;
