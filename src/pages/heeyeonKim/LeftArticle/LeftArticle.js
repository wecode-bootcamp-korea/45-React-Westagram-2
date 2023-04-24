import React, { useState } from 'react';
import CommentList from './CommentList/CommentList';
import CommentInput from './CommentInput/CommentInput';
import './LeftArticle.scss';

const LeftArticle = () => {
  const [comments, setComments] = useState([]);

  return (
    <div className="article-container">
      <article className="artc-wrapper">
        <div className="artc-header">
          <div className="artc-profile">
            <div>
              <img
                src="/images/heeyeonKim/roonz-nl-ATgfRqpFfFI-unsplash 1.png"
                className="personal-profile"
                alt=""
              />
            </div>
            <div>wannagohome</div>
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
          <img src="/images/heeyeonKim/home1.png" alt="" />
        </div>
        <div className="react-section">
          <div className="react-left">
            <img
              src="/images/heeyeonKim/reaction_heart.png"
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
          <img
            src="/images/heeyeonKim/like_profile.png"
            alt=""
            className="like-profile"
          />
          <div>masego님 외 10명이 좋아합니다</div>
        </div>
        <div className="post-info">
          <div>wannagohome</div>
          <div>집에 가고싶다...</div>
        </div>
        <CommentList comments={comments} setComments={setComments} />
        <CommentInput setComments={setComments} />
      </article>
    </div>
  );
};

export default LeftArticle;
