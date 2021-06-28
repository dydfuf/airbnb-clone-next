import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import styled from "styled-components";

import AirbnbLogoIcon from "../public/static/svg/logo/logo.svg";
import AirbnbLogoText from "../public/static/svg/logo/logo_text.svg";

import palette from "../styles/palette";
import useModal from "../hooks/useModal";
import { useSelector } from "../store";
import HeaderAuths from "./HeaderAuths";
import HeaderUserProfile from "./HeaderUserProfile";
import AuthModal from "./auth/AuthModal";
import { logoutAPI } from "../lib/api/auth";
import { userActions } from "../store/user";

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;
  .header-logo-wrapper {
    display: flex;
    align-items: center;
    .header-logo {
      margin-right: 6px;
    }
  }
  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      font-weight: 600;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      font-weight: 600;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }
  .header-user-profile {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 0 6px 0 16px;
    border: 0;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 21px;
    background-color: white;
    cursor: pointer;
    outline: none;
    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    }
    .header-user-profile-image {
      margin-left: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  /** react-ouside-click-handler div */
  .header-logo-wrapper + div {
    position: relative;
  }

  .header-usermenu {
    position: absolute;
    right: 0;
    top: 52px;
    width: 240px;
    padding: 8px 0;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: white;
    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 42px;
      padding: 0 16px;
      cursor: pointer;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-usermenu-divider {
      width: 100%;
      height: 1px;
      margin: 8px 0;
      background-color: ${palette.gray_dd};
    }
  }
`;

const Header: React.FC = () => {
  const { openModal, ModalPortal, closeModal } = useModal();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //* 유저 메뉴 열고, 닫힘 여부
  const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);

  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Link href="/">
        <div className="header-logo-wrapper">
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoText />
        </div>
      </Link>
      {!user.isLogged && <HeaderAuths />}
      {user.isLogged && <HeaderUserProfile />}

      {/* <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal> */}
    </Container>
  );
};

export default Header;
