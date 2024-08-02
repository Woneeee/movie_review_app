import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConWrap = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin-top: 140px;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }
`;

export const PosterWrap = styled.div`
  width: 47%;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoWrap = styled.div`
  width: 48%;
  h3 {
    font-size: 65px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1200px) {
    h3 {
      font-size: 4.5vw;
      margin-bottom: 2vw;
    }
  }
  @media screen and (max-width: 1000px) {
    h3 {
      font-size: 35px;
      margin-bottom: 2vw;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  span {
    display: block;
    padding: 9px 20px;
    background-color: #333;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 15px;
  }
  @media screen and (max-width: 1200px) {
    span {
      font-size: 1.5vw;
      padding: 0.9vw 1.3vw;
      margin-right: 0.7vw;
    }
  }
  @media screen and (max-width: 1000px) {
    span {
      font-size: 14px;
      padding: 0.9vw 1.3vw;
      margin-right: 0.7vw;
    }
  }
`;

export const Button = styled.div`
  all: unset;
  width: 95px;
  margin-left: 50px;
  background-color: white;
  border-radius: 5px;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    margin-left: 3vw;
    width: 6.5vw;
    font-size: 1.5vw;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 3vw;
    width: 8vw;
    font-size: 14px;
  }
`;

export const Genres = styled.div`
  font-size: 18px;
  margin-top: 20px;
  li {
    list-style: disc;
    margin-top: 10px;
  }
  @media screen and (max-width: 1200px) {
    li {
      font-size: 1.5vw;
      margin-top: 0.5vw;
    }
  }
  @media screen and (max-width: 1000px) {
    li {
      font-size: 14px;
      margin-top: 0.5vw;
    }
  }
`;

export const Keyword = styled.div`
  margin-top: 30px;
  font-size: 17px;
  p {
    background-color: #333;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 0 10px 10px 0;
    display: inline-block;
    letter-spacing: 0;
  }
  p:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.4vw;
  }
  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.7;
  margin-top: 50px;
  line-height: 30px;
  letter-spacing: 0;
  @media screen and (max-width: 1200px) {
    font-size: 1.5vw;
    line-height: 2.4vw;
    margin-top: 4vw;
  }
  @media screen and (max-width: 1000px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Recommand = styled.div`
  margin-top: 150px;
  padding: 0 15%;
  h3 {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 12vw;
    h3 {
      font-size: 2vw;
      margin-bottom: 2.5vw;
    }
  }
  @media screen and (max-width: 1000px) {
    h3 {
      font-size: 16px;
      line-height: 22px;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0 ${spacing.moside};
  }
`;

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 15px;
  column-gap: 13px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2vw;
    column-gap: 1.8vw;
  }
`;

export const Con = styled.div`
  height: 100%;
  position: relative;
  img {
    height: 100%;
    object-fit: cover;
  }
  h2 {
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #333;
    font-size: 21px;
    font-weight: 500;
    opacity: 0.7;
  }
  @media screen and (max-width: 500px) {
    img {
      border-radius: 4px;
    }
  }
`;

export const Video = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  display: ${(props) => props.$playActive};
  padding: 120px 0 0 0;
  iframe {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%);
    margin: 0 auto;
  }

  @media screen and (max-width: 1200px) {
    padding: 180px 0 0 0;
    iframe {
      width: 80vw;
      height: 47vw;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 300px 0 0 0;
  }
`;

export const Close = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 0 auto;
  cursor: pointer;
`;
