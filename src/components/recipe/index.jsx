import React from 'react';
import PropTypes from 'prop-types';
import './recipe.scss';

import RecipeHeader from './recipeHeader';
import Slider from './slider';
import RecipeMeta from './recipeMeta';
import RecipeInstruction from './recipeInstruction';
import Commentary from './commentary';
import SeemsLike from './seemsLike';

function Recipe(props) {
  const { recipe } = props;

  return (
    <div className="recipe">
      <div className="leftSide">
        <RecipeHeader
          headerData={{ title: recipe.title, addData: recipe.addData }}
        />
        <Slider imgs={recipe.imgs} />
        <RecipeMeta metaData={{ meta: recipe.meta }} />
      </div>
      <div className="rightSide">
        <RecipeInstruction
          instructionData={{
            instruction: recipe.instruction,
            advice: recipe.advice,
          }}
        />
        <Commentary comments={recipe.comments} />
        <SeemsLike />
      </div>
    </div>
  );
}
Recipe.propTypes = {
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
Recipe.defaultProps = {
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

export default Recipe;
