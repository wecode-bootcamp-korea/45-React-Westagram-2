import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navli1">
        <a className="nav-logo" href="">
          <div className="logoimg" />
        </a>
        <div className="nav-title">westagram</div>
      </div>
      <div className="input-wrapper">
        <input className="input-search" type="search" placeholder="검색" />
      </div>
      <div className="navli3">
        <a href="">
          <img
            src="/images/heeyeonKim/explore.png"
            className="nav-img"
            alt=""
          />
        </a>
        <a href="">
          <img src="/images/heeyeonKim/heart.png" className="nav-img" alt="" />
        </a>
        <a href="">
          <img
            src="/images/heeyeonKim/profile.png"
            className="nav-img"
            alt=""
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
