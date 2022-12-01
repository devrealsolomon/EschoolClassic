import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import SignupButton from "../components/SignupButton";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { useIsMount } from "../hooks/useIsMount";
import { signin } from "../redux/actions/userActions";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo, loading, error } = useSelector((state) => state.signInInfo);
  const [isPasswordToggled, setToggle] = useState(false);

  const isMount = useIsMount();
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
      if (userInfo?.school) {
        navigate("/");
      }
    }
    // eslint-disable-next-line
  }, [userInfo?.school]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signinUser = (e) => {
    e.preventDefault();
    if (!email || !password) {
    } else {
      dispatch(signin(email, password));
    }
  };
  return (
    <Wrapper>
      <Form>
        <Title title="Welcome back" />
        <Subtitle text="Login to your school dashboard" />
        <Input
          placeholder="Login with school name or email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInputWrapper>
          <TextInput
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
            type={isPasswordToggled ? "text" : "password"}
          />
          <ToggleIcon onClick={() => setToggle(!isPasswordToggled)}>
            {isPasswordToggled ? <AiFillEyeInvisible /> : <AiFillEye />}
          </ToggleIcon>
        </PasswordInputWrapper>
        <Buttons>
          <Remember>
            <input type="checkbox" />
            <h3>Remember me?</h3>
          </Remember>
          <Link to="/forgot_password">
            <ForgotPassword>Forgot password?</ForgotPassword>
          </Link>
        </Buttons>
        <SignupButton
          title={loading ? "Signing in...." : "Sign In"}
          disabled={loading}
          onClick={(e) => signinUser(e)}
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
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;
const Remember = styled.div`
  display: flex;
  cursor: pointer;
  input {
    margin-right: 11px;
    accent-color: #141414;
  }
  h3 {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #979797;
  }
`;
const ForgotPassword = styled.div`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  color: #f38704;
  cursor: pointer;
`;
const PasswordInputWrapper = styled.div`
  width: 400px;
  height: 55px;
  position: relative;
`;

const TextInput = styled.input`
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  padding: 12px 22px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 30px;
  width: 100%;

  color: #979797;
  &::placeholder {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;

    color: #979797;
  }
`;
const ToggleIcon = styled.div`
  position: absolute;
  z-index: 100;
  right: 20px;
  top: 20px;
  color: #979797;
  width: 25px;
  height: 25px;
  cursor: pointer;
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
export default Login;
