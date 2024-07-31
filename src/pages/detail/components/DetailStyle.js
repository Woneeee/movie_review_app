import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConWrap = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin-top: 140px;
`;

export const PosterWrap = styled.div`
  width: 47%;
  /* height: 730px; */
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoWrap = styled.div`
  width: 47%;
  h3 {
    font-size: 65px;
    font-weight: 700;
    margin-bottom: 30px;
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
`;

export const Button = styled.div`
  all: unset;
  width: 90px;
  margin-left: 50px;
  background-color: white;
  border-radius: 5px;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Genres = styled.div`
  font-size: 18px;
  margin-top: 20px;
  li {
    list-style: disc;
    margin-top: 10px;
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
`;

export const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.7;
  margin-top: 50px;
  line-height: 30px;
  letter-spacing: 0;
`;

export const Recommand = styled.div`
  margin-top: 150px;
  padding: 0 250px;
  h3 {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 30px;
  }
`;

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 20px;
`;

export const Con = styled.div`
  height: 540px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Video = styled.div`
  /* background-color: #222; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  display: ${(props) => props.$playActive};
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
  margin: 20px auto;
  cursor: pointer;
`;
