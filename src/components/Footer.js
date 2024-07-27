import styled from "styled-components";

const SFooter = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #555;
  margin-top: 200px;
  font-size: 15px;
`;

export const Footer = () => {
  return <SFooter>&copy; Woneeee 2024</SFooter>;
};
