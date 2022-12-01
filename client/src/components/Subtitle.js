import React from "react";
import styled from 'styled-components';
const Subtitle = ({text}) => {
  return <Text>{text}</Text>
};
const Text = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin-bottom:55px;

  text-align: center;

  color: #141414;
`;
export default Subtitle;
