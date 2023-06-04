import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="main_box">
        <div className="main_card">
          <img src="/assets/다운로드.jpeg" alt="사진1" />
          <p>스마트 패스</p>
        </div>
        <div className="main_card">
          <img src="/assets/다운로드.jpeg" alt="사진1" />
          <p>지능형 cctv</p>
        </div>
        <div className="main_card">
          <img src="/assets/다운로드.jpeg" alt="사진1" />
          <p>로봇</p>
        </div>
        <div className="main_card">
          <img src="/assets/다운로드.jpeg" alt="사진1" />
          <p>스마트 벤치</p>
        </div>
        <div onClick={() => navigate("/smart")} className="main_card">
          <img
            src="https://cdn.epnc.co.kr/news/photo/202003/94662_86524_2913.jpg"
            alt="사진1"
          />
          <p>스마트 폴</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
