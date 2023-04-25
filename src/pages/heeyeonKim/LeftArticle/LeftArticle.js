import React, { useState, useEffect } from 'react';
import CommentList from './CommentList/CommentList';
import CommentInput from './CommentInput/CommentInput';
import './LeftArticle.scss';

const LeftArticle = () => {
  const [feeds, setFeeds] = useState(null);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);

  if (!feeds) return <></>;

  return <CardsList feeds={feeds} />;
};

export default LeftArticle;

const CardsList = props => {
  const { feeds } = props;

  return (
    <div className="cardList">
      {feeds.map(feed => {
        return <Card feed={feed} key={feed.id} />;
      })}
    </div>
  );
};

export const Card = props => {
  const { feed } = props;
  const { name, profileimg, mainimg, isLiked, commentimg, likedperson, text } =
    feed;

  const [comments, setComments] = useState([]);
  return (
    <div className="article-container">
      <article className="artc-wrapper">
        <div className="artc-header">
          <div className="artc-profile">
            <div>
              <img src={profileimg} className="personal-profile" alt="" />
            </div>
            <div>{name}</div>
          </div>
          <div>
            <img
              className="artc-option"
              src="/images/heeyeonKim/option.png"
              alt=""
            />
          </div>
        </div>
        <div style={{ lineHeight: 0 }}>
          <img className="main-img" src={mainimg} alt="" />
        </div>
        <div className="react-section">
          <div className="react-left">
            <img
              src={`/images/heeyeonKim/${isLiked ? 'reaction_' : ''}heart.png`}
              className="react-img"
              alt=""
            />
            <img
              src="/images/heeyeonKim/speech.png"
              className="react-img"
              alt=""
            />
            <img
              src="/images/heeyeonKim/upload.png"
              className="react-img"
              alt=""
            />
          </div>
          <div className="react-right">
            <img
              src="/images/heeyeonKim/ribbon.png"
              className="react-img"
              alt=""
            />
          </div>
        </div>
        <div className="show-like">
          <img src={commentimg} alt="" className="like-profile" />
          <div>{`${likedperson}님 외 10명이 좋아합니다`}</div>
        </div>
        <div className="post-info">
          <div>{name}</div>
          <div>{text}</div>
        </div>
        <CommentList comments={comments} setComments={setComments} />
        <CommentInput setComments={setComments} />
      </article>
    </div>
  );
};
