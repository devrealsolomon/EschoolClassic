import React from "react";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import GreenButton from "./GreenButton";

import image6 from "./image6.jpg";
const InfoModal = () => {
  return (
    <Card>
      <Image src={image6} />
      <HorizontalWrapper>
        <Title>Name</Title>
        <Content>Brian Bett</Content>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Title>Class</Title>
        <Content>Junior Secondary One</Content>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Title>Teachers ID</Title>
        <Content>ED59673</Content>
      </HorizontalWrapper>

      <HorizontalWrapper>
        <Title>Email Address</Title>
        <Content>brian@gmail.com</Content>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Title>Contact Address</Title>
        <Content>19, Olopa Street. Ogun</Content>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Title>Phone</Title>
        <Content>0904099000</Content>
      </HorizontalWrapper>
      <Buttons>
        <GreenButton title="Download Info" />
        <DeleteButton title="Delete User" />
      </Buttons>
    </Card>
  );
};

const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 45px 39px 32px;
  display: flex;
  z-index: 1000;
  width: fit-content;
  flex-direction: column;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
`;
const Title = styled.h2`
  font-family: "Moderat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;

  color: #4a4a4a;
`;

const Content = styled.h1`
  font-family: "Dm Sans";
  font-style: bold;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;

  color: #000000;
`;
const Image = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e5e5e5;
  align-self: center;
`;
export default InfoModal;
