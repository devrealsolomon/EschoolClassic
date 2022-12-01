import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import GreenButton from "../components/GreenButton";

import Navbar from "../components/Navbar";

import Tabs from "../components/Tabs";

const OverView = () => {
  const userInfo = useSelector((state) => state.signInInfo);
  const adminInfo = useSelector((state) => state.adminSignInInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo?.userInfo?.school) {
      navigate("/landing_page");
    } else if (adminInfo?.userInfo?.user) {
      navigate("/admin");
    }
    // eslint-disable-next-line
  }, []);

  // const users = useSelector((state) => state.users);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers());
  //   // eslint-disable-next-line
  // }, []);
  // if (users.loading) {
  //   return <ProgressBar />;
  // }
  return (
    <Wrapper>
      <TabsWrapper>
        <Tabs />
      </TabsWrapper>
      <OverViewWrapper>
        <Navbar />

        <Greeting>
          Hey there {userInfo?.userInfo?.school?.school_name} <Emoji>👋</Emoji>
        </Greeting>
        <HorizontalWrapper>
          <Subtitle>Here's an overview of your school</Subtitle>
          <GreenButton title="View comprehensive list" />
          <Link to="/payment">
            <GreenButton title="Make Payment" />
          </Link>
        </HorizontalWrapper>

        <Cards>
          <Students>
            <Title>Students</Title>
            <Count>1005</Count>
          </Students>
          <ManagementOrTeachers>
            <GrayTitle>Teachers</GrayTitle>
            <BlackCount>199</BlackCount>
          </ManagementOrTeachers>
          <ManagementOrTeachers>
            <GrayTitle>Management</GrayTitle>
            <BlackCount>68</BlackCount>
          </ManagementOrTeachers>
        </Cards>
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

const Emoji = styled.div`
  color: darkgoldenrod;
`;
const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Greeting = styled.div`
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
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  margin-top: 23px;
`;

const Subtitle = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  display: flex;
  align-items: center;

  color: #000000;
`;

const Students = styled.div`
  /* width: 320px; */
  height: 140px;

  background: #0e563f;
  border-radius: 10px;
  padding-left: 23px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 23px;
  box-shadow: 1px 3px 8px #000f2d;
`;
const ManagementOrTeachers = styled.div`
  /* width: 320px; */
  height: 140px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-left: 23px;
  box-shadow: 4px, 10px, 10px black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin-right: 23px; */
  background: #fff;
  box-shadow: 1px 3px 8px #ffffff;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  font-family: "Dm Sans ";

  color: #ffffff;
`;
const GrayTitle = styled(Title)`
  color: rgba(0, 0, 0, 0.7);
`;
const Count = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  font-family: "Dm Sans ";

  color: #ffffff;
`;
const BlackCount = styled(Count)`
  color: #000;
`;

export default OverView;
