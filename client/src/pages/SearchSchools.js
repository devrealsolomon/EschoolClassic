import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import Searchbar from "../components/Searchbar";

import SearchResult from "../components/SearchResult";
import Sidebar from "../components/Sidebar";

const SearchSchools = () => {
  const { loading, schools } = useSelector((state) => state.schools);

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

        <Schools>
          {loading ? (
            <Loader />
          ) : schools?.length === 0 ? (
            <h1>No schools matched your query</h1>
          ) : (
            schools?.map((school) => (
              <Link to={`/school_overview/${school?._id}`}>
                <SearchResult key={school._id} {...school} />
              </Link>
            ))
          )}
        </Schools>
      </ContentWrapper>
    </Wrapper>
  );
};

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  margin-top: 20px;
  position: sticky;
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

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 10px;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0 20px;
  }
`;
const Schools = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SearchSchools;
