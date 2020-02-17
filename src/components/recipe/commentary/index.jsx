import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import './comentary.scss';

function Comentary(props) {
  const { comments } = props;

  return (
    <div className="comentary">
      <h2>Comments</h2>
      {comments && comments.length !== 0 ? (
        comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))
      ) : (
        <div />
      )}
    </div>
  );
}
Comentary.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({})),
};
Comentary.defaultProps = {
  comments: [],
};

export default Comentary;
