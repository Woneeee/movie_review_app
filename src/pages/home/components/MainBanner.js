import styled from "styled-components";
import { color, spacing } from "../../../GlobalStyled";
import { ORIGIN_URL } from "../../../constant/imgUrl";

const Container = styled.section`
  height: 83vh;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
  position: relative;
  padding: 470px ${spacing.side} 0 ${spacing.side};

  span {
    width: 100px;
    display: block;
    color: ${color.point};
    position: relative;
    background-color: #555;
    border-radius: 20px;
    font-size: 14px;
    padding: 5px;
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
`;

export const MainBanner = ({ data }) => {
  return (
    <Container $bgUrl={ORIGIN_URL + data.backdrop_path}>
      <BlackBg />

      <span>Trending Today</span>
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 100) + "..."}</p>
    </Container>
  );
};
