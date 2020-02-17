import React from 'react';
import PropTypes from 'prop-types';
import './recipeInstruction.scss';

function RecipeInstruction(props) {
  const { instructionData } = props;
  return (
    <div className="recipeInstruction">
      <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li>#1</li>
        </ul>
      </div>

      <div className="instruction">
        <h2>Instruction</h2>
        <p>{instructionData.instruction}</p>
      </div>
      <div className="advice">
        <h2>Recipe advice</h2>
        <p>{instructionData.advice}</p>
      </div>
    </div>
  );
}
RecipeInstruction.propTypes = {
  instructionData: PropTypes.shape({
    instruction: PropTypes.string,
    advice: PropTypes.string,
  }),
};
RecipeInstruction.defaultProps = {
  instructionData: { instruction: '', advice: '' },
};

export default RecipeInstruction;
