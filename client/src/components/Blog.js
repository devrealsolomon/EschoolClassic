import React from "react";
import styled from "styled-components";
const SingleBlog = ({ image, title, content, createdAt }) => {
  return (
    <Wrapper>
      <Image src={image?.url} />

      <Title>{title}</Title>
      <Time>
        <h1>{new Date(createdAt).toDateString()}</h1>
        <div></div>
        <h2>6 min read</h2>
      </Time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  width: 398px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
  transition: all 0.6s linear;
  border-radius: 10px;
  box-shadow: 3px 5px 13px #fff;
  &:hover {
    box-shadow: 15px 12px 24px #fff;
  }
`;
const Image = styled.img`
  border: 4px solid #fff;
  width: 100%;
  height: 291px;
  object-fit: center;
  border-radius: 10px;
`;
const Title = styled.h2`
  font-family: "Test Heldane Display", "Dm Serif Display";
  font-style: bold;

  padding: 0 10px;
  font-weight: 500;
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  line-height: 40px;
  letter-spacing: 0.04em;
  color: #141414;
  margin: 30px 0 15px;
`;

const Time = styled.div`
  display: flex;

  padding: 0 10px 12px;
  align-items: center;
  text-align: center;
  h1 {
    font-family: "DM Sans";
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    color: #141414;
  }
  div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #141414;

    margin: 0 10px;
  }
  h2 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    /* identical to box height, or 200% */

    text-align: right;

    color: #141414;
  }
`;

export default SingleBlog;
