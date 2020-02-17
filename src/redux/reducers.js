import { combineReducers } from 'redux';
import userReducer from './user/reducers';
import recipeReducer from './recipe/reducers';

const rootReducer = combineReducers({ userReducer, recipeReducer });

export default rootReducer;
