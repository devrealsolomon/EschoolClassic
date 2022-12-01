import React from "react";

import styled from "styled-components";

const School = ({
  school_name,
  email,
  createdAt,
  _id,
  logo,
  is_featured,
  setShowModal,
  setId,
  setSchoolName,
  setIsFeatured,
  has_activated,
  setHasActivated,
}) => {
  const handleClick = () => {
    setShowModal(true);
    setSchoolName(school_name);
    setId(_id);
    setIsFeatured(is_featured);
    setHasActivated(has_activated);
  };

  return (
    <Wrapper>
      <Name>
        <ProfilePic src={logo?.url} />
        <h1>{school_name}</h1>
      </Name>
      <Email>{email}</Email>
      <SchoolId> {_id}</SchoolId>
      <DateJoined>{new Date(createdAt).toDateString()}</DateJoined>
      <ShowInfo onClick={handleClick}>
        <ViewInfo>View Info</ViewInfo>
      </ShowInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  padding: 10px;
  position: relative;
  grid-template-columns: repeat(5, 1fr);
  /* height: 74px; */
  height: max-content;
  background: #f9f9f9;
  margin-bottom: 6px;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  /* &:hover {
    box-shadow: 1px 3px 10px #efefef;
    transform: scale(1.03);
  } */
  padding: 14px 0;
  border-radius: 10px;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  background: #f59e0b;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  flex: 0 0 auto;
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
    line-height: 36px;
    overflow: hidden;

    color: rgba(20, 20, 20, 0.8);
  }
`;

const ShowInfo = styled.div`
  position: relative;
  justify-self: center;
`;

const Email = styled.h1`
  height: 36px;

  font-family: "Moderat", "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  justify-self: center;
  line-height: 36px;
  /* identical to box height, or 225% */

  color: rgba(20, 20, 20, 0.8);
`;

const SchoolId = styled.h1`
  height: 36px;
  justify-self: center;
  font-family: "Moderat", "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;

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
export default School;
