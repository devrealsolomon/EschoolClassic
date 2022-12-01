import React from "react";
import styled from "styled-components";
const InputWithLabel = ({ label, placeholder, onChange, value, type }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
`;
const Label = styled.div`
  font-family: "DM Serif Display";
  font-style: bold;
  font-weight: 400;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 28px;
  color: #141414;
`;

const Input = styled.input`
  padding: 12px 22px;
  color: #000000;
  font-family: "Dm Sans";
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  border: 3px solid #f1f1f1;

  border-radius: 8px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: "Dm Sans";
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #979797;
  }
`;
export default InputWithLabel;
