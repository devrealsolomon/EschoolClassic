import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const LandingSection3 = () => {
  return (
    <Wrapper>
      <Title>Find the closest school near you.</Title>
      <Subtitle>
        Schools can celebrate their accomplishments, showcase their challenges
        to interested stakeholders like former pupils, inform parents on their
        events and activities calendar for the year as well as let the world
        know of their future plans.
      </Subtitle>
      <Link to="/search">
        <GetStartedBtn>Get started</GetStartedBtn>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: rgba(1, 0, 33, 0.05);
  border-radius: 40px;
  padding: 105px 55px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    padding: 50px 40px;
    border-radius: 20px;
  }
`;

const Title = styled.h1`
  max-width: 508px;
  font-family: "Test Heldane Display", "Dm Serif Display";

  font-weight: 500;
  font-size: 64px;
  line-height: 80px;
  color: #010021;
  @media screen and (max-width: 800px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

const Subtitle = styled.h2`
  margin: 30px 0;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  max-width: 729px;
  line-height: 40px;
  @media screen and (max-width: 800px) {
    font-size: 17px;
    line-height: 32px;
  }
  /* or 200% */

  letter-spacing: -0.02em;

  color: #010021;
`;

const GetStartedBtn = styled.button`
  color: #ffffff;
  border-radius: 100px;
  padding: 14px 45px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  line-height: 32px;

  text-align: center;

  background: #010021;
  @media screen and (max-width: 800px) {
    padding: 10px 30px;
  }
`;

export default LandingSection3;
