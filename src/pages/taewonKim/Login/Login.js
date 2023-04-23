import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const LoginTaewon = () => {
  const [idState, setIdState] = useState();
  const [pwState, setPwState] = useState();
  const [btnState, setBtnState] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    btnState === true ? navigate('/main-taewon') : alert('회원가입하세요');
  };

  const saveUserId = e => {
    setIdState(e.target.value);
    console.log('id :', e.target.value);
  };

  const saveUserPw = e => {
    setPwState(e.target.value);
    console.log('pw :', e.target.value);
  };

  const handleBtn = () => {
    return idState.includes('@') && pwState.length > 5
      ? setBtnState(true)
      : setBtnState(false);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-logo">Instagram</h1>
        <div className="input-box">
          <input
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={idState}
            onChange={saveUserId}
          />
          <input
            type="password"
            className="pw"
            placeholder="비밀번호"
            value={pwState}
            onChange={saveUserPw}
          />
        </div>
        <button
          type="submit"
          className={`"login-btn" ${btnState ? 'btn-active' : 'btn-default'}`}
          disabled={btnState ? 'btnActive' : 'btnDefault'}
          onClick={handleLogin}
        >
          로그인
        </button>
        <div className="find-pw">
          <a href="./">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};
export default LoginTaewon;
