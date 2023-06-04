import React, { useEffect } from "react";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";

const Scanner = ({ login }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="scanner_box">
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9lsS/image/m-w8FpKXmi2HqvWdeyIwJzTOVF8"
            alt="scanner"
          />
          <p>온도</p>
        </div>
        <div className="scanner_box">
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9lsS/image/m-w8FpKXmi2HqvWdeyIwJzTOVF8"
            alt="scanner"
          />
          <p>습도</p>
        </div>
        <div className="scanner_box">
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9lsS/image/m-w8FpKXmi2HqvWdeyIwJzTOVF8"
            alt="scanner"
          />
          <p>미세먼지</p>
        </div>
        <div className="scanner_box">
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9lsS/image/m-w8FpKXmi2HqvWdeyIwJzTOVF8"
            alt="scanner"
          />
          <p>초 미세먼지</p>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
