import React, { useState, useEffect } from 'react';
import './Story.scss';

const Story = () => {
  const [story, setStory] = useState();

  useEffect(() => {
    fetch('./data/storyData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setStory(data));
  }, []);

  if (!story) return;

  return (
    <>
      {story.map(({ id, src, username, time }) => {
        return (
          <div className="user" key={id}>
            <img alt="user-img" src={src} className="photo" />
            <div className="name-time">
              <p className="nick-name">{username}</p>
              <p className="upload-time">{time}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Story;
