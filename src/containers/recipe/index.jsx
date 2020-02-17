import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Api } from '../../utils';
import { Recipe, Loader, Errors } from '../../components';

import { recipeActions } from '../../redux/actions';

function RecipeContainer(props) {
  const { api, recipe, isLoading, errors, match } = props;

  useEffect(() => {
    api({ type: Api.apiMethods.GET_RECIPE, recipeId: match.params.id });
  }, [api, match]);

  if (errors && errors.length !== 0) {
    return <Errors />;
  }
  if (!isLoading && Object.entries(recipe).length !== 0) {
    return <Recipe recipe={recipe} />;
  }
  return <Loader />;

  // !isLoading ? (
  //   errors && errors.length !== 0 ? (
  //     <Errors />
  //   ) : (
  //     <Recipe recipe={recipe} />
  //   )
  // ) : (
  //   <Loader />
  // );
}

RecipeContainer.propTypes = {
  api: PropTypes.func.isRequired,
  recipe: PropTypes.shape({}),
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
};
RecipeContainer.defaultProps = {
  recipe: {},
  errors: [],
};

const mapStateToProps = (state) => ({
  recipe: state.recipeReducer.recipe,
  isLoading: state.recipeReducer.isLoading,
  errors: state.recipeReducer.errors,
  meta: state.recipeReducer.meta,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ api: recipeActions.api }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
