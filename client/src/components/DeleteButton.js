import React from "react";

import styled from "styled-components";
const DeleteButton = ({ title, props }) => {
  return <Button {...props}>{title}</Button>;
};

const Button = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  z-index: 10000;
  cursor: pointer;
  line-height: 32px;
  border: none;
  margin-left: 41px;
  font-family: "Dm Sans";
  background: rgba(255, 0, 0, 0.8);
  border-radius: 10px;
  padding: 14px 20px;
  color: #ffffff;
`;
export default DeleteButton;
