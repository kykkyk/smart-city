import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({login,setLogin}) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    if (id === "donga" && pw === "qwer1234") {
      setLogin(true);
      navigate("/");
      return;
    }
    else alert("아이디 또는 비밀번호가 틀렸습니다.");
  };
  console.log(login.setLogin)
  return (
    <div>
      <div>
        <p>ID</p>
        <input value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <p>Password</p>
        <input
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          type="password"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
        />
      </div>
      <button onClick={() => submit()}>로그인</button>
      <div>
        <button onClick={() => navigate("/join")}>JOIN</button>
        {/* <button>아이디 / 비밀번호 찾기</button> */}
      </div>
    </div>
  );
};

export default Login;
