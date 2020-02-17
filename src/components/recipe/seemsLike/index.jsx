import React from 'react';
import './seemsLike.scss';

function SeemsLike() {
  return (
    <div className="seemsLike">
      <h2>Seems like</h2>
      <div className="likeItems">
        <a href="/" className="likeItem">
          <img src="https://source.unsplash.com/1600x900/?food" alt="img" />
          <p>title</p>
        </a>
        <a href="/" className="likeItem">
          <img src="https://source.unsplash.com/1600x900/?food" alt="img" />
          <p>title</p>
        </a>
        <a href="/" className="likeItem">
          <img src="https://source.unsplash.com/1600x900/?food" alt="img" />
          <p>title</p>
        </a>
        <a href="/" className="likeItem">
          <img src="https://source.unsplash.com/1600x900/?food" alt="img" />
          <p>title</p>
        </a>
        <a href="/" className="likeItem">
          <img src="https://source.unsplash.com/1600x900/?food" alt="img" />
          <p>title</p>
        </a>
      </div>
    </div>
  );
}

export default SeemsLike;
