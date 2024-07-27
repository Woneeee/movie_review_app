import styled from "styled-components";
import { color, spacing } from "../../../GlobalStyled";
import { ORIGIN_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";

const Container = styled.section`
  height: 83vh;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
  position: relative;
  padding: 450px ${spacing.side} 0 ${spacing.side};

  span {
    width: 130px;
    height: 30px;
    display: block;
    color: ${color.point};
    position: relative;
    background-color: #555;
    border-radius: 20px;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
  }
  h3 {
    margin-top: 20px;
    position: relative;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
  }
  p {
    position: relative;
    width: 600px;
    font-size: 20px;
    font-weight: 300;
    opacity: 0.7;
    line-height: 30px;
  }

  @media screen and (max-width: 768px) {
    height: 70vh;
    padding: 450px ${spacing.moside} 0 ${spacing.moside};

    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }
    p {
      max-width: 400px;
      width: 100%;
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media screen and (max-width: 376px) {
    height: 60vh;
    padding: 200px ${spacing.moside} 0 ${spacing.moside};
    span {
      font-size: 13px;
      width: 90px;
      height: 20px;
      line-height: 20px;
    }
    h3 {
      font-size: 20px;
      margin-bottom: 8px;
      margin-top: 12px;
    }
    p {
      max-width: 300px;
      width: 100%;
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.6111694677871149) 45%,
    rgba(255, 255, 255, 0) 94%,
    rgba(0, 0, 0, 0.7) 100%
  );
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 376px) {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.6111694677871149) 45%,
      rgba(255, 255, 255, 0) 90%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const Button = styled.div`
  width: 200px;
  height: 50px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    width: 140px;
    height: 30px;
    font-size: 16px;
    margin-top: 15px;
  }

  @media screen and (max-width: 376px) {
    width: 120px;
    height: 28px;
    font-size: 13px;
    margin-top: 8px;
  }
`;

export const MainBanner = ({ data }) => {
  return (
    <Container $bgUrl={ORIGIN_URL + data.backdrop_path}>
      <BlackBg />

      <span>Trending Today</span>
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 100) + "..."}</p>
      <Button>
        <Link to={`/detail/${data.id}`}>상세 정보</Link>
      </Button>
    </Container>
  );
};
