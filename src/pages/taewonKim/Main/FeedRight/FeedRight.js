import React from 'react';
import Story from './Story/Story';
import Footer from './Footer/Footer';
import Recommend from './Recommend/Recommend';
import './FeedRight.scss';

const FeedRight = () => {
  return (
    <div className="feed-right">
      <div className="sub-me">
        <div className="sub-me-left">
          <img
            alt="sub-img"
            src="https://picsum.photos/55/55"
            className="sub-img"
          />
        </div>
        <div className="sub-me-right">
          <p className="nick-name">wecode_bootcamp</p>
          <p className="grayfont">WeCode | 위코드</p>
        </div>
      </div>
      <div className="sub-story">
        <div className="sub-story-top">
          <p className="grayfont">스토리</p>
          <button className="sub-more">모두보기</button>
        </div>
        <ul className="sub-story-list">
          <Story />
        </ul>
      </div>
      <div className="sub-recommend">
        <div className="recommend-top">
          <p className="grayfont">회원님을 위한 추천</p>
          <button className="sub-more">모두보기</button>
        </div>
        <ul className="sub-recommend-list">
          <Recommend />
        </ul>
      </div>
      <div className="page-info">
        <ul className="info-list">
          <Footer />
        </ul>
        <p className="copyright">@ 2023 INSTAGRAM</p>
      </div>
    </div>
  );
};

export default FeedRight;
