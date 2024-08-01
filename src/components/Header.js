import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { color, spacing } from "../GlobalStyled";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";

const SHeader = styled.header`
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1966036414565826) 0%,
    rgba(0, 0, 0, 0.02853641456582634) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
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
  const [isLogin, setIsLogin] = useState(false);
  const { pathname } = useLocation();
  // console.log(pathname);

  useEffect(() => {
    (() => {
      if (localStorage.getItem("login") === "isLogin") {
        setIsLogin(true);
      }
    })();
  }, [pathname]);

  // infinite re-render 걸리면 useEffect 쓰면됨

  const logoutHandler = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("login");
    alert("로그아웃 되었습니다 다음에 또 봐요 🖐🏻");
    if (localStorage.getItem("login") === null) {
      setIsLogin(false);
    }
  };

  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>YEAHFLIX</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.search}>
            <BsSearch />
          </Link>
        </li>

        <li>
          {isLogin ? (
            <Link onClick={logoutHandler}>
              <MdLogout />
            </Link>
          ) : (
            <Link to={routes.signin}>
              <FaRegUser />
            </Link>
          )}
        </li>
      </Menu>
    </SHeader>
  );
};
