import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Api } from '../../utils';
import { Grid } from '../../components';
import { recipeActions } from '../../redux/actions';

function GridContainer(props) {
  const { api, recipes, isLoading, errors, meta } = props;
  console.log(isLoading, errors, meta);
  useEffect(() => {
    api({ type: Api.apiMethods.GET_RECIPES });
  }, [api]);
  return <Grid recipes={recipes} />;
}

GridContainer.propTypes = {
  api: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  meta: PropTypes.shape({
    page: PropTypes.number,
    count: PropTypes.number,
    perPage: PropTypes.number,
  }),
};
GridContainer.defaultProps = {
  recipes: [],
  errors: [],
  meta: {
    page: 1,
    count: 10,
    perPage: 10,
  },
};

const mapStateToProps = (state) => ({
  recipes: state.recipeReducer.recipes,
  isLoading: state.recipeReducer.isLoading,
  errors: state.recipeReducer.errors,
  meta: state.recipeReducer.meta,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ api: recipeActions.api }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
