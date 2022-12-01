import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GreenButton from "../../components/GreenButton";

import Navbar from "../../components/admin/Navbar";
import Tabs from "../../components/adminTabs";
import TableTitle from "../../components/TableTitle";

import School from "../../components/School";
import { Link, useNavigate } from "react-router-dom";

import Loader from "../../components/Loader";
import { getAllSchools } from "../../redux/admin/actions/schoolActions";

const AdminOverView = () => {
  const userInfo = useSelector((state) => state.adminSignInInfo);
  const titles = [
    "School Name",
    "Email Address",
    "School ID",
    "Date Joined",
    "Action",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSchools());
    // eslint-disable-next-line
  }, []);
  const { schools, loading } = useSelector((state) => state.allSchools);

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
        <Greeting>
          Hey there {userInfo?.userInfo?.user?.username} <Emoji>👋</Emoji>
        </Greeting>
        <HorizontalWrapper>
          <Subtitle>Here's an overview of ESchool</Subtitle>
          <Link to="/schools">
            <GreenButton title="View comprehensive list" />
          </Link>
        </HorizontalWrapper>

        <Cards>
          <Schools>
            <Title>Registered Schools</Title>
            <Count>1005</Count>
          </Schools>
          <ManagementOrTraffic>
            <GrayTitle>Registered Management</GrayTitle>
            <BlackCount>68</BlackCount>
            <Decreased>Decreased by 9%</Decreased>
          </ManagementOrTraffic>
          <ManagementOrTraffic>
            <GrayTitle>Site traffic</GrayTitle>
            <BlackCount>199</BlackCount>
            <Increased>+ Increased by 3.2%</Increased>
          </ManagementOrTraffic>
        </Cards>
        <Title2>Recent Schools</Title2>
        <Titles>
          {titles.map((title) => (
            <TableTitle title={title} key={title} />
          ))}
        </Titles>
        <SchoolsWrapper>
          {loading ? (
            <Loader />
          ) : (
            <SchoolsList>
              {schools?.map((school) => (
                <School key={school.id} {...school} />
              ))}
            </SchoolsList>
          )}
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

const Schools = styled.div`
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
const ManagementOrTraffic = styled.div`
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
const Decreased = styled.h1`
  height: 21px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  margin-top: 13px;
  /* identical to box height, or 175% */

  color: rgba(255, 0, 0, 0.7);
`;
const Increased = styled.h3`
  height: 21px;
  left: 1068px;
  top: 336px;
  margin-top: 13px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  line-height: 21px;

  color: #4bb543;
`;
const Title2 = styled.h1`
  display: flex;
  align-items: center;
  font-family: "Dm Sans";
  margin: 40px 0 25px;

  font-weight: 700;
  font-size: 24px;
  line-height: 48px;

  color: #0d0d2b;
`;
const SchoolsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  /* margin-left: 32px; */

  /* padding-right: 88px; */
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
const Title = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  font-family: "Dm Sans ";
  color: #ffffff;
`;
const GrayTitle = styled(Title)`
  color: rgba(0, 0, 0, 0.9);
  font-style: bold;
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

export default AdminOverView;
