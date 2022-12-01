import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import InputWithLabel from "../components/InputWithLabel";
import Select from "../components/Select";
import SignupButton from "../components/SignupButton";
import Subtitle from "../components/Subtitle";
import TextAreaWithLabel from "../components/TextAreaWithLabel";
import Title from "../components/Title";
import { useIsMount } from "../hooks/useIsMount";
import { HiPhotograph } from "react-icons/hi";
import { updateSchool } from "../redux/actions/schoolActions";

const AddSchoolDetails = () => {
  const { school, loading, error } = useSelector((state) => state.updateSchool);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ownership, setOwnerShip] = useState("Public");
  const [type, setType] = useState("Nursery");
  const [motto, setMotto] = useState();
  const [logo, setLogo] = useState();
  const [owner_name, setOwnerName] = useState("");
  const [banner, setBanner] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState("");
  const handleLogo = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setLogo(reader.result);
    };
  };
  const handleBanner = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBanner(reader.result);
    };
  };
  const ownerShipOptions = ["Private", "Public"];
  const levelOptions = ["Primary", "Nursery", "Secondary"];
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
      if (school) {
        navigate("/");
      }
    }
    // eslint-disable-next-line
  }, [school]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ownership || !motto || !address || !banner || !logo)
      alert("Kindly fill all the fields");
    else {
      const updates = {
        logo,
        banner,
        owner_name,
        motto,
        address,
        type,
        ownership,
        description,
      };
      dispatch(updateSchool(updates));
    }
  };
  return (
    <Wrapper>
      <Form>
        <Title title="Welcome" />
        <Subtitle text="Update school details" />
        <Select
          onChange={(e) => setOwnerShip(e.target.value)}
          value={ownership}
          options={ownerShipOptions}
          label="Set Ownership"
        />
        <Select
          onChange={(e) => setType(e.target.value)}
          value={type}
          options={levelOptions}
          label="Set school type"
        />
        {ownership === "Private" && (
          <InputWithLabel
            label="School's owner name"
            placeholder="School's owner name"
            value={owner_name}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        )}
        <InputWithLabel
          label="School address"
          placeholder="School address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <InputWithLabel
          label="School motto"
          placeholder="School motto"
          value={motto}
          onChange={(e) => setMotto(e.target.value)}
        />

        <TextAreaWithLabel
          label="School description(optional"
          placeholder="Enter a brief description of your school"
          value={description}
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Title2>School logo</Title2>
        <Label htmlFor="photo">
          <FileInput
            type="file"
            id="photo"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => handleLogo(e)}
          />
          <Icon id="photo">
            <HiPhotograph />
          </Icon>
        </Label>
        <Title2>School banner(optional)</Title2>
        <Label htmlFor="photo2">
          <FileInput
            type="file"
            id="photo2"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => handleBanner(e)}
          />
          <Icon id="photo2">
            <HiPhotograph />
          </Icon>
        </Label>

        <SignupButton
          title={loading ? "Updating school...." : "Update School"}
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
export default AddSchoolDetails;
