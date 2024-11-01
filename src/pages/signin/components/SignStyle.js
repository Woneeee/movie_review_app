import styled from "styled-components";
import bg2 from "../../../img/b.jpg";
import { color } from "../../../GlobalStyled";

export const Container = styled.div`
  height: 100vh;
  background: url(${bg2}) no-repeat center / cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
`;

export const BackBG = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: -99;
`;

export const Form = styled.form`
  width: 500px;
  height: 700px;
  border-radius: 3px;
  background-color: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(5px);
  padding: 60px 60px;
  h3 {
    font-size: 40px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 50px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    background-color: rgba(68, 68, 68, 0.4);
    margin-bottom: 10px;
    border-radius: 3px;
    padding: 0 20px;
    box-sizing: border-box;
    &::placeholder {
      font-size: 18px;
      font-weight: 600;
    }
  }

  button {
    all: unset;
    width: 100%;
    height: 60px;
    font-size: 18px;
    background-color: ${color.point};
    text-align: center;
    margin-top: 30px;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 500px) {
    width: 340px;
    height: 600px;
    padding: 60px 20px;
    h3 {
      font-size: 30px;
      margin-bottom: 40px;
    }
    input {
      height: 45px;
      margin-bottom: 5px;
      padding: 0 15px;
      &::placeholder {
        font-size: 16px;
      }
    }
    button {
      height: 50px;
      margin-top: 23px;
      font-size: 17px;
    }
  }
`;

export const GoSIgnUp = styled.div`
  margin-top: 70px;
  font-size: 17px;
  letter-spacing: 0px;
  a {
    text-decoration: underline;
    color: ${color.point};
  }
  p {
    margin-top: 25px;
    line-height: 23px;
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    line-height: 23px;
    font-size: 15px;
    margin-top: 55px;
    p {
      font-size: 13px;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: gold;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
