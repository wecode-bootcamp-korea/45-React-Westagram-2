import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

// 이소진의 컴포넌트
import LoginSojin from './pages/sojinLee/Login/Login';
import MainSojin from './pages/sojinLee/Main/Main';

//김태원의 컴포넌트
import LoginTaewon from './pages/taewonKim/Login/Login';
import MainTaewon from './pages/taewonKim/Main/Main';

//김희연의 컴포넌트
import LoginHeeyeon from './pages/heeyeonKim/Login/Login';
import MainHeeyeon from './pages/heeyeonKim/Main/Main';
//오승민의 컴포넌트
import LoginSeungmin from './pages/seungminOh/Login/Login';
import MainSeungmin from './pages/seungminOh/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login-sojin" element={<LoginSojin />} />
        <Route path="/main-sojin" element={<MainSojin />} />
        <Route path="/login-taewon" element={<LoginTaewon />} />
        <Route path="/main-taewon" element={<MainTaewon />} />
        <Route path="/login-heeyeon" element={<LoginHeeyeon />} />
        <Route path="/main-heeyeon" element={<MainHeeyeon />} />
        <Route path="/login-seungmin" element={<LoginSeungmin />} />
        <Route path="/main-seungmin" element={<MainSeungmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
