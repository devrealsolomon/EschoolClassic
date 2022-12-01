import React from "react";
import styled from "styled-components";
const GreenButton = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>;
};
const Button = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  cursor: pointer;
  z-index: 10000;
  border: none;
  font-family: "Dm Sans";
  background: #0e563f;
  border-radius: 10px;
  padding: 14px 20px;
  color: #ffffff;
`;
export default GreenButton;
