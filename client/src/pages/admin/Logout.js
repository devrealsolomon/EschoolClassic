import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { signout } from "../../redux/admin/actions/userActions";
import AlertSuccess from "../../components/AlertSuccess";

const AdminLogout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signout());

    // eslint-disable-next-line
  }, []);

 
  return (
    <Wrapper>
      <ContentWrapper>
        <AlertSuccess text="Logout was successfull" />

        <Link to="/admin/login">
        <MyButton >Back</MyButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  place-items: center;
`;
const MyButton = styled.button`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  margin-top: 30px;
  width: 400px;
  font-size: 14px;
  z-index: 200;
  line-height: 28px;

  text-align: center;
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    border-radius: 20px;
  }
  margin-left: 15px;
  border-radius: 10px;

  background: transparent;
  color: gray;
  border: 1px solid gray;

  background: #27ae60;
  color: #fff;
  border: none;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AdminLogout;
