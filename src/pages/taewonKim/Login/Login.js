import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const LoginTaewon = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/main');
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <h1 className="loginLogo">Instagram</h1>
        <div className="inputBox">
          <input
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input type="password" className="pw" placeholder="비밀번호" />
        </div>
        <button className="loginBtn btnDefault" onClick={handleLogin}>
          로그인
        </button>
        <div className="findPw">
          <a href="./">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};
export default LoginTaewon;
