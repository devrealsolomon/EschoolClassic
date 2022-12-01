import React from "react";
import styled from "styled-components";
const TableTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h1`
  font-family: "Test Heldane Display,Dm Serif Display";
  font-style: bold;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;

  color: #141414;
`;

export default TableTitle;
