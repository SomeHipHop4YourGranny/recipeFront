import React from 'react';
import PropTypes from 'prop-types';
import './recipeMeta.scss';

function RecipeMeta(props) {
  const { metaData } = props;

  return (
    <div className="recipeMeta">
      <span>views:{metaData.meta.views}</span>
      <span>rating:{metaData.meta.rating}</span>
    </div>
  );
}
RecipeMeta.propTypes = {
  metaData: PropTypes.shape({
    meta: PropTypes.shape({
      views: PropTypes.number,
      rating: PropTypes.number,
    }),
  }),
};
RecipeMeta.defaultProps = {
  metaData: {
    meta: { views: 0, rating: 0 },
  },
};
export default RecipeMeta;
