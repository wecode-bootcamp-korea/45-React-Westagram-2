import React, { useState } from 'react';
import FeedRight from '../FeedRight/FeedRight';
import './Main.scss';

export const MainReview = ({ id, value }) => {
  return (
    <li className="comment-list" key={id}>
      <p className="comment-user">jae_dragon</p>
      <p className="comment-text">{value}</p>
      <button className="comment-like-btn">
        <img
          alt="like"
          src="images/taewonKim/commentHeart.svg"
          className="comment-like-icon"
        />
      </button>
    </li>
  );
};

const MainTaewon = () => {
  const [comment, setComment] = useState('');
  const [postBtn, setPostBtn] = useState(false);
  const [reviewes, setReviewes] = useState([]);

  const saveComment = e => {
    setComment(e.target.value);
    setPostBtn(e.target.value.length >= 1 ? true : false);
  };

  const addReivew = () => {
    if (comment.length) {
      setReviewes([...reviewes, { id: reviewes.length + 1, value: comment }]);
      setComment('');
      setPostBtn(false);
    }
  };
  // if (!footerList) return;

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
                src="https://picsum.photos/50/50"
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
                className="photo"
                src="https://picsum.photos/50/50"
              />
              <p className="nick-name">samsung 님이 좋아합니다.</p>
            </div>
            <div className="feed-text-box">
              <p className="feed-text">애플 삼성에 팔거에요!</p>
              <p className="upload-time">50분전</p>
            </div>
            <ul className="post-comment-box">
              {reviewes.map(({ id, value }) => {
                return <MainReview key={id} id={id} value={value} />;
              })}
            </ul>
            <div className="comment-box">
              <form onSubmit={e => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="comment"
                  value={comment}
                  onChange={saveComment}
                />
                <button
                  className={`post-btn ${
                    postBtn ? 'post-btn-active' : 'post-btn-default'
                  }`}
                  disabled={!postBtn}
                  onClick={addReivew}
                >
                  게시
                </button>
              </form>
            </div>
          </div>
        </article>
        <FeedRight />
      </div>
    </div>
  );
};

export default MainTaewon;
