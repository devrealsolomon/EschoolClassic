import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import InputWithLabel from "../../components/InputWithLabel";
import SignupButton from "../../components/SignupButton";
import Subtitle from "../../components/Subtitle";

import Title from "../../components/Title";

import { HiPhotograph } from "react-icons/hi";
import { updateUser } from "../../redux/admin/actions/userActions";
import { useIsMount } from "../../hooks/useIsMount";
// import { updateUser } from "../redux/actions/userActions";

const AddUserDetails = () => {
  const { user, loading, error } = useSelector((state) => state.updateUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profilePic, setprofilePic] = useState();

  const [title, setTitle] = useState();
  const [phone, setPhone] = useState();

  const handleProfile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setprofilePic(reader.result);
    };
  };

  const isMount = useIsMount();
  useEffect(() => {
    if (!isMount) {
      if (error) {
        alert(error);
      }
    }
    // eslint-disable-next-line
  }, [error]);
  useEffect(() => {
    if (!isMount) {
      if (user) {
        navigate("/admin");
      }
    }
    // eslint-disable-next-line
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !phone || !profilePic) alert("Kindly fill all the fields");
    else {
      const updates = {
        profilePic,
        phone,
        title,
      };
      dispatch(updateUser(updates));
    }
  };
  return (
    <Wrapper>
      <Form>
        <Title title="Welcome" />
        <Subtitle text="Add more details to your account" />

        <InputWithLabel
          placeholder="Phone number"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputWithLabel
          label="School address"
          placeholder="Your title e.g Educational consult"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Title2>Profile pic </Title2>
        <Label htmlFor="photo">
          <FileInput
            type="file"
            id="photo"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => handleProfile(e)}
          />
          <Icon id="photo">
            <HiPhotograph />
          </Icon>
        </Label>

        <SignupButton
          title={loading ? "Updating account...." : "Update Account"}
          disabled={loading}
          onClick={(e) => handleSubmit(e)}
        />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow-y: scroll;
  flex-direction: column;
  padding: 30px 0;
`;
const Form = styled.form`
  display: flex;
  width: 456px;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  cursor: pointer;
  display: flex;
  position: relative;
  margin-bottom: 20px;
`;
const Icon = styled.div`
  color: #000f2d;
  margin-left: 10px;
`;
const Title2 = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 28px;

  color: #141414;
`;
const FileInput = styled.input`
  display: none;
  background: #ffffff;
  border: 1.2px solid #f1f1f1;
  border-radius: 8px;
  align-self: flex-start;
  padding: 12px;

  width: 100%;

  margin-bottom: 20px;
  &:invalid {
    border-color: red;
  }
`;
export default AddUserDetails;
