import { HiArrowUpCircle } from "react-icons/hi2";
import styled from "styled-components";
import { color } from "../GlobalStyled";

const TopBtn = styled.div`
  position: fixed; // fixed 해야 브라우저 기준으로 right bottom 값이 스크롤을 내려도 지속됨
  right: 50px;
  bottom: 50px;
  z-index: 99;
  cursor: pointer;
  font-size: 60px;
  color: ${color.point};
`;

export const ScrollTopBtn = () => {
  const topBtnHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <TopBtn onClick={topBtnHandler}>
      <HiArrowUpCircle />
    </TopBtn>
  );
};
