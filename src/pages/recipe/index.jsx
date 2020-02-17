import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../../components';
import { RecipeContainer, AddRecipeContainer } from '../../containers';
import './recipePage.scss';

function RecipePage() {
  return (
    <div className="recipePage">
      <Header />
      <Switch>
        <Route exact path="/recipe/add" component={AddRecipeContainer} />
        <Route path="/recipe/:id" component={RecipeContainer} />
        <Route path="recipe/:id/modify" component={RecipeContainer} />
      </Switch>
    </div>
  );
}
RecipePage.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default RecipePage;
