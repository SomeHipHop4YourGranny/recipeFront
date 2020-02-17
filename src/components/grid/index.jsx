/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import './grid.scss';
import Card from './card';

function Grid(props) {
  const { recipes } = props;

  return (
    <div className="grid">
      {recipes && recipes.length !== 0 ? (
        recipes.map((recipe) => <Card key={recipe._id} recipe={recipe} />)
      ) : (
        <div />
      )}
    </div>
  );
}

Grid.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
};
Grid.defaultProps = {
  recipes: [],
};

export default Grid;
