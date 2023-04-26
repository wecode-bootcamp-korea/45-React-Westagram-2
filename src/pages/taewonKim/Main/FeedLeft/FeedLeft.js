import React, { useEffect, useState } from 'react';
import './FeedLeft.scss';

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

const FeedLeft = () => {
  const [comment, setComment] = useState('');
  const [postBtn, setPostBtn] = useState(false);
  const [reviewes, setReviewes] = useState([]);
  const [feed, setFeed] = useState();

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

  useEffect(() => {
    fetch('./data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  if (!feed) return;

  return (
    <React.Fragment className="feed-left-box">
      {feed.map(
        ({
          id,
          profilePhoto,
          username,
          feedPhoto,
          likeUserPhoto,
          likeUserName,
          feedText,
          postTime,
        }) => {
          return (
            <article className="feed-left" key={id}>
              <div className="feed-top">
                <div className="user-info">
                  <img alt="my_photo" className="photo" src={profilePhoto} />
                  <p className="nick-name">{username}</p>
                </div>
                <button className="more-btn">
                  <img
                    alt="more"
                    className="more"
                    src="images/taewonKim/dot.svg"
                  />
                </button>
              </div>
              <div className="feed-main">
                <img alt="main_image" className="feed-img" src={feedPhoto} />
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
                  <img alt="user" className="photo" src={likeUserPhoto} />
                  <p className="nick-name">{likeUserName} 님이 좋아합니다.</p>
                </div>
                <div className="feed-text-box">
                  <p className="feed-text">{feedText}</p>
                  <p className="upload-time">{postTime}분전</p>
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
          );
        }
      )}
    </React.Fragment>
  );
};

export default FeedLeft;
