import React, { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [comment, setComment] = useState([]);
  const [newcomment, setNewcomment] = useState('');

  const AddcomentHandler = event => {
    event.preventDefault();

    if (newcomment !== '') {
      const addId = comment.length > 0 ? comment[comment.length - 1].id + 1 : 1;

      const addReply = {
        id: addId,
        userid: 'jinny',
        conent: newcomment,
      };
      setComment([...comment, addReply]);
      setNewcomment('');
    }
  };
  return (
    <>
      <div className="topmenu">
        <div className="logoimg">
          <img
            className="instalogo"
            src="/images/sojinLee/instagramlogo.png"
            alt="인스타그램 로고"
          />
          <h3>WeStagram</h3>
        </div>
        <div className="logo">
          <input className="search" type="text" placeholder="검색" size="45" />
        </div>
        <div className="rightmenu">
          <img
            className="circinus"
            src="/images/sojinLee/instagramCircinus.png"
            alt="인스타그램 나침판"
          />
          <img
            className="heart"
            src="/images/sojinLee/instagramheart.png"
            alt="인스타그램 좋아요"
          />
          <img
            className="person"
            src="/images/sojinLee/instagramPerson.png"
            alt="인스타그램 사람"
          />
        </div>
      </div>
      <main>
        <article className="content">
          <div className="wes">
            <div className="info">
              <img
                className="food"
                src="/images/sojinLee/food.jpg"
                alt="음식"
              />
              <h5>sojin</h5>
            </div>
            <div className="feeds">
              <img
                className="street"
                src="/images/sojinLee/street.jpg"
                alt="거리"
              />
            </div>
            <div className="likefeeds">
              <img
                className="like"
                src="/images/sojinLee/instagramheart.png"
                alt="좋아요"
              />
              <img
                className="reply"
                src="/images/sojinLee/instagramreply.png"
                alt="댓글"
              />
              <img
                className="message"
                src="/images/sojinLee/instagramDM.png"
                alt="DM"
              />
            </div>
            <div className="replyfeeds">
              <div className="imagefeeds">
                <img
                  className="dog"
                  src="/images/sojinLee/dog.jpg"
                  alt="강아지"
                />
                <h5>ZzangGu님 외 여러명이 좋아합니다.</h5>
              </div>
              <div className="replycontents">
                {comment.map((reply, index) => (
                  <div key={index}>
                    <p style={{ textAlign: 'left' }}>
                      {reply.userid} : {reply.conent}
                    </p>
                  </div>
                ))}
              </div>
              <input
                className="replywrite"
                placeholder=""
                size="30"
                value={newcomment}
                onChange={event => setNewcomment(event.target.value)}
                onKeyDown={event => {
                  if (event.key === 'Enter') {
                    AddcomentHandler(event);
                  }
                }}
              />
              <button
                className="replybtn"
                type="button"
                onClick={AddcomentHandler}
              >
                게시
              </button>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Main;
