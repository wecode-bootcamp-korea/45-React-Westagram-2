import React, { useState, useEffect } from 'react';
import './Main.scss';

const Comment = props => {
  const { userid, comment } = props;
  return (
    <div className="comment">
      <p>
        {userid}: {comment}
      </p>
    </div>
  );
};
const Main = () => {
  const [comment, setComment] = useState([]);
  const [newcomment, setNewcomment] = useState('');
  const [newReply, setNewReply] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setNewReply(data);
      });
  }, []);

  const AddcomentHandler = event => {
    event.preventDefault();

    if (newcomment !== '') {
      const addId = comment.length > 0 ? comment[comment.length - 1].id + 1 : 1; //comment 배열의 길이가 0인 경우, 새 댓글의 ID는 1이 됩니다. 그러나 comment 배열에 이미 댓글이 있는 경우, 마지막 댓글의 ID에 1을 더한 값이 새 댓글의 ID가 된다.

      const addReply = {
        id: addId,
        userid: 'jinny',
        comment: newcomment,
      };
      setComment([...comment, addReply]); //. 배열의 전개 연산자(...)를 사용하여 이전 배열의 모든 항목을 새 배열에 복사하고 기존의 comment 배열과 addReply 객체를 합쳐서 새로운 배열을 만든다.
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
            <div className="rightside">
              <img
                className="streetside"
                src="/images/sojinlee/food.jpg"
                alt="사이드 이미지"
              />
              <div class="right">
                <span className="wesid">
                  <h2>sojin</h2>
                </span>
              </div>
              <span className="rightaside">
                <ul>
                  {RIGHT_ASIDE.map(info => (
                    <li key={info.id}>
                      <a href={info.link}>{info.text}</a>
                    </li>
                  ))}
                </ul>
              </span>
            </div>
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
                <div className="replycontents">
                  <div className="replycontents">
                    {comment.map(comment => (
                      <Comment
                        key={comment.id}
                        userid={comment.userid}
                        comment={comment.comment}
                      />
                    ))}
                    {/*key 속성은 리액트에서 리스트를 렌더링할 때 각 아이템을 식별하는 역할을 함 */}
                  </div>
                </div>
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
                <div className="replycontents">
                  <div className="replycontents">
                    {comment.map(comment => (
                      <Comment
                        key={comment.id}
                        userid={comment.userid}
                        comment={comment.comment}
                      />
                    ))}
                    {/*key 속성은 리액트에서 리스트를 렌더링할 때 각 아이템을 식별하는 역할을 함 */}
                  </div>
                </div>
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
            {newReply.map(reply => (
              <div key={reply.id}>
                <span>{reply.userid}</span>
                <p>{reply.comment}</p>
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
};

export default Main;

const RIGHT_ASIDE = [
  { id: 1, link: '/introduce', text: '소개 , ' },
  { id: 2, link: '/help', text: '도움말 , ' },
  { id: 3, link: '/advertisement', text: '홍보 센터, ' },
  { id: 4, link: '/api', text: 'API, ' },
  { id: 5, link: '/employment', text: '채용 정보, ' },
  {
    id: 6,
    link: '/information',
    text: '개인정보처리방침. ',
  },
  { id: 7, link: '/promise', text: '약관 , ' },
  { id: 8, link: '/location', text: '위치, ' },
  { id: 9, link: '/popular', text: '인기 계정, ' },
  { id: 10, link: '/tag', text: '해시 태그, ' },
  { id: 11, link: '/lagnuage', text: '언어' },
];
