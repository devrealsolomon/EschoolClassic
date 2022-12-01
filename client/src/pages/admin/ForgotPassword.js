import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Input from "../components/Input";
import SignupButton from "../components/SignupButton";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
const ForgotPassword = () => {
  return (
    <Wrapper>
      <Form>
        <Title title="Welcome here" />
        <Subtitle text="Reset your password here" />
        <Input placeholder="Email address" />

        <SignupButton title="Get reset link" />
        <Link to="/login">
          <BackBtn>Back to login</BackBtn>
        </Link>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const Form = styled.form`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
`;

const BackBtn = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  color: #141414;
  cursor: pointer;
  margin-top: 20px;
  span {
    color: #0074ba;
  }
`;
export default ForgotPassword;
