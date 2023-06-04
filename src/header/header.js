import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ title, login, setLogin }) => {
  const navigate = useNavigate();
  const logout = () => {
    setLogin(false);
    navigate("/");
  };
  return (
    <header>
      <h1 onClick={() => navigate("/")}>부산 에코 델타 스마트 빌리지</h1>
      <h3>{title}</h3>
      {login ? (
        <button onClick={() => logout()}>로그아웃</button>
      ) : (
        <button onClick={() => navigate("/login")}>로그인</button>
      )}
    </header>
  );
};

export default Header;
