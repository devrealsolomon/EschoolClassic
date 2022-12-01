import React from "react";
import { AiFillEye } from "react-icons/ai";
import styled from "styled-components";

import SignupButton from "../components/SignupButton";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
const ResetPassword = () => {
  return (
    <Wrapper>
      <Form>
        <Title title="Welcome here" />
        <Subtitle text="Update your password" />

        <PasswordInputWrapper>
          <TextInput placeholder="Password" type="password" required />
          <ToggleIcon>
            <AiFillEye />
          </ToggleIcon>
        </PasswordInputWrapper>
        <PasswordInputWrapper>
          <TextInput placeholder="Confirm password" type="password" required />
          <ToggleIcon>
            <AiFillEye />
          </ToggleIcon>
        </PasswordInputWrapper>
        <SignupButton title="Reset password" />
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

const PasswordInputWrapper = styled.div`
  width: 400px;
  height: 55px;
  margin-bottom: 24px;
  position: relative;
`;

const TextInput = styled.input`
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  padding: 12px 22px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 30px;
  width: 100%;

  color: #979797;
  &::placeholder {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;

    color: #979797;
  }
`;
const ToggleIcon = styled.div`
  position: absolute;
  z-index: 100;
  right: 20px;
  top: 20px;
  color: #979797;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export default ResetPassword;
