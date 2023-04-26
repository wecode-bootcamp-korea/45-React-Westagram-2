import React, { useState, useEffect } from 'react';
import './Recommend.scss';

const Recommend = () => {
  const [recommend, setRecommend] = useState();

  useEffect(() => {
    fetch('./data/recommendData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setRecommend(data));
  }, []);

  if (!recommend) return;

  return (
    <>
      {recommend.map(({ id, src, username, like }) => {
        return (
          <div className="user" key={id}>
            <img alt="user-img" src={src} className="photo" />
            <div className="name-time">
              <p className="nick-name">{username}</p>
              <p className="upload-time">{like}명이 좋아합니다.</p>
            </div>
            <button className="follow">팔로우</button>
          </div>
        );
      })}
    </>
  );
};

export default Recommend;
