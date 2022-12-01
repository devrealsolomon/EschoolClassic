import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import InputWithLabel from "../components/InputWithLabel";
import SignupButton from "../components/SignupButton";
import Subtitle from "../components/Subtitle";

import { useIsMount } from "../hooks/useIsMount";
import { initializePayment } from "../redux/actions/paymentActions";

const Payment = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.signInInfo);

  const isMount = useIsMount();

  const [email, setEmail] = useState(userInfo.userInfo?.school?.email);
  const [full_name, setName] = useState(userInfo.userInfo?.school?.school_name);
  const amount = 20;
  const { loading, error, url } = useSelector((state) => state.payment);

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
      if (url) {
        // navigate(url);
        window.location = url;
      }
    }
    // eslint-disable-next-line
  }, [url]);

  const initializePaystack = (e) => {
    e.preventDefault();
    if (!email || !full_name) {
    } else {
      dispatch(initializePayment(email, full_name, amount));
    }
  };
  return (
    <Wrapper>
      <Form>
        <Title>Make Payment</Title>
        <Title>This is a yearly subscription of ${amount}</Title>
        <Subtitle text="If the details below aren't correct,just edit them" />
        <InputWithLabel
          label="Your full name"
          value={full_name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputWithLabel
          label="Your Paystack email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <SignupButton
          title={loading ? "Initializing" : "Initialize payment"}
          disabled={loading}
          onClick={(e) => initializePaystack(e)}
        />
        <Link to="/register">
          <NoAccount>
            Don't have a school account? <span>Create one</span>
          </NoAccount>
        </Link>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const Form = styled.form`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
`;

const NoAccount = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  color: #141414;
  cursor: pointer;
  margin-top: 20px;
  span {
    color: #0074ba;
  }
`;

const Title = styled.h1`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  width: fit-content;
`;
export default Payment;
