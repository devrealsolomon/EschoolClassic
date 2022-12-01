import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import Sidebar from "../components/Sidebar";
const About = () => {
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
        <Section1>
          <AboutWrapper>
            <Title>About us</Title>
            <AboutBody>
              This is an INTERNET COMMUNITY for ALL schools in the public sector
              as well as the private sector in Lagos State. This is a
              collaborative project between The Government of Lagos State,
              through the Ministry of Education and the Ministry of Science &
              Technology with Global Education Media (Nig.) Limited as part of
              the modernisation effort in the education sector.
            </AboutBody>
          </AboutWrapper>
          <Image src="https://res.cloudinary.com/dpdtbtb87/image/upload/v1668338052/vlaxhuyyxnxbj38sjv3g.jpg" />
        </Section1>
        <Section2>
          <Title2>How we operate</Title2>
          <AboutBody2>
            Each school can be easily located and their detailed information
            viewed by a worldwide audience including Nigerians resident abroad
            who mostly desire to bring their children/wards home for qualitative
            education. Access to our world-class online LEARNING RESOURCES which
            can be downloaded and printed for use by teachers in the classroom
            or parents at home to support the learning of pupils. Instant access
            to information from the Lagos State Ministry of Education which will
            be sent to your schools' nominated GSM number or email address.
            Schools can celebrate their accomplishments, showcase their
            challenges to interested stakeholders like former pupils, inform
            parents on their events and activities calendar for the year as well
            as let the world know of their future plans. On each school's page,
            we can publish their documents like application forms, year book,
            photo galleries and such activities as their inter-house sports,
            parents' evening, prize-giving day, school visits and other
            important occasions. Opportunity to participate in our series of
            educational events and activities aimed at improving education in
            the state, i.e. continuous professional development (CPD) for
            teaching and non-teaching staffs, seminars, workshops, discussion
            forum and interactive sessions. Free copies of our PROJECT
            NEWSLETTER every term. This is aimed at ensuring that all schools
            get the full benefit of being a part of the project.
          </AboutBody2>
        </Section2>
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
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const Section1 = styled.div`
  display: grid;
  grid-column-gap: 40px;

  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  @media screen and (min-width: 1150px) {
    padding: 30px 100px;
  }
`;
const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  background: #141414;
  @media screen and (max-width: 1150px) {
    padding: 20px;
  }

  @media screen and (min-width: 1150px) {
    padding: 60px 100px;
  }
`;

const AboutBody = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  line-height: 40px;
  @media screen and (max-width: 800px) {
    font-size: 17px;
    line-height: 32px;
  }
`;
const AboutBody2 = styled(AboutBody)`
  color: #fff;
`;
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    margin-bottom: 30px;
  }
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
const Title = styled.h1`
  font-family: "DM Serif Display";
  font-style: bold;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  color: #141414;
  margin-bottom: 20px;
`;

const Title2 = styled(Title)`
  color: #ffff;
`;
const Image = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  border: 8px solid gray;
  border-radius: 20px;
`;
export default About;
