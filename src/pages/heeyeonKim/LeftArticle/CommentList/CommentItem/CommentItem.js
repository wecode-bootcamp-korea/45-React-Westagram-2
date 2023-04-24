import React from 'react';
import './CommentItem.scss';

//댓글
const CommentItem = props => {
  const { comment, onRemove, toggleLiked } = props;
  return (
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
  );
};

export default CommentItem;
