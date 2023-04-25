import React, { useState } from 'react';

export const CommentComponent = comment => {
  return <div>{comment}</div>;
};

export default function Product() {
  const [comments, setComments] = useState([]);

  const [inputValue, setInputValue] = useState('');
  const handleSubmit = e => {
    setComments([...comments, { id: comments.length + 1, value: inputValue }]);
    e.preventDefault();
    setInputValue('');
  };
  const handleInputValue = e => {
    const value = e.target.value;
    console.log(value);
    setInputValue(value);
  };

  return (
    <div>
      {/* <form onSubmit={(e) => handleSubmit(e)}> */}
      <input onChange={handleInputValue} type="text" />
      <button onClick={e => handleSubmit(e)}>게시</button>
      {/* </form> */}
      {comments.map(comment => {
        return <CommentComponent comment={comment.value} />;
      })}
    </div>
  );
}
