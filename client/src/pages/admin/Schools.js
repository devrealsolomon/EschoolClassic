import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GreenButton from "../../components/GreenButton";
import Navbar from "../../components/admin/Navbar";
import Tabs from "../../components/adminTabs";
import TableTitle from "../../components/TableTitle";

import School from "../../components/School";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/Loader";
import DeleteButton from "../../components/DeleteButton";
import { useIsMount } from "../../hooks/useIsMount";
import {
  getAllSchools,
  updateSchool,
} from "../../redux/admin/actions/schoolActions";

const Schools = () => {
  // const userInfo = useSelector((state) => state.signInInfo);
  const titles = [
    "School Name",
    "Email Address",
    "School ID",
    "Date Joined",
    "Action",
  ];
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSchools(search));
    // eslint-disable-next-line
  }, [search]);
  const { schools, loading } = useSelector((state) => state.allSchools);

  const update = useSelector((state) => state.updateSchool);
  const userInfo = useSelector((state) => state.adminSignInInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo?.userInfo?.user) {
      navigate("/admin/login");
    }
    // eslint-disable-next-line
  }, []);
  const handleClick = () => {
    const updates = { is_featured: is_featured ? "false" : "true" };
    dispatch(updateSchool(_id, updates));
  };
  const activateSchool = () => {
    const updates = { has_activated: has_activated ? "false" : "true" };
    dispatch(updateSchool(_id, updates));
  };
  const [is_featured, setIsFeatured] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [school_name, setSchoolName] = useState("");
  const [_id, setId] = useState("");
  const [has_activated, setHasActivated] = useState();

  const isMount = useIsMount();
  useEffect(() => {
    if (!isMount) {
      if (update.error) {
        alert(update.error);
      }
    }
    // eslint-disable-next-line
  }, [update.error]);
  useEffect(() => {
    if (!isMount) {
      if (update.school) {
        alert("School updated succesfully");
        setShowModal(false);
        dispatch(getAllSchools());
      }
    }
    // eslint-disable-next-line
  }, [update.school]);
  return (
    <Wrapper>
      <TabsWrapper>
        <Tabs />
      </TabsWrapper>
      <OverViewWrapper>
        <Navbar />
        <HorizontalWrapper>
          <Title>Schools</Title>
          <InputWrapper>
            <Input
              placeholder="Search school by name"
              onChange={(e) => setSearch(e.target)}
            />
          </InputWrapper>
          <GreenButton title="Download CSV" />
        </HorizontalWrapper>

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
                <School
                  key={school._id}
                  {...school}
                  setIsFeatured={setIsFeatured}
                  setSchoolName={setSchoolName}
                  setShowModal={setShowModal}
                  setId={setId}
                  setHasActivated={setHasActivated}
                />
              ))}
            </SchoolsList>
          )}
        </SchoolsWrapper>
      </OverViewWrapper>
      {showModal && (
        <CardWrapper onClick={() => setShowModal(false)}>
          <Card>
            <Title>{school_name}</Title>
            <GreenButton
              disabled={update.loading}
              title={has_activated ? "DeActivate" : "Activate"}
              onClick={activateSchool}
            />
            <Buttons>
              <GreenButton
                disabled={update.loading}
                title={is_featured ? "Unfeature" : "Feature"}
                onClick={handleClick}
              />
              <DeleteButton title="Delete School" />
            </Buttons>
          </Card>
        </CardWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
  position: relative;
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
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  z-index: 1000;
`;
const CardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  position: absolute;
`;
const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 39px;
  display: flex;
  margin: auto;
  z-index: 9000;
  width: fit-content;
  height: max-content;
  position: absolute;
  right: 100px;
  bottom: 0;
  top: 0;
  flex-direction: column;
`;
const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputWrapper = styled.div`
  border-radius: 40px;
  width: 40%;
  margin: 0 auto;
  background: white;
`;
const Input = styled.input`
  padding: 20px;
  border-radius: 40px;
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
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

export default Schools;
