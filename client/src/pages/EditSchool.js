import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import InputWithLabel from "../components/InputWithLabel";
import Navbar from "../components/Navbar";

import Tabs from "../components/Tabs";
import { useIsMount } from "../hooks/useIsMount";
import { updateSchool } from "../redux/actions/schoolActions";

const EditSchool = () => {
  const schoolDetails = useSelector((state) => state.signInInfo.userInfo);
  const [school_name, setName] = useState(schoolDetails?.school?.school_name);
  const [email, setEmail] = useState(schoolDetails?.school?.email);
  const [address, setAddress] = useState(schoolDetails?.school?.address);
  const [phone, setPhone] = useState(schoolDetails?.school?.phone);
  const [logo, setLogo] = useState(schoolDetails?.school?.logo?.url);
  const [banner, setBanner] = useState(schoolDetails?.school?.banner?.url);
  const isMount = useIsMount();
  const dispatch = useDispatch();
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
  const { school, loading, error } = useSelector((state) => state.updateSchool);
  useEffect(() => {
    if (!isMount) {
      if (error) {
        alert(error);
      }
    }
    // eslint-disable-next-line
  }, [error]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isMount) {
      if (school) {
        alert("Details updated successfully!");
        navigate("/");
      }
    }
    // eslint-disable-next-line
  }, [school]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !phone || !address || !logo)
      alert("Kindly fill all the fields");
    else {
      const updates = {
        logo,
        banner,
        email,
        address,
        phone,
        school_name,
      };
      dispatch(updateSchool(updates));
    }
  };
  return (
    <Wrapper>
      <TabsWrapper>
        <Tabs />
      </TabsWrapper>
      <EditWrapper>
        <Navbar />
        <HorizontalWrapper>
          <ContentWrapper>
            <EditPreview>
              <Title>Edit School</Title>
              <PreviewBtn>Preview</PreviewBtn>
            </EditPreview>
            <InputWithLabel
              label="School Name"
              onChange={(e) => setName(e.target.value)}
              value={school_name}
            />
            <InputWithLabel
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="Email
            Address"
            />
            <Social>
              <HorizontalWrapper>
                <Icon>
                  <FaTwitter />
                </Icon>
                <Subtitle>Twitter</Subtitle>
              </HorizontalWrapper>
              <ConnectBtn>Connect</ConnectBtn>
            </Social>
            <InputWithLabel
              label="School Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <InputWithLabel
              label="School Hotline"
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <SaveBtn disabled={loading} onClick={(e) => handleSubmit(e)}>
              {loading ? "Updating ..." : "Save Updates"}
            </SaveBtn>
          </ContentWrapper>
          <Images>
            <div>
              <Title2>School Logo</Title2>
              <Label htmlFor="photo2">
                <FileInput
                  type="file"
                  id="photo2"
                  accept=".png,.jpg,.jpeg"
                  onChange={(e) => handleLogo(e)}
                />

                <SchoolLogo id="photo2" src={logo}></SchoolLogo>
              </Label>
            </div>
            <div>
              <Title2> School Banner</Title2>
              <Label htmlFor="photo">
                <FileInput
                  type="file"
                  id="photo"
                  accept=".png,.jpg,.jpeg"
                  onChange={(e) => handleBanner(e)}
                />
                <Banner id="photo" src={banner}></Banner>
              </Label>
            </div>
          </Images>
        </HorizontalWrapper>
      </EditWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
`;
const TabsWrapper = styled.div`
  width: 340px;
  height: 100vh;
`;
const ContentWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const EditWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  margin-left: 52px;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-right: 88px;
  flex-direction: column;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditPreview = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
const PreviewBtn = styled.div`
  font-weight: 500;
  font-size: 12px;
  height: fit-content;
  line-height: 24px;
  text-align: center;
  display: flex;
  font-family: "Dm Sans";
  cursor: pointer;
  border: 1px solid #2c3c5d;
  padding: 12px 20px;
  border-radius: 8px;
  color: #2c3c5d;
`;
const Social = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  &.twitter {
    display: flex;
    align-items: center;
    width: fit-content;
    opacity: 0;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-right: 12px;
  color: #0f49c0;
  background: rgba(15, 73, 192, 0.05);
`;
const Subtitle = styled.h3`
  font-family: "DM Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;
const SaveBtn = styled.button`
  width: 100%;
  background: #0e563f;
  cursor: pointer;
  color: white;
  border-radius: 8px;
  border: none;
  transition: all 0.6s linear;
  &:hover {
    border-radius: 16px;
  }
  padding-top: 16px;
  padding-bottom: 16px;
`;
const Images = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConnectBtn = styled.button`
  background: #0f49c0;
  border-radius: 8px;
  cursor: pointer;
  height: fit-content;
  padding: 8px 14px;
  border: none;
  font-size: 142x;
  font-family: "Dm Sans";
  color: #e5e5e5;
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 64px;
  font-family: "Dm Sans";

  color: #000000;
`;
const Title2 = styled.h1`
  font-family: "Dm Serif Display";
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 12px;
  color: #000000;
`;
const Label = styled.label`
  cursor: pointer;
  display: flex;
  position: relative;
  margin-bottom: 20px;
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
const SchoolLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 42px;
  margin-top: 12px;
  border: 4px solid #fff;
  cursor: pointer;
  object-fit: cover;
`;
const Banner = styled.img`
  background: #f7f8f9;
  border-radius: 10px;
  margin-top: 12px;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
export default EditSchool;
