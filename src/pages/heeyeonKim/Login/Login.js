import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const LoginHeeyeon = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const saveUserId = e => {
    setId(e.target.value);
  };

  const [pw, setPw] = useState();
  const saveUserPw = e => {
    debugger;
    setPw(e.target.value);
  };

  const isValid = () => {
    return id.includes('@') && pw.length >= 5;
  };

  const handleLogin = () => {
    navigate('/main-heeyeon');
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">westagram</div>
        <div className="login-info">
          <div className="input-container">
            <input
              className="input-box"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={saveUserId}
            />
            <input
              className="input-box"
              type="password"
              placeholder="비밀번호"
              onChange={saveUserPw}
            />
          </div>
          <button
            className={`login-btn ${isValid() ? 'color-change' : ''}`}
            disabled={!isValid()}
            onClick={handleLogin}
          >
            로그인
          </button>
        </div>
        <a href className="forgotpw">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};
export default LoginHeeyeon;
