import React from "react";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
const PasswordInput = ({ onChange, placeholder, isPasswordVisible }) => {
  return (
    <PasswordInputWrapper>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        type="password"
        required
      />
      <ToggleIcon>
        <AiFillEye />
      </ToggleIcon>
    </PasswordInputWrapper>
  );
};
const PasswordInputWrapper = styled.div`
  width: 400px;
  height: 55px;
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
  &:invalid {
    border-color: red;
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

export default PasswordInput;
