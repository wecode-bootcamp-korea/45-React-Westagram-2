import React from 'react';
import './CommentItem.scss';

//댓글
const CommentItem = props => {
  const { comment, onRemove, toggleLiked } = props;

  const now = new Date();
  const nowMillis = now.getTime();

  const showTime = a => {
    const timeDiff = Math.round((nowMillis - a) / 1000 / 60);
    if (timeDiff < 1) {
      return '방금 전';
    } else if (timeDiff < 60) {
      return `${timeDiff}분 전`;
    } else if (timeDiff < 1440) {
      return `${Math.round(timeDiff / 60)}시간 전`;
    } else {
      return `${Math.round(timeDiff / 1440)}일 전`;
    }
  };

  return (
    <div className="comment-item">
      <div className="comment-section">
        <div className="comment-section-left">
          <div>{comment.name}</div>
          <div className="comment-section-comment">{comment.commentBody}</div>
        </div>
        <div className="img-gap">
          <button
            className="comment-heart btn-remove"
            onClick={() => {
              onRemove(comment);
            }}
          >
            삭제
          </button>
          <div
            className={`${comment.isLiked ? 'red' : 'transparent'}-heart`}
            onClick={() => toggleLiked(comment)}
          />
        </div>
      </div>
      <div className="font-color-gray comment-section-left">
        {showTime(comment.time)}
      </div>
    </div>
  );
};

export default CommentItem;
