import React, { useState } from 'react';
import './CommentInput.scss';

const CommentInput = props => {
  const { setComments } = props;
  const [inputText, setInputText] = useState('');

  const handleClick = () => {
    if (inputText.length >= 1) {
      postComment();
    }
  };
  const now = new Date();
  const nowMillis = now.getTime();

  const postComment = () => {
    setComments(prev => {
      return [
        ...prev,
        {
          name: 'juicy',
          commentBody: inputText,
          isLiked: false,
          time: nowMillis,
        },
      ];
    });
    setInputText('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && inputText.length > 0) {
      postComment();
      setInputText('');
    }
  };

  return (
    <div className="comment-form-wrapper">
      <input
        type="text"
        value={inputText}
        placeholder="댓글 달기..."
        className="comment-box"
        onChange={e => {
          setInputText(e.target.value);
        }}
        onKeyUp={handleKeyDown}
      />
      <button
        className={`btn-post-comment${inputText.length > 0 ? '-blue' : ''}`}
        onClick={handleClick}
      >
        게시
      </button>
    </div>
  );
};

export default CommentInput;
