import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Event from "../components/Event";
import Loader from "../components/Loader";

import Navbar from "../components/Navbar";

import TableTitle from "../components/TableTitle";
import Tabs from "../components/Tabs";
import { useIsMount } from "../hooks/useIsMount";
import { getMyEvents } from "../redux/actions/eventActions";
const Events = () => {
  const userInfo = useSelector((state) => state.signInInfo);
  const titles = [
    "Event title",
    "Category",
    "Description",
    "Event Date",
    "Actions",
  ];
  const isMount = useIsMount();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyEvents());
    // eslint-disable-next-line
  }, []);
  const { events, loading, error } = useSelector((state) => state.events);

  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo?.userInfo?.school) {
      navigate("/landing_page");
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (!isMount) {
      if (error) {
        alert(error);
      }
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
        <EventsWrapper>
          <Navbar />
          <div className="container">
            <Title>Events</Title>
            <Link to="/create_event">
              <Button>Publish Event</Button>
            </Link>
          </div>

          <Titles>
            {titles.map((tableTitle) => {
              return <TableTitle title={tableTitle} key={tableTitle} />;
            })}
          </Titles>

          <EventsList>
            {events?.length === 0 ? (
              <h1>No events to show! Events created will appear here</h1>
            ) : (
              events?.map((event) => {
                return (
                  <Link to={`/events/${event._id}`}>
                    <Event key={event._id} {...event} />
                  </Link>
                );
              })
            )}
          </EventsList>
        </EventsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  position: relative;
`;
const Button = styled.button`
  width: 167px;
  height: 50px;

  background: #4bb543;

  border: transparent;
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.5s linear;
  &:hover {
    border-radius: 26px;
    color: #e5e5e5;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-family: "Dm Sans";
  margin-top: 15px;

  font-weight: 700;
  font-size: 24px;
  line-height: 48px;

  color: #0d0d2b;
`;
const EventsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;

  padding: 30px 88px 30px 37px;

  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  .container {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
  }
`;

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
`;
const Titles = styled.div`
  width: 100%;

  margin-top: 30px;
  display: grid;
  margin-bottom: 30px;
  justify-items: center;

  grid-template-columns: repeat(5, 1fr);
`;
const TabsWrapper = styled.div`
  width: 340px;
`;

export default Events;
