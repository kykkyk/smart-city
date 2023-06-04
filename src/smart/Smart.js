import React from "react";
import { useNavigate } from "react-router-dom";

const Smart = () => {
  const navigate = useNavigate();
  return (
    <div className="poll_box">
      <h3>스마트 폴</h3>
      <div className="img_button_box">
        <img src="/assets/poll.png" alt="poll" />
        <div className="button_box">
          <button>LED 디스플레이</button>
          <button>리얼 센서 카메라</button>
          <button>cctv 카메라</button>
          <button>점검부</button>
          <button>환기구</button>
          <button onClick={() => navigate("/scanner")}>스캐너</button>
        </div>
      </div>
    </div>
  );
};

export default Smart;
