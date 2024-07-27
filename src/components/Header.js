import { Link } from "react-router-dom";
import { routes } from "../routes";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { color, spacing } from "../GlobalStyled";

const SHeader = styled.header`
  width: 100%;
  padding: 15px ${spacing.side};
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const Logo = styled.div`
  a {
    color: ${color.point};
    font-size: 28px;
    font-weight: 700;
  }
`;

const Menu = styled.ul`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  li {
    margin-left: 40px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.search}>
            <FiSearch />
          </Link>
        </li>

        <li>
          <Link to={routes.signin}>
            <FaRegUser />
          </Link>
        </li>
      </Menu>
    </SHeader>
  );
};
