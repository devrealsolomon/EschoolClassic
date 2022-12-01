import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
const LandingSection4 = () => {
  return (
    <Wrapper>
      <Title>Subscribe to our weekly newsletter</Title>
      <Subtitle>
        Don't miss out on health updates! Dont worry we will not spam you.
      </Subtitle>
      <InputWrapper>
        {/* <Link to="/"> */}
        <SubscribeBtn>Subscribe</SubscribeBtn>
        {/* </Link> */}
        <Input placeholder="Enter your email address" />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #010021;
  border-radius: 20px;
  padding: 105px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding: 55px 40px;
  }
`;

const Title = styled.h1`
  font-family: "Test Heldane Display", "Dm Sans";

  font-weight: 400;
  font-size: 50px;
  line-height: 70px;

  color: #ffffff;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    line-height: 42px;
  }
`;

const Subtitle = styled.h2`
  margin: 4px 0 25px 0;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 800px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

const SubscribeBtn = styled.button`
  color: #ffffff;
  border-radius: 100px;
  padding: 14px 45px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  align-items: center;
  background: #010021;
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 4px;
  bottom: 4px;
  @media screen and (max-width: 800px) {
    padding: 10px 20px;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  background: #ffff;
  max-width: 520px;
  border-radius: 100px;
  z-index: 100;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border: none;
  padding: 23px 38px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 800px) {
    padding: 18px 24px;
  }
`;

export default LandingSection4;
