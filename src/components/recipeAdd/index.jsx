import React from 'react';
import PropTypes from 'prop-types';
import './recipeAdd.scss';

function RecipeAdd(props) {
  const { send } = props;
  return (
    <div className="recipeAdd">
      <form>
        <label htmlFor="title">
          <input type="text" placeholder="Title" id="title" onInput={send} />
        </label>
        <label htmlFor="instruction">
          <textarea name="" id="instruction" cols="30" rows="10" />
        </label>
        <label htmlFor="advice">
          <textarea name="" id="advice" cols="30" rows="10" />
        </label>
        <label htmlFor="cal">
          <input type="text" placeholder="cal" id="cal" />
        </label>
        <label htmlFor="proteins">
          <input type="text" placeholder="proteins" id="proteins" />
        </label>
        <label htmlFor="fats">
          <input type="text" placeholder="fats" id="fats" />
        </label>
        <label htmlFor="carbohydrates">
          <input type="text" placeholder="carbohydrates" id="carbohydrates" />
        </label>
        <label htmlFor="portion">
          <input type="text" placeholder="portion" id="portion" />
        </label>
        <label htmlFor="time">
          <input type="text" placeholder="time" id="time" />
        </label>
        <label htmlFor="img">
          <input type="file" placeholder="src to imgage" id="img" />
        </label>
        <label htmlFor="Submit">
          <input type="submit" value="Submit" id="Submit" />
        </label>
      </form>
    </div>
  );
}
RecipeAdd.propTypes = {
  send: PropTypes.func.isRequired,
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
RecipeAdd.defaultProps = {
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

export default RecipeAdd;
