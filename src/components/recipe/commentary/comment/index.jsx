import React from 'react';
import PropTypes from 'prop-types';

import './comment.scss';

function Comment(props) {
  const { comment } = props;

  return (
    <div className="comment">
      <div className="commentInfo">
        <img
          src={comment.comment._author.avatar}
          alt="avatar"
          className="avatar"
        />
        <div className="userMeta">
          <span>{comment.comment._author.login}</span>
          <span>Date</span>
        </div>
      </div>
      <div className="commentText">{comment.comment.text}</div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    comment: PropTypes.shape({
      text: PropTypes.string,
      _author: PropTypes.shape({
        login: PropTypes.string,
        avatar: PropTypes.string,
      }),
    }),
  }),
};
Comment.defaultProps = {
  comment: {
    comment: {
      text: '',
      _author: {
        login: '',
        avatar: '',
      },
    },
  },
};

export default Comment;
