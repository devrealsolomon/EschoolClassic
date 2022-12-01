import React from "react";
import styled from "styled-components";
const SignupButton = ({ title, disabled, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {title}
    </Button>
  );
};
const Button = styled.button`
  background: #0074ba;
  border-radius: 8px;
  border: none;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  width: 400px;
  padding: 10px 0;
  cursor: pointer;
  transition: all 0.6s linear;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;
export default SignupButton;
