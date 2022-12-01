import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../components/Navbar";

import TableTitle from "../components/TableTitle";
import Tabs from "../components/Tabs";
import Teacher from "../components/Teacher";

import { teachers } from "../testData/teachers";

const Teachers = () => {
  const userInfo = useSelector((state) => state.signInInfo);
  const titles = [
    "Teacher Name",
    "Teacher ID",
    "Email Address",
    "Date Added",
    "Actions",
  ];

  const navigate = useNavigate();
  if (!userInfo?.userInfo?.school) {
    navigate("/landing_page");
  }
  return (
    <Wrapper>
      <ContentWrapper>
        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
        <TeachersWrapper>
          <Navbar />
          <div className="container">
            <Title>Teachers</Title>
            <Button>Add a Teacher</Button>
          </div>

          <Titles>
            {titles.map((tableTitle) => {
              return <TableTitle title={tableTitle} key={tableTitle} />;
            })}
          </Titles>
          <TeachersList>
            {teachers.map((teacher) => {
              return <Teacher key={teacher.createdAt} {...teacher} />;
            })}
          </TeachersList>
        </TeachersWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  position: relative;
`;
const Button = styled.button`
  width: 167px;
  height: 50px;

  background: #4bb543;

  border: transparent;
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.5s linear;
  &:hover {
    border-radius: 26px;
    color: #e5e5e5;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-family: "Dm Sans";
  margin-top: 15px;

  font-weight: 700;
  font-size: 24px;
  line-height: 48px;

  color: #0d0d2b;
`;
const TeachersWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  padding: 30px 88px 30px 37px;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  .container {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
  }
`;

const TeachersList = styled.div`
  display: flex;
  flex-direction: column;
`;
const Titles = styled.div`
  width: 100%;

  margin-top: 30px;
  display: grid;
  margin-bottom: 30px;
  justify-items: center;

  grid-template-columns: repeat(5, 1fr);
`;
const TabsWrapper = styled.div`
  width: 340px;
`;

export default Teachers;
