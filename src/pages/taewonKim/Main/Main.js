import React from 'react';
import FeedLeft from './FeedLeft/FeedLeft';
import FeedRight from './FeedRight/FeedRight';
import './Main.scss';

const MainTaewon = () => {
  return (
    <div className="main">
      <nav className="nav-container">
        <div className="nav-box">
          <div className="nav-left">
            <img
              alt="instagram icon"
              className="nav-icon"
              src="images/taewonKim/아이콘.png"
            />
            <h1 className="feed-logo">Instagram</h1>
          </div>
          <input type="text" placeholder="검색" className="nav-search" />
          <div className="nav-right">
            <button className="search-btn">
              <img
                src="images/taewonKim/탐색.png"
                alt="search icon"
                className="search-icon"
              />
            </button>
            <button className="heart-btn">
              <img
                src="images/taewonKim/하트.png"
                alt="like icon"
                className="heart-icon"
              />
            </button>
            <button className="mypage-btn">
              <img
                src="images/taewonKim/마이페이지.png"
                alt="my page"
                className="mypage-icon"
              />
            </button>
          </div>
        </div>
      </nav>
      <div className="main-container">
        <div className="article-container">
          {/* FeedLeft 구역 */}
          <FeedLeft />
        </div>
        <FeedRight />
      </div>
    </div>
  );
};

export default MainTaewon;
