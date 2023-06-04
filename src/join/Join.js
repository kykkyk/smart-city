import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";

const Join = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [pwConfirm, setPwConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>JOIN</h2>
      <hr />
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
        />
      </div>
      <div>
        <p>Password Confirm</p>
        <input
          value={pwConfirm}
          onChange={(e) => setPwConfirm(e.target.value)}
          type="password"
        />
      </div>
      <div>
        <p>Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="password"
        />
      </div>
      <div>
        <p>Email</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="password"
        />
      </div>
      <div>
        <button>확인</button>
        <button>취소</button>
      </div>
    </div>
  );
};

export default Join;
