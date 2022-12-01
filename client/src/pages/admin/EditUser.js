import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import InputWithLabel from "../../components/InputWithLabel";
import Navbar from "../../components/admin/Navbar";
import Tabs from "../../components/adminTabs";
import { useIsMount } from "../../hooks/useIsMount";

import { useNavigate } from "react-router-dom";
import { updateUser } from "../../redux/admin/actions/userActions";
const EditUser = () => {
  const userDetails = useSelector((state) => state.adminSignInInfo?.userInfo);

  const navigate = useNavigate();
  const [username, setName] = useState(userDetails?.user?.username);
  const [email, setEmail] = useState(userDetails?.user?.email);
  const [title, setTitle] = useState(userDetails?.user?.title);
  const [phone, setPhone] = useState(userDetails?.user?.phone);
  const [profilePic, setprofilePic] = useState(
    userDetails?.user?.profilePic?.url
  );
  const isMount = useIsMount();
  const dispatch = useDispatch();
  const handleprofilePic = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setprofilePic(reader.result);
    };
  };
  const userInfo = useSelector((state) => state.adminSignInInfo);
 useEffect(() => {
   if (!userInfo?.userInfo?.user) {
     navigate("/admin/login");
   }
   // eslint-disable-next-line
 }, []);
  const { user, loading, error } = useSelector((state) => state.updateUser);
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
        alert("Details updated successfully!");
        navigate("/admin");
      }
    }
    // eslint-disable-next-line
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !phone || !title) alert("Kindly fill all the fields");
    else {
      const updates = {
        profilePic,
        email,
        title,
        phone,
        username,
      };
      dispatch(updateUser(updates));
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
              <Title>Edit Profile</Title>
              <PreviewBtn>Preview</PreviewBtn>
            </EditPreview>
            <InputWithLabel
              label="Name"
              onChange={(e) => setName(e.target.value)}
              value={username}
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
              label="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <InputWithLabel
              label="Your Hotline"
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
              <Title2>Profile picture</Title2>
              <Label htmlFor="photo2">
                <FileInput
                  type="file"
                  id="photo2"
                  accept=".png,.jpg,.jpeg"
                  onChange={(e) => handleprofilePic(e)}
                />

                <UserprofilePic id="photo2" src={profilePic}></UserprofilePic>
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
const EditWrapper = styled.div`
  width: 100%;
  height: 100% !important;
  display: flex;
  margin-left: 52px;
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
  opacity: 0;
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
const UserprofilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 42px;
  margin-top: 12px;
  border: 4px solid #fff;
  cursor: pointer;
  object-fit: cover;
`;

export default EditUser;
