import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
const AlertSuccess = ({ text }) => {
  return (
    <Wrapper>
      <Strip />
      <Checkbox>
        <CheckIcon>
          <FaCheckCircle />
        </CheckIcon>
      </Checkbox>
      <Texts>
        <Title>Success</Title>
        <Subtitle>{text}</Subtitle>
      </Texts>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 80px;

  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Strip = styled.div`
  width: 10px;
  height: 80px;

  border-top-left-radius: 8px;

  border-bottom-left-radius: 8px;
  background: #27ae60;
`;

const Checkbox = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(39, 174, 96, 0.1);
`;

const CheckIcon = styled.div`
  width: 25dp;
  height: 25dp;
  color: #27ae60;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;
const Subtitle = styled.h3`
  font-family: "Moderat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: rgba(0, 0, 0, 0.7);
`;

const Title = styled.h1`
  font-family: "Moderat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;

export default AlertSuccess;
