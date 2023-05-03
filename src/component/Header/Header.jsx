import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="Logo" />
        </Logo>

        <NAvMenu>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="Home" />
            <span>HOME</span>
          </a>

          <a href="/home">
            <img src="/images/search-icon.svg" alt="Home" />
            <span>SEARCH</span>
          </a>

          <a href="/home">
            <img src="/images/watchlist-icon.svg" alt="Home" />
            <span>WATCHLIST</span>
          </a>

          <a href="/home">
            <img src="/images/original-icon.svg" alt="Home" />
            <span>ORIGINALS</span>
          </a>

          <a href="/home">
            <img src="/images/movie-icon.svg" alt="Home" />
            <span>MOVIES</span>
          </a>

          <a href="/home">
            <img src="/images/series-icon.svg" alt="Home" />
            <span>SERIES</span>
          </a>
        </NAvMenu>
        <p>Login</p>
      </Nav>
      <Outlet />
    </>
  );
};

const Nav = styled.nav`
  width: 100%;
  letter-spacing: 16px;
  background: #090b13;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;

const Logo = styled.a`
  display: inline-block;
  width: 80px;
  max-height: 70px;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
  }
`;

const NAvMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: row nowrap;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: 20px;

  a {
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding: 0 12px;
    z-index: auto;

    img {
      height: 20px;
      min-width: 20px;
      display: block;
      margin-right: 4px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      white-space: nowrap;
      position: relative;

      &:before {
        content: "";
        background: rgb(249, 249, 249);
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        border-radius: 0 0 4px 4px;
        width: 100%;
        transform: scaleX(0);
        transform-origin: center;
        transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
