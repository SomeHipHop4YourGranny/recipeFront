import React from 'react';
import PropTypes from 'prop-types';
import './recipeModify.scss';

function RecipeModify() {
  return (
    <div className="recipeModify">
      <form>
        <input type="text" />
      </form>
    </div>
  );
}
RecipeModify.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    instruction: PropTypes.string,
    advice: PropTypes.string,
    addData: PropTypes.shape({
      calories: PropTypes.string,
      proteins: PropTypes.string,
      fats: PropTypes.string,
      carbohydrates: PropTypes.string,
      portion: PropTypes.string,
      time: PropTypes.string,
    }),
    meta: PropTypes.shape({
      views: PropTypes.number,
      rating: PropTypes.number,
    }),
    imgs: PropTypes.arrayOf(PropTypes.shape({})),
    comments: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};
RecipeModify.defaultProps = {
  recipe: {
    title: '',
    instruction: '',
    advice: '',
    addData: {
      calories: '',
      proteins: '',
      fats: '',
      carbohydrates: '',
      portion: '',
      time: '',
    },
    meta: {
      views: 0,
      rating: 0,
    },
  },
};

export default RecipeModify;
