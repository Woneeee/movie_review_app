import { PuffLoader } from "react-spinners";
import styled from "styled-components";
import { color } from "../GlobalStyled";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <PuffLoader color="#e50914" size={70} />
    </Container>
  );
};
