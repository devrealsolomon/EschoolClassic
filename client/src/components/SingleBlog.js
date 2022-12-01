import React from "react";
import styled from "styled-components";
const SingleBlog = ({
  title,
  category,
  image,
  content,

  createdAt,
}) => {
  return (
    <Wrapper>
      <Name>
        <BlogImage src={image?.url} />
        <h1>{title}</h1>
      </Name>
      <Category>{category}</Category>
      <Description> {content}</Description>
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
  padding: 10px;
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
const BlogImage = styled.img`
  object-fit: cover;
  width: 50px;
  flex: 0 0 auto;
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
    overflow: hidden;
    max-lines: 1;
    line-height: 36px;
    text-overflow: ellipsis;

    color: rgba(20, 20, 20, 0.8);
  }
`;
const Category = styled.h1`
  height: 36px;

  font-family: "Moderat", "Dm Sans";
  font-style: normal;
  word-wrap: break-word;
  word-wrap: break-word;
  font-weight: 500;
  font-size: 16px;
  justify-self: center;
  line-height: 36px;
  /* identical to box height, or 225% */

  color: rgba(20, 20, 20, 0.8);
`;

const Description = styled.h1`
  height: 36px;
  justify-self: center;
  font-family: "Moderat", "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;

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
export default SingleBlog;
