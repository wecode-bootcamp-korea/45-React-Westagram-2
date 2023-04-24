import React from 'react';
import CommentItem from './CommentItem/CommentItem';
import './CommentList.scss';

const CommentList = props => {
  const { comments, setComments } = props;

  function removeItem(commentItem) {
    setComments(comments => {
      return comments.filter(comment => comment !== commentItem);
    });
  }

  const toggleLiked = commentItem => {
    const newComments = comments.map(element => {
      if (element === commentItem) {
        return {
          ...element,
          isLiked: !element.isLiked,
        };
      }
      return element;
    });
    setComments(newComments);
  };

  return (
    <>
      {comments.map((comment, index) => {
        return (
          <CommentItem
            key={index}
            comment={comment}
            onRemove={removeItem}
            toggleLiked={toggleLiked}
          />
        );
      })}
    </>
  );
};

export default CommentList;
