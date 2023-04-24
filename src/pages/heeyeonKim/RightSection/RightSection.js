import React from 'react';
import './RightSection.scss';

const RightSection = () => {
  return (
    <div className="div-right">
      <div className="div-right-wrapper">
        <div className="me-profile">
          <div>
            <img
              src="/images/heeyeonKim/me-img.png"
              className="me-profile-img"
              alt=""
            />
          </div>
          <div className="me-profile-info">
            <div className="me-profile-id">patataco</div>
            <div className="me-profile-desc">45기 | 김희연</div>
          </div>
        </div>
        <div className="friends-list-wrapper">
          <div className="friends-list-header">
            <div className="font-color-gray">스토리</div>
            <div>모두 보기</div>
          </div>
          <ul className="friends-list">
            <li className="friends-info">
              <img
                src="/images/heeyeonKim/friends1.png"
                alt=""
                className="friends-img"
              />
              <div>
                <div>sweetpotato</div>
                <div className="showTime">16분 전</div>
              </div>
            </li>
            <li className="friends-info">
              <img
                src="/images/heeyeonKim/friends2.png"
                alt=""
                className="friends-img"
              />
              <div>
                <div>chickenbreast</div>
                <div className="showTime">3시간 전</div>
              </div>
            </li>
            <li className="friends-info">
              <img
                src="/images/heeyeonKim/friends3.png"
                alt=""
                className="friends-img"
              />
              <div>
                <div>vegetables</div>
                <div className="showTime">20시간 전</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="friends-list-wrapper">
          <div className="friends-list-header">
            <div className="font-color-gray">회원님을 위한 추천</div>
            <div>모두 보기</div>
          </div>
          <ul className="friends-list">
            <li className="friends-info follow-replace">
              <div className="friends-main-info">
                <img
                  src="/images/heeyeonKim/friends1.png"
                  alt=""
                  className="friends-img"
                />
                <div>
                  <div>chewchew</div>
                  <div className="showTime">rachel_님 외 2명이...</div>
                </div>
              </div>
              <div className="font-color-blue">팔로우</div>
            </li>
            <li className="friends-info follow-replace">
              <div className="friends-main-info">
                <img
                  src="/images/heeyeonKim/friends2.png"
                  alt=""
                  className="friends-img"
                />
                <div>
                  <div>tteokbokki</div>
                  <div className="showTime">juicy_j님 외 10...</div>
                </div>
              </div>
              <div className="font-color-blue">팔로우</div>
            </li>
            <li className="friends-info follow-replace">
              <div className="friends-main-info">
                <img
                  src="/images/heeyeonKim/friends3.png"
                  alt=""
                  className="friends-img"
                />
                <div>
                  <div>Lasagna</div>
                  <div className="showTime">mmjmje님 외 6명이...</div>
                </div>
              </div>
              <div className="font-color-blue">팔로우</div>
            </li>
          </ul>
        </div>
        <div className="font-color-gray text-setting">
          <div>
            instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙
            개인정보처리방침 ∙ 약관 ∙ 디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어
          </div>
          <div>© 2019 INSTAGRAM</div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
