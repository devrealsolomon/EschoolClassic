import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchSchools } from "../redux/actions/schoolActions";
const Searchbar = () => {
  const [school, setSchool] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchSchools(school));
    // eslint-disable-next-line
  }, [school]);
  return (
    <Wrapper>
      <SearchContainer>
        <Icon>
          <AiOutlineSearch />
        </Icon>
        <Input
          placeholder="Secondary schools"
          onChange={(e) => setSchool(e.target.value)}
        />
      </SearchContainer>
      <SchoolsCount>
        <Icon>
          <GrLocation />
        </Icon>
        <h1>6737</h1>
      </SchoolsCount>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 640px;
  height: 55px;
  display: flex;
  z-index: 1000;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  color: #6a6a72;
  margin-right: 13px;
`;

const Input = styled.input`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  background: inherit;
  &:focus {
    outline: none;
  }
  border: none;

  line-height: 30px;
  color: #141414;
  &::placeholder {
    color: #6a6a72;
  }
`;
const SchoolsCount = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 25px;
  background: #ececee;
  padding-left: 25px;
  border-radius: 8px;
  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    /* identical to box height, or 214% */

    color: #6a6a72;
  }
`;
const SearchContainer = styled.div`
  background: #ececee;
  opacity: 0.6;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  padding: 0 21px;
`;

export default Searchbar;
