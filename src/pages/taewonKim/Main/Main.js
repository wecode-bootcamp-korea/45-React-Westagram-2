import React from 'react';
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
        <article className="feed">
          <div className="feed-top">
            <div className="user-info">
              <img
                alt="my_photo"
                className="photo"
                src="images/taewonKim/user/user1.jpg"
              />
              <p className="nick-name">apple_official</p>
            </div>
            <button className="more-btn">
              <img alt="more" className="more" src="images/taewonKim/dot.svg" />
            </button>
          </div>
          <div className="feed-main">
            <img
              alt="main_image"
              className="feed-img"
              src="images/taewonKim/무지개사과.jpeg"
            />
          </div>
          <div className="feed-bottom">
            <div className="feed-info-box">
              <div className="feed-info-left">
                <button className="feed-info-btn">
                  <img
                    alt="feed_like_icon"
                    className="feed-like-icon"
                    src="images/taewonKim/heart.svg"
                  />
                </button>
                <button className="feed-info-btn">
                  <img
                    alt="feed_comment_icon"
                    className="feed-comment-icon"
                    src="images/taewonKim/comment.svg"
                  />
                </button>
                <button className="feed-info-btn">
                  <img
                    alt="feed_share_icon"
                    className="feed-share-icon"
                    src="images/taewonKim/share.svg"
                  />
                </button>
              </div>
              <div className="feed-info-right">
                <button className="feed-info-btn">
                  <img
                    alt="feed_bookmark_icon"
                    className="feed-bookmark-icon"
                    src="images/taewonKim/bookmark.svg"
                  />
                </button>
              </div>
            </div>
            <div className="like">
              <img
                alt="user"
                class="photo"
                src="images/taewonKim/user/user2.jpg"
              />
              <p className="nick-name">samsung 님이 좋아합니다.</p>
            </div>
            <div className="feed-text-box">
              <p className="feed-text">애플 삼성에 팔거에요!</p>
              <p className="upload-time">50분전</p>
            </div>
            <div className="post-comment-box">
              <div className="comment-list">
                <p className="comment-user">steve_jobs</p>
                <p className="comment-text">그러지마!!!</p>
                <button className="comment-like-btn">
                  <img
                    alt="like"
                    src="images/taewonKim/commentHeart.svg"
                    className="comment-like-icon"
                  />
                </button>
              </div>
            </div>
            <div className="comment-box">
              <input
                type="text"
                placeholder="댓글 달기..."
                className="comment"
              />
              <button className="post-btn post-btn-default">게시</button>
            </div>
          </div>
        </article>
        <div className="feed-sub">
          <div className="sub-me">
            <div className="sub-me-left">
              <img src="images/taewonKim/user/user3.jpg" className="sub-img" />
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
            <div className="sub-story-list">
              <div className="user">
                <img src="images/taewonKim/user/user4.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">intel</p>
                  <p className="upload-time">15분전</p>
                </div>
              </div>
              <div class="user">
                <img src="images/taewonKim/user/user5.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">lg</p>
                  <p className="upload-time">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user6.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">google</p>
                  <p className="upload-time">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user7.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">facebook</p>
                  <p className="upload-time">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user8.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">kakao</p>
                  <p className="upload-time">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user9.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">netflix</p>
                  <p className="upload-time">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user10.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">tsmc</p>
                  <p className="upload-time">15분전</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-recommend">
            <div className="recommend-top">
              <p className="grayfont">회원님을 위한 추천</p>
              <button className="sub-more">모두보기</button>
            </div>
            <div className="sub-recommend-list">
              <div className="user">
                <img src="images/taewonKim/user/user11.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">amazon</p>
                  <p className="upload-time">2명이 좋아합니다.</p>
                </div>
                <button className="follow">팔로우</button>
              </div>

              <div className="user">
                <img src="images/taewonKim/user/user12.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">meta</p>
                  <p className="upload-time">2명이 좋아합니다.</p>
                </div>
                <button className="follow">팔로우</button>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user13.jpg" className="photo" />
                <div className="name-time">
                  <p className="nick-name">naver</p>
                  <p className="upload-time">2명이 좋아합니다.</p>
                </div>
                <button className="follow">팔로우</button>
              </div>
            </div>
          </div>
          <div className="page-info">
            <p className="info-list">
              Instagram 정보, 지원, 홍보 센터, API,채용
              정보,개인정보처리방침,약관,디렉터리,프로필,해시테그,언어
            </p>
            <p className="copyright">@ 2023 INSTAGRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTaewon;
