import React from 'react';
import PropTypes from 'prop-types';
import './recipeHeader.scss';

function RecipeHeader(props) {
  const { headerData } = props;

  return (
    <div className="recipeHeader">
      <h2>{headerData.title}</h2>
      <div className="recipeInfo">
        <span>time:{headerData.addData.time}</span>
        <span>
          portion:{headerData.addData.portion}
          <br />
        </span>
        <span>calories:{headerData.addData.calories}</span>
        <span>proteins:{headerData.addData.proteins}</span>
        <span>fats:{headerData.addData.fats}</span>
        <span>carbohydrates:{headerData.addData.carbohydrates}</span>
      </div>
    </div>
  );
}
RecipeHeader.propTypes = {
  headerData: PropTypes.shape({
    title: PropTypes.string,
    addData: PropTypes.shape({
      calories: PropTypes.string,
      proteins: PropTypes.string,
      fats: PropTypes.string,
      carbohydrates: PropTypes.string,
      portion: PropTypes.string,
      time: PropTypes.string,
    }),
  }),
};
RecipeHeader.defaultProps = {
  headerData: {
    title: '',
    addData: {
      calories: '0',
      proteins: '0',
      fats: '0',
      carbohydrates: '0',
      portion: '0',
      time: '0',
    },
  },
};
export default RecipeHeader;
