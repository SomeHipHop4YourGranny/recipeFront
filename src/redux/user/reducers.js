import { USER_ACTION } from './actions';

const initialState = {
  user: {},
  isAuth: !!document.cookie,
  isLoading: false,
  error: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION.FETCHING_USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        isLoading: false,
        error: {},
      };
    case USER_ACTION.FETCHING_USER_DATA_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
        isAuth: false,
        isLoading: false,
      };

    case USER_ACTION.FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
export default { userReducer };
