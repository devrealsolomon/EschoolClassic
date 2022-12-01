import React, { useState } from "react";
import styled from "styled-components";
const TabItem = ({ icon, title, id }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <Wrapper
      className={selectedIndex === id && "selected"}
      onClick={() => setSelectedIndex(id)}
    >
      <Strip />
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Title = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  transition: all 0.6s linear;

  color: #000f2d;
`;
const Strip = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 5px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: #000f2d;
  opacity: 0;
  transition: all 0.6s linear;
`;
const Wrapper = styled.div`
  width: 230px;
  height: 55px;
  position: relative;
  cursor: pointer;
  margin-top: 22px;

  background: linear-gradient(
    90deg,
    rgba(0, 15, 45, 0.05) 0%,
    rgba(12, 70, 211, 0) 99.99%,
    rgba(217, 217, 217, 0) 100%
  );
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: all 0.5s linear;
  &:hover {
  }
  &.selected {
    ${Strip} {
      opacity: 1;
    }
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 15, 45, 0.05);
  margin-right: 16px;
  margin-left: 30px;
  color: rgba(0, 0, 0, 0.7);
`;

export default TabItem;
