import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputWithLabel from "../components/InputWithLabel";

import SignupButton from "../components/SignupButton";
import Subtitle from "../components/Subtitle";
import TextAreaWithLabel from "../components/TextAreaWithLabel";

import { useIsMount } from "../hooks/useIsMount";
import { HiPhotograph } from "react-icons/hi";

import Navbar from "../components/FullNavbar";
import { createEvent } from "../redux/actions/eventActions";

const CreateEvent = () => {
  const { event, loading, error } = useSelector((state) => state.event);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [event_image, setEventImage] = useState();
  const [event_date, setEventDate] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setEventImage(reader.result);
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
      if (event) {
        alert("Event created successfully");
        navigate("/events");
      }
    }
    // eslint-disable-next-line
  }, [event]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !title || !category || !event_date || !event_image)
      alert("Kindly fill all the fields");
    else {
      const event = {
        event_image,
        event_date,
        title,
        category,
        description,
      };
      dispatch(createEvent(event));
    }
  };
  return (
    <Wrapper>
      <Navbar />
      <Form>
        <Title>Create Event</Title>
        <Subtitle text="Events posted will be visible to all hence the information will reach many" />

        <InputWithLabel
          label="Event Category"
          placeholder="Category e.g. sports"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <InputWithLabel
          label="Event title"
          placeholder="Enter Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextAreaWithLabel
          label="Event description"
          placeholder="Describe what the event entails"
          value={description}
          rows="7"
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputWithLabel
          label="Event date"
          type="date"
          placeholder="Enter Event date"
          value={event_date}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <Title2>Event image</Title2>
        <Label htmlFor="photo">
          <FileInput
            type="file"
            id="photo"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => handleImage(e)}
          />
          <Icon id="photo">
            <HiPhotograph />
          </Icon>
        </Label>

        <SignupButton
          title={loading ? "Creating  event...." : "Create Event"}
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
  overflow-x: hidden;
  flex-direction: column;
  padding: 30px 0;
`;
const Title = styled.h1`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  display: flex;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
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
export default CreateEvent;
