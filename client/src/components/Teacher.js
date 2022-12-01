import React from "react";
import styled from "styled-components";
const Teacher = ({ name, email, createdAt, id }) => {
  return (
    <Wrapper>
      <Name>
        <ProfilePic>{name.substring(0, 1)}</ProfilePic>
        <h1>{name}</h1>
      </Name>
      <Email>{email}</Email>
      <TeacherId> {id}</TeacherId>
      <DateJoined>{new Date(createdAt).toDateString()}</DateJoined>
      <ViewInfo>View Info</ViewInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 74px;
  background: #f9f9f9;
  margin-bottom: 6px;
  justify-content: space-between;

  cursor: pointer;
  transition: all 0.5s ease-in-out;
  /* &:hover {
    box-shadow: 1px 3px 10px #efefef;
    transform: scale(1.03);
  } */
  border-radius: 10px;
  align-items: center;
`;
const ProfilePic = styled.div`
  width: 50px;
  height: 50px;
  background: #f59e0b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-left: 20px;
  h1 {
    height: 36px;

    font-family: "Moderat", "Dm Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 36px;

    color: rgba(20, 20, 20, 0.8);
  }
`;
const Email = styled.h1`
  height: 36px;

  font-family: "Moderat", "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  justify-self: center;
  line-height: 36px;
  /* identical to box height, or 225% */

  color: rgba(20, 20, 20, 0.8);
`;

const TeacherId = styled.h1`
  height: 36px;
  justify-self: center;
  font-family: "Moderat", "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;

  color: rgba(20, 20, 20, 0.8);
`;
const DateJoined = styled.h1`
  height: 36px;
  justify-self: center;

  font-family: "Moderat", "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;

  color: rgba(20, 20, 20, 0.8);
`;

const ViewInfo = styled.button`
  background: rgba(14, 86, 63, 0.1);
  border-radius: 9px;
  padding: 12px 20px;
  font-weight: 500;
  font-family: "Dm Serif Display";
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.6s linear;
  width: fit-content;
  height: fit-content;
  color: #0e563f;
  justify-self: center;
  &:hover {
    border-radius: 18px;
  }
`;
export default Teacher;
