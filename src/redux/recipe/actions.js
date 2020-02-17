import { Api } from '../../utils';

const RECIPE_ACTION = {
  FETCHING: 'FETCHING_POSTS',
  FETCH_RECIPES_SUCCESS: 'FETCHING_RECIPES_SUCCESS',
  FETCH_RECIPES_FAILURE: 'FETCHING_RECIPES_FAILURE',
  FETCH_RECIPE_SUCCESS: 'FETCHING_RECIPE_SUCCESS',
  FETCH_RECIPE_FAILURE: 'FETCHING_RECIPE_FAILURE',
};

const fetching = () => ({ type: RECIPE_ACTION.FETCHING });
const fetchRecipesSuccess = (res) => ({
  type: RECIPE_ACTION.FETCH_RECIPES_SUCCESS,
  payload: res.data.recipe,
});
const fetchRecipesFailure = (res) => ({
  type: RECIPE_ACTION.FETCH_RECIPES_FAILURE,
  payload: res,
});
const fetchRecipeSuccess = (res) => ({
  type: RECIPE_ACTION.FETCH_RECIPE_SUCCESS,
  payload: res.data,
});
const fetchRecipeFailure = (res) => ({
  type: RECIPE_ACTION.FETCH_RECIPE_FAILURE,
  payload: res,
});

const api = ({ type, recipeId, data }) => (dispatch) => {
  dispatch(fetching());
  switch (type) {
    case Api.apiMethods.GET_RECIPES:
      Api.recipeApi
        .getRecipes(data)
        .then((res) => {
          console.log(res);
          dispatch(fetchRecipesSuccess(res));
        })
        .catch((res) => {
          console.log(res);
          dispatch(fetchRecipesFailure(res));
        });
      break;
    case Api.apiMethods.GET_RECIPE:
      Api.recipeApi
        .getRecipe(recipeId)
        .then((res) => {
          console.log(res.data);
          dispatch(fetchRecipeSuccess(res));
        })
        .catch(({ response }) => {
          console.log(response.data);
          dispatch(fetchRecipeFailure(response));
        });
      break;
    case Api.apiMethods.POST_RECIPE:
      Api.recipeApi
        .postRecipe(data)
        .then((res) => {
          console.log(res.data);
          dispatch(fetchRecipeSuccess(res));
        })
        .catch(({ response }) => {
          console.log(response.data);
          dispatch(fetchRecipeFailure(response));
        });
      break;
    case Api.apiMethods.UPDATE_RECIPE:
      Api.recipeApi
        .updateRecipe(recipeId, data)
        .then((res) => {
          console.log(res.data);
          dispatch(fetchRecipeSuccess(res));
        })
        .catch(({ response }) => {
          console.log(response.data);
          dispatch(fetchRecipeFailure(response));
        });
      break;
    case Api.apiMethods.DELETE_RECIPE:
      Api.recipeApi
        .deleteRecipe(recipeId)
        .then((res) => {
          console.log(res.data);
          dispatch(fetchRecipeSuccess(res));
        })
        .catch(({ response }) => {
          console.log(response.data);
          dispatch(fetchRecipeFailure(response));
        });
      break;
    default:
  }
};

export { RECIPE_ACTION, api };
