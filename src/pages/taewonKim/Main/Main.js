import React from 'react';
import './Main.scss';

const MainTaewon = () => {
  return (
    <div className="main">
      <nav className="navContainer">
        <div className="navBox">
          <div className="navLeft">
            <img
              alt="instagram icon"
              className="navIcon"
              src="images/taewonKim/아이콘.png"
            />
            <h1 className="feedLogo">Instagram</h1>
          </div>
          <input type="text" placeholder="검색" className="navSearch" />
          <div className="navRight">
            <button className="searchBtn">
              <img
                src="images/taewonKim/탐색.png"
                alt="search icon"
                className="searchIcon"
              />
            </button>
            <button className="heartBtn">
              <img
                src="images/taewonKim/하트.png"
                alt="like icon"
                className="heartIcon"
              />
            </button>
            <button className="mypageBtn">
              <img
                src="images/taewonKim/마이페이지.png"
                alt="my page"
                className="mypageIcon"
              />
            </button>
          </div>
        </div>
      </nav>
      <div className="mainContainer">
        <article className="feed">
          <div className="feedTop">
            <div className="userInfo">
              <img
                alt="my_photo"
                className="photo"
                src="images/taewonKim/user/user1.jpg"
              />
              <p className="nickName">apple_official</p>
            </div>
            <button className="moreBtn">
              <img alt="more" className="more" src="images/taewonKim/dot.svg" />
            </button>
          </div>
          <div className="feedMain">
            <img
              alt="main_image"
              className="feedImg"
              src="images/taewonKim/무지개사과.jpeg"
            />
          </div>
          <div className="feedBottom">
            <div className="feedInfoBox">
              <div className="feedInfoLeft">
                <button className="feedInfoBtn">
                  <img
                    alt="feed_like_icon"
                    className="feedLikeIcon"
                    src="images/taewonKim/heart.svg"
                  />
                </button>
                <button className="feedInfoBtn">
                  <img
                    alt="feed_comment_icon"
                    className="feedCommentIcon"
                    src="images/taewonKim/comment.svg"
                  />
                </button>
                <button className="feedInfoBtn">
                  <img
                    alt="feed_share_icon"
                    className="feedShareIcon"
                    src="images/taewonKim/share.svg"
                  />
                </button>
              </div>
              <div className="feedInfoRight">
                <button className="feedInfoBtn">
                  <img
                    alt="feed_bookmark_icon"
                    className="feedBookmarkIcon"
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
              <p className="nickName">samsung 님이 좋아합니다.</p>
            </div>
            <div className="feedTextBox">
              <p className="feedText">애플 삼성에 팔거에요!</p>
              <p className="uploadTime">50분전</p>
            </div>
            <div className="postCommentBox">
              <div className="commentList">
                <p className="commentUser">steve_jobs</p>
                <p className="commentText">그러지마!!!</p>
                <button className="commentLikeBtn">
                  <img
                    alt="like"
                    src="images/taewonKim/commentHeart.svg"
                    className="commentLikeIcon"
                  />
                </button>
              </div>
            </div>
            <div className="commentBox">
              <input
                type="text"
                placeholder="댓글 달기..."
                className="comment"
              />
              <button className="postBtn postBtnDefault">게시</button>
            </div>
          </div>
        </article>
        <div className="feedSub">
          <div className="subMe">
            <div className="subMeLeft">
              <img src="images/taewonKim/user/user3.jpg" className="subImg" />
            </div>
            <div className="subMeRight">
              <p className="nickName">wecode_bootcamp</p>
              <p className="grayfont">WeCode | 위코드</p>
            </div>
          </div>
          <div className="subStory">
            <div className="subStoryTop">
              <p className="grayfont">스토리</p>
              <button className="subMore">모두보기</button>
            </div>
            <div className="subStoryList">
              <div className="user">
                <img src="images/taewonKim/user/user4.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">intel</p>
                  <p className="uploadTime">15분전</p>
                </div>
              </div>
              <div class="user">
                <img src="images/taewonKim/user/user5.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">lg</p>
                  <p className="uploadTime">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user6.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">google</p>
                  <p className="uploadTime">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user7.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">facebook</p>
                  <p className="uploadTime">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user8.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">kakao</p>
                  <p className="uploadTime">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user9.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">netflix</p>
                  <p className="uploadTime">15분전</p>
                </div>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user10.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">tsmc</p>
                  <p className="uploadTime">15분전</p>
                </div>
              </div>
            </div>
          </div>
          <div className="subRecommend">
            <div className="recommendTop">
              <p className="grayfont">회원님을 위한 추천</p>
              <button className="subMore">모두보기</button>
            </div>
            <div className="subRecommendList">
              <div className="user">
                <img src="images/taewonKim/user/user11.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">amazon</p>
                  <p className="uploadTime">2명이 좋아합니다.</p>
                </div>
                <button className="follow">팔로우</button>
              </div>

              <div className="user">
                <img src="images/taewonKim/user/user12.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">meta</p>
                  <p className="uploadTime">2명이 좋아합니다.</p>
                </div>
                <button className="follow">팔로우</button>
              </div>
              <div className="user">
                <img src="images/taewonKim/user/user13.jpg" className="photo" />
                <div className="nameTime">
                  <p className="nickName">naver</p>
                  <p className="uploadTime">2명이 좋아합니다.</p>
                </div>
                <button className="follow">팔로우</button>
              </div>
            </div>
          </div>
          <div className="pageInfo">
            <p className="infoList">
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
