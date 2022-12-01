import React from "react";
import styled from "styled-components";
const TextAreaWithLabel = ({
  label,
  placeholder,
  required,
  onChange,
  rows,
  value,
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
        rows={rows}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 456px; */

  margin-bottom: 10px;
`;
const Label = styled.h1`
  font-family: "DM Serif Display";
  font-style: bold;
  font-weight: 400;
  margin-bottom: 6px;
  font-size: 16px;
  line-height: 28px;
  color: #141414;
  /* identical to box height, or 200% */

  color: #141414;
`;
const Input = styled.textarea`
  background: #ffffff;

  border: 1.2px solid #f1f1f1;
  border-radius: 8px;
  padding: 12px;
  font-size: 15px;
  width: 100%;
  &:invalid {
    border-color: red;
  }
  &:focus {
    outline: none;
  }
  line-height: 19px;
  ::placeholder {
    font-family: "Moderat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #979797;
  }
`;
export default TextAreaWithLabel;
