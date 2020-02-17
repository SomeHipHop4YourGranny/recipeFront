import { RECIPE_ACTION } from './actions';

const initialState = {
  recipe: {},
  recipes: [],
  errors: [],
  isLoading: true,
  meta: { page: 1, count: 0, perPage: 10 },
};
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_ACTION.FETCHING:
      return { ...state, isLoading: true };
    case RECIPE_ACTION.FETCH_RECIPES_SUCCESS:
      return { ...state, isLoading: false, recipes: action.payload };
    case RECIPE_ACTION.FETCH_RECIPES_FAILURE:
      return { ...state, isLoading: false, errors: action.payload };
    case RECIPE_ACTION.FETCH_RECIPE_SUCCESS:
      return { ...state, isLoading: false, recipe: action.payload };
    case RECIPE_ACTION.FETCH_RECIPE_FAILURE:
      return { ...state, isLoading: false, errors: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
