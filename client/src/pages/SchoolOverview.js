import React, { useEffect, useState } from "react";
import styled from "styled-components";

import NavbarOne from "../components/NavbarOne";

import NavbarTwo from "../components/NavbarTwo";

import Footer from "../components/Footer";

import Sidebar from "../components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BlueButton from "../components/BlueButton";
import { getSchoolGallery } from "../redux/actions/galleryActions";
import GalleryImage from "../components/SchoolGalleryImage";
const SchoolOverview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const dispatch = useDispatch();

  const location = useLocation();
  const school_id = location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(getSchoolGallery(school_id));
    // eslint-disable-next-line
  }, []);
  const { schools } = useSelector((state) => state.schools);
  const featuredSchools = useSelector((state) => state.featured);
  let school = schools?.find((sch) => sch._id === school_id);
  if (!school) {
    school = featuredSchools.schools?.find((sch) => sch._id === school_id);
  }
  const { images } = useSelector((state) => state.myGallery);

  return (
    <Wrapper>
      <Navbars>
        <NavbarOne />
        <NavbarTwo openSidebar={openSidebar} />
        <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
      </Navbars>
      <ContentWrapper>
        <SchoolWrapper>
          <LogoWrapper>
            <Logo src={school?.logo?.url} />
          </LogoWrapper>
          <SchoolName>{school?.school_name}</SchoolName>
        </SchoolWrapper>
        <HorizontalWrapper>
          <Left>
            <Title>School description</Title>
            <About>{school?.description}</About>
            <Link to={`/school/${school?._id}`}>
              <BlueButton title="Events" />
            </Link>
          </Left>
          <ItemsWrapper>
            <VerticalWrapper>
              <Title>Location</Title>
              <Subtitle>{school?.address}</Subtitle>
            </VerticalWrapper>

            <VerticalWrapper>
              <Title>Phone</Title>
              <Subtitle>{school?.phone}</Subtitle>
            </VerticalWrapper>

            <VerticalWrapper>
              <Title>Mission statement</Title>
              <Subtitle>{school?.motto}</Subtitle>
            </VerticalWrapper>
            <VerticalWrapper>
              <Title>Ownership</Title>
              <Subtitle>{school?.ownership}</Subtitle>
            </VerticalWrapper>

            <VerticalWrapper>
              <Title>State</Title>
              <Subtitle>{school?.state}</Subtitle>
            </VerticalWrapper>
            <VerticalWrapper>
              <Title>Email Address</Title>
              <Email>{school?.email}</Email>
            </VerticalWrapper>
          </ItemsWrapper>
        </HorizontalWrapper>
        {images.length > 0 && (
          <ImagesList>
            {images?.map((image) => (
              <GalleryImage key={image._id} {...image} />
            ))}
          </ImagesList>
        )}
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Navbars = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterWrapper = styled.div`
  @media screen and (min-width: 1150px) {
    padding: 10px 100px;
  }
  @media screen and (max-width: 1150px) {
    padding: 10px 20px;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;

  padding: 70px 100px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 1150px) {
    padding: 10px 20px;
  }
`;

const Left = styled.div`
  width: 300px;
  margin-right: 10px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const LogoWrapper = styled.div`
  width: 300px;
  margin-right: 10px;
  @media screen and (max-width: 800px) {
    margin-right: 20px;
    width: fit-content;
  }
`;

const HorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
const SchoolWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Logo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const SchoolName = styled.h1`
  font-family: "Test Heldane Display", "Dm Serif Display";
  justify-self: flex-start;
  font-weight: 400;
  font-size: 64px;
  line-height: 128px;
  width: 100%;

  @media screen and (max-width: 700px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: 45px;
    line-height: 50px;
  }
  color: #141414;
`;
const About = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-transform: capitalize;
  color: #141414;
  margin-bottom: 14px;
`;

const Subtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  text-transform: capitalize;
  color: #141414;
`;
const Title = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  /* identical to box height, or 200% */
  text-transform: capitalize;
  color: #141414;
`;

const ItemsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 40px;
`;
const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Email = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  /* identical to box height, or 214% */

  text-transform: lowercase;

  color: #141414;
  cursor: pointer;
  transition: all 0.6s linear;
  &:hover {
    text-decoration: underline;
  }
`;
const ImagesList = styled.div`
  display: grid;
  grid-auto-flow: column;

  grid-template-columns: repeat(autofill, minmax(400px, 1fr));
  grid-auto-columns: minmax(400px, 1fr);
  padding: 20px;
  grid-gap: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default SchoolOverview;
