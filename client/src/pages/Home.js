import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import Footer from "../components/Footer";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import Searchbar from "../components/Searchbar";
import SearchCategory from "../components/SearchCategory";
import Sidebar from "../components/Sidebar";
const Home = () => {
  const userInfo = useSelector((state) => state.signInInfo);
  const adminInfo = useSelector((state) => state.adminSignInInfo);

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo?.userInfo?.school) {
      navigate("/");
    }else if(adminInfo?.userInfo?.user){
      navigate("/admin")
    }
    // eslint-disable-next-line
  }, []);
  const searchCategories = [
    { id: 1, title: "Secondary schools", url: "/search_schools" },
    { id: 2, title: "Tutoring facilties", url: "/search_schools" },
    { id: 3, title: "Proprietors", url: "/search_schools" },
    { id: 4, title: "Award winning schools", url: "/search_schools" },
  ];
  const printableResources = [
    { id: 1, title: "List of schools", url: "/schools" },
    { id: 2, title: "How to register a school", url: "/search_schools" },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <Wrapper>
      <Navbars>
        <NavbarOne />
        <NavbarTwo openSidebar={openSidebar} />
        <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
      </Navbars>
      <ContentWrapper>
        <Intro>
          <IntroTitle>
            Search in-network schools, facilities, and propietors
          </IntroTitle>
          <IntroSubtitle>
            2022 · Individual · Lagos · Individual Lagos ·
            <span> Change network</span>
          </IntroSubtitle>
        </Intro>
        <Searchbar />
        <Title>Common searches</Title>
        <Categories>
          {searchCategories.map((category) => (
            <Link to={category.url}>
              <SearchCategory title={category.title} key={category.id} />
            </Link>
          ))}
        </Categories>
        <Title>Printable resources</Title>
        <Categories>
          {printableResources.map((category) => (
            <SearchCategory title={category.title} key={category.id} />
          ))}
        </Categories>
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  );
};

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  margin-top: 20px;
`;
const Navbars = styled.div`
  display: flex;
  flex-direction: column;
`;
const IntroTitle = styled.h1`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #141414;
`;
const IntroSubtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #141414;
  span {
    color: #0074ba;
    cursor: pointer;
  }
`;
const FooterWrapper = styled.div`
  margin-top: 30px;
  @media screen and (min-width: 1150px) {
    padding: 10px 100px;
  }
  @media screen and (max-width: 1150px) {
    padding: 10px 20px;
  }
`;
const Title = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  margin: 25px 0 15px;
  color: #141414;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const ContentWrapper = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 10px;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0 20px;
  }
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
