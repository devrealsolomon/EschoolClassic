import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const LandingSection2 = () => {
  return (
    <Wrapper>
      <Title>Internet Community Available for Everyone.</Title>
      <Subtitle>
        This is an internet comunity for all schools in state across Nigeria.
        Access to our world-class online learning downloadable resources which
        can be downloaded and printed for use by teachers.
      </Subtitle>
      <Link to="/search">
        <CheckOutBtn>Checkout now</CheckOutBtn>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #010021;
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
  max-width: 643px;
  font-family: "Test Heldane Display", "Dm Serif Display";

  font-weight: 500;
  font-size: 64px;
  line-height: 80px;
  color: #ffffff;
  @media screen and (max-width: 800px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

const Subtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  max-width: 643px;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: -0.02em;
  margin: 30px 0;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
  color: #ffffff;
`;

const CheckOutBtn = styled.button`
  background: #ffffff;
  border-radius: 100px;
  padding: 14px 45px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  cursor: pointer;

  text-align: center;
  color: #010021;
  @media screen and (max-width: 800px) {
    padding: 10px 30px;
  }
`;

export default LandingSection2;
