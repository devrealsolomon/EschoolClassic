import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Footer = () => {
  const helpfulLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "School", url: "/" },
    { title: "FAQ", url: "/faq" },
  ];
  const siteMap = [
    { title: "Library Map", url: "/" },
    { title: "Teachers' Council", url: "/about" },
    { title: "Registration Form", url: "/register" },
    { title: "Lesson Plans", url: "/lessonPlans" },
    { title: "Privacy Policy", url: "/privacy" },
    { title: "Terms of Use", url: "/terms" },
  ];
  return (
    <Wrapper>
      <VerticalWrapper>
        <Title>ESchool</Title>
        <Subtitle>
          This is a community for schools in the public sector a well as the
          private sector.
        </Subtitle>
      </VerticalWrapper>
      <VerticalWrapper>
        <Title>Helpful Links</Title>
        <VerticalWrapper>
          {helpfulLinks.map((link) => (
            <Link to={`/${link.url}`}>
              <Item key={link.title}>{link.title}</Item>
            </Link>
          ))}
        </VerticalWrapper>
      </VerticalWrapper>
      <VerticalWrapper>
        <Title>Site map</Title>
        <VerticalWrapper>
          {siteMap.map((link) => (
            <Link to={`/${link.url}`}>
              <Item key={link.title}>{link.title}</Item>
            </Link>
          ))}
        </VerticalWrapper>
      </VerticalWrapper>
      <VerticalWrapper>
        <Title>Contact us</Title>
        <HorizontalWrapper>
          <Social>
            <FaFacebookF />
          </Social>
          <Social>
            <FaTwitter />
          </Social>
          <Social>
            <FaInstagram />
          </Social>
          <Social>
            <FaLinkedinIn />
          </Social>
        </HorizontalWrapper>
        <Email>edetschools@gmail.com</Email>
      </VerticalWrapper>
      <Copyright>
        <span>&copy;</span>Copyright {new Date().getFullYear()}
      </Copyright>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;

  display: grid;
  grid-column-gap: 20px;
  padding: 40px 0;
  /* grid-template-columns: repeat(4, 1fr); */
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-family: "DM Sans";
  font-style: bold;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  margin-bottom: 24px;
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
  color: #141414;
`;
const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: rgba(20, 20, 20, 0.9);
`;
const Item = styled.h2`
  cursor: pointer;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 10px;
  /* identical to box height, or 200% */

  color: rgba(20, 20, 20, 0.9);
  transition: all 0.6s linear;
  &:hover {
    opacity: 0.8;
  }
`;
const Social = styled.div`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 40px;
  color: #3d3af8;
  height: 40px;
  color: blue;
  display: grid;
  margin-right: 20px;
  place-items: center;
`;
const Email = styled(Subtitle)`
  cursor: pointer;
`;
const HorizontalWrapper = styled.div`
  margin: 20px 0;
  display: flex;
`;
const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Copyright = styled.h2`
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #141414;
  span {
    color: black;
    margin-right: 4px;
  }
`;
export default Footer;
