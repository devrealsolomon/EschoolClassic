import React from "react";
import styled from "styled-components";
const Input = ({ onChange, placeholder, type }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      required
    />
  );
};
const TextInput = styled.input`
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  padding: 12px 22px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  width: 400px;
  margin-bottom: 24px;
  line-height: 30px;

  color: #141414;
  &::placeholder {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #979797;
  }
  /* &:invalid {
    border-color: red;
  } */
`;

export default Input;
