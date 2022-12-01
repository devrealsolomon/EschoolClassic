import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const userInfo = useSelector((state) => state.signInInfo?.userInfo);
  return (
    <Wrapper>
      <Link to="/">
        <Left>
          <Logo>
            <LogoCircle />
          </Logo>
          <LogoTexts>
            <Link to="/">
              <LogoTitle>Kinpeak UTME</LogoTitle>
            </Link>
            <Dashboard>Dashboard</Dashboard>
          </LogoTexts>
        </Left>
      </Link>
      <Right>
        <Link to="/edit">
          <ProfilePic src={userInfo?.school.logo?.url} />
        </Link>

        <Notifications>
          <MdNotificationsActive />
        </Notifications>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 120px !important;

  padding-left: 88px;
  padding-right: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-self: center;
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

const ProfilePic = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  border: 2px solid #000f2d;
  padding-bottom: 30dp;
  object-fit: cover;
`;

const Notifications = styled.div`
  width: 45px;
  cursor: pointer;
  height: 45px;
  border-radius: 50%;
  background: #000f2d;
  border: 1px solid #ffffff;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
`;

export default Navbar;
