import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { app } from "../../firebase";
import { setUser } from "../Store/Features/userSlice";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const Header = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  console.log(user.displayName);

  const dispatch = useDispatch();

  //This function handles login with googgle mail
  const authHandler = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user.providerData[0];
        dispatch(setUser(user));
      })
      .catch((error) => console.log(error.message));
  };

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

          <a href="/search">
            <img src="/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
          </a>

          <a href="/watchlist">
            <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>

          <a href="/originals">
            <img src="/images/original-icon.svg" alt="ORIGINALS" />
            <span>ORIGINALS</span>
          </a>

          <a href="/movies">
            <img src="/images/movie-icon.svg" alt="MOVIES" />
            <span>MOVIES</span>
          </a>

          <a href="/series">
            <img src="/images/series-icon.svg" alt="SERIES" />
            <span>SERIES</span>
          </a>
        </NAvMenu>
        <LOGIN onClick={authHandler}>Login</LOGIN>
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

const LOGIN = styled.a`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  letter-spacing: 1.5px;
  padding: 8px 16px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all 0.2s ease-in 0s;

  &:hover {
    background: #f9f9f9;
    color: black;
    border: transparent;
  }
`;

export default Header;
