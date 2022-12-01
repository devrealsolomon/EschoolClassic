import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
const SearchCategory = ({ title }) => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Title>{title}</Title>
        </div>
        <Icon>
          <IoIosArrowForward />
        </Icon>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  transition: all 0.6s linear;
  flex-direction: column;
  &:hover {
    opacity: 0.8;
  }
`;

const Icon = styled.div`
  color: #6a6a72;
  margin-right: 13px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
`;
const Title = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #6a6a72;
`;

export default SearchCategory;
