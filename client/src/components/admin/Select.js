import React from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
const Select = ({ label, onChange, options, value }) => {
  // const options = useSelector((state) => state.subjects?.subjects);
  return (
    <Wrapper>
      <Label>{label}</Label>
      <CustomSelect onChange={onChange} value={value}>
        <option>SELECT</option>
        {options?.map((option) => {
          return (
            <option key={option._id ? option._id : option}>
              {option.name ? option.name : option}
            </option>
          );
        })}
      </CustomSelect>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CustomSelect = styled.select`
  background: white;
  width: 456px;
  border-radius: 10px;
  padding: 7px;
  z-index: 1000;
  margin-bottom: 10px;
  option {
    font-size: 16px;
  }
`;
const Label = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height, or 200% */

  color: #141414;
`;

export default Select;
