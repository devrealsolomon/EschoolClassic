import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";
import Footer from "../components/Footer";
import InputWithLabel from "../components/InputWithLabel";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import Sidebar from "../components/Sidebar";
import TextAreaWithLabel from "../components/TextAreaWithLabel";

const Contact = () => {
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
        <Form>
          <Title>Contact us</Title>
          <Subtitle>Please fill the form below to leave us a message</Subtitle>
          <InputWithLabel label="Name*" placeholder="Name" />
          <InputWithLabel
            label="Email Address*"
            placeholder="Email Address"
            type="email"
          />
          <TextAreaWithLabel label="Message*" placeholder="Message" rows="4" />
          <SendBtn>
            <div>
              <FaTelegramPlane />
            </div>
            Send Message
          </SendBtn>

          <Note>
            Please note that this contacts belong to the website and not any
            school on this platform .If you need to contact any school then
            search the school and view its contact information.
          </Note>
          <Title>Contact address</Title>
          <Subtitle>
            PRIMETECH COMPUTER TECHNOLOGY 2 Ifelodun street,Oko-Afo
            Badagry,Lagos,Nigeria
          </Subtitle>
        </Form>
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;
const Title = styled.h1`
  font-family: "Dm Sans";
  margin-top: 15px;
  font-style: bold;
  font-weight: 700;
  font-size: 29px;
  line-height: 48px;
  color: #0d0d2b;
`;
const Subtitle = styled.h1`
  font-family: "Dm Sans";
  margin: 15px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 48px;
  color: #0d0d2b;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 620px;
  @media screen and (max-width: 600px) {
    width: 90vw;
    /* margin: 0 auto; */
  }
`;

const SendBtn = styled.button`
  margin: 20px 0;
  background: #010021;
  display: flex;
  border-radius: 10px;
  padding: 14px 40px;
  cursor: pointer;
  border: none;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  align-items: center;
  width: fit-content;
  transition: all 0.6s linear;
  div {
    margin-right: 6px;
    align-items: center;
    display: flex;
  }
  &:hover {
    border-radius: 20px;
    opacity: 0.9;
  }
`;

const Navbars = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 40px; */
  padding: 100px;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 0 20px;
    margin-top: 20px;
  }
`;

const Note = styled.div`
  text-transform: uppercase;
  font-family: "Dm Sans";
  margin-top: 15px;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  color: #141414;
  margin: 20px 0 40px;
`;
const FooterWrapper = styled.div`
  @media screen and (min-width: 1150px) {
    padding: 10px 100px;
  }
  @media screen and (max-width: 1150px) {
    padding: 10px 20px;
  }
`;

export default Contact;
