import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const userInfo = useSelector((state) => state.adminSignInInfo?.userInfo);
  return (
    <Right>
      <Link to="/admin/">
        <ProfilePic src={userInfo?.user.profilePic?.url} />
      </Link>
      <Notifications>
        <MdNotificationsActive />
      </Notifications>
    </Right>
    // </Wrapper>
  );
};

const ProfilePic = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid #000f2d;
  padding-bottom: 30dp;
`;

const Notifications = styled.div`
  width: 45px;
  cursor: pointer;
  height: 45px;
  border-radius: 50%;
  background: #000f2d;
  border: 1px solid #eee;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  height: 120px;
  align-self: flex-end;

  display: flex;
  align-items: center;
`;

export default Navbar;
