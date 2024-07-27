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

  @media screen and (max-width: 768px) {
    padding: 15px ${spacing.moside};
  }

  @media screen and (max-width: 376px) {
    padding: 10px ${spacing.moside};
  }
`;

const Logo = styled.div`
  a {
    color: ${color.point};
    font-size: 28px;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    a {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 376px) {
    a {
      font-size: 20px;
    }
  }
`;

const Menu = styled.ul`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  li {
    margin-left: 40px;
  }

  @media screen and (max-width: 768px) {
    li {
      font-size: 23px;
    }
  }

  @media screen and (max-width: 376px) {
    li {
      font-size: 18px;
      margin-left: 20px;
    }
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
