import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../components/Input";
import SignupButton from "../../components/SignupButton";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import { useIsMount } from "../../hooks/useIsMount";
import { signup } from "../../redux/admin/actions/userActions";
const AdminRegister = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [username, setUsername] = useState();

  const { userInfo, loading, error } = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordToggled, setToggle] = useState(false);
  const [isPasswordConfirmToggled, setConfirmToggle] = useState(false);
  const isMount = useIsMount();
  useEffect(() => {
    if (!isMount) {
      if (error) {
        alert(error);
      }
    }
    // eslint-disable-next-line
  }, [dispatch, error]);
  useEffect(() => {
    if (!isMount) {
      if (userInfo) {
        navigate("/details");
      }
    }
    // eslint-disable-next-line
  }, [userInfo]);
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }
    dispatch(signup(password, email, name, username));
  };
  return (
    <Wrapper>
      <Form>
        <Title title="Welcome Here" />
        <Subtitle text="Fill the form below to create an account" />
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInputWrapper>
          <TextInput
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={isPasswordToggled ? "text" : "password"}
          />
          <ToggleIcon onClick={() => setToggle(!isPasswordToggled)}>
            {isPasswordToggled ? <AiFillEyeInvisible /> : <AiFillEye />}
          </ToggleIcon>
        </PasswordInputWrapper>
        <PasswordInputWrapper>
          <TextInput
            placeholder="Confirm password"
            type={isPasswordConfirmToggled ? "text" : "password"}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ToggleIcon
            onClick={() => setConfirmToggle(!isPasswordConfirmToggled)}
          >
            {isPasswordConfirmToggled ? <AiFillEyeInvisible /> : <AiFillEye />}
          </ToggleIcon>
        </PasswordInputWrapper>
        <SignupButton
          title={loading ? "Creating account...." : "Create Acccount"}
          disabled={
            !email ||
            !username ||
            !name ||
            !password ||
            !confirmPassword ||
            loading
          }
          onClick={handleSubmit}
        />
        <Link to="/admin/login">
          <AccountExists>
            Already have a school account? <span>Sign in</span>
          </AccountExists>
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

const PasswordInputWrapper = styled.div`
  width: 400px;
  height: 55px;
  position: relative;
  margin-bottom: 24px;
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
  color: #141414;
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
const AccountExists = styled.div`
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
export default AdminRegister;
