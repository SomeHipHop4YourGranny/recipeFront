import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RecipeAdd, Errors } from '../../components';

import { recipeActions } from '../../redux/actions';

function AddRecipeContainer(props) {
  const { api, errors } = props;
  const send = ({ type, data = {} }) => {
    api({ type, data });
  };

  if (errors && errors.length !== 0) {
    return <Errors />;
  }

  return <RecipeAdd send={send} />;
}

AddRecipeContainer.propTypes = {
  api: PropTypes.func.isRequired,

  errors: PropTypes.arrayOf(PropTypes.object),
};
AddRecipeContainer.defaultProps = {
  errors: [],
};

const mapStateToProps = (state) => ({
  errors: state.recipeReducer.errors,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ api: recipeActions.api }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeContainer);
