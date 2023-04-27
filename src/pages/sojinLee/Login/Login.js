import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const isInputValid = userId.includes('@') && userPassword.length >= 5; //includes() 메서드는 문자열에 특정 문자열이 포함되어 있는지 여부를 확인하기 위한 메서드로써 userid에 @이 포함되어 있는지 password가 5글자 이상인지 포함되어있는지 확인

  const saveUserId = event => {
    setUserId(event.target.value);
  };

  const saveUserPassword = event => {
    setUserPassword(event.target.value);
  };

  const goToMain = () => {
    navigate('/main-sojin');
    // fetch('http://10.58.52.140:3001/users/logIn', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     email: userId,
    //     password: userPassword,
    //   }),
    // })
    //   .then(response => {
    //     console.log('res>>>', response);
    //     return response.json();
    //   })
    //   .then(result => {
    //     console.log(result);
    //     localStorage.setItem('token', result.accessToken);
    //   });
  };

  // // fetch('http://10.58.52.140:4000/users/signup', {
  // //   method: 'post',
  // // })
  // //   .then(res => {
  // //     res.json();
  // //   })
  // //   .then(data => {});

  return (
    <div className="login">
      <h4>WeStagram</h4>
      <div className="inputwrap">
        <input
          className="user"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
          value={userId}
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPassword}
          value={userPassword}
        />
      </div>
      <button
        type="button"
        onClick={goToMain}
        className={isInputValid ? 'buttonlogin' : 'buttonlogindisabled'}
        disabled={!isInputValid}
      >
        로그인
      </button>
      <div className="forgetpassword">
        <span>
          <a href="/forgetpassword">비밀번호를 잊으셨나요?</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
