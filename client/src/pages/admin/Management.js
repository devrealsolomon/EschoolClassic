import React, { useEffect } from "react";
// import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GreenButton from "../../components/GreenButton";
import Navbar from "../../components/admin/Navbar";
import SingleManagement from "../../components/Management";
import Tabs from "../../components/adminTabs";
import TableTitle from "../../components/TableTitle";
import { schools } from "../../testData/schools";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminManagement = () => {
  const titles = [
    "Manager Name",
    "School ",
    "Email Address",
    "Date Joined",
    "Action",
  ];
  const userInfo = useSelector((state) => state.adminSignInInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo?.userInfo?.user) {
      navigate("/admin/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <TabsWrapper>
        <Tabs />
      </TabsWrapper>
      <OverViewWrapper>
        <Navbar />
        <HorizontalWrapper>
          <Title>Management</Title>
          <GreenButton title="Download CSV" />
        </HorizontalWrapper>

        <Titles>
          {titles.map((title) => (
            <TableTitle title={title} key={title} />
          ))}
        </Titles>
        <SchoolsWrapper>
          <SchoolsList>
            {schools.map((school) => (
              <SingleManagement key={school.id} {...school} />
            ))}
          </SchoolsList>
        </SchoolsWrapper>
      </OverViewWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
`;
const TabsWrapper = styled.div`
  width: 340px;
  height: 100vh;
`;

const OverViewWrapper = styled.div`
  width: 100%;
  height: 100% !important;

  display: flex;
  margin-left: 37px;
  margin-right: 88px;
  flex-direction: column;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: "Dm Sans";
  margin-top: 10px;

  font-weight: 700;
  font-size: 24px;
  line-height: 48px;

  font-family: "Dm Sans";
  color: #0d0d2b;
`;

const SchoolsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;

  padding-top: 30px;
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

const SchoolsList = styled.div`
  display: flex;
  flex-direction: column;
`;
const Titles = styled.div`
  width: 100%;

  margin-top: 15px;
  display: grid;
  margin-bottom: 15px;
  justify-items: center;

  grid-template-columns: repeat(5, 1fr);
`;

export default AdminManagement;
