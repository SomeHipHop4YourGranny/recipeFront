import { Cookie, Api } from '../../utils';

const USER_ACTION = {
  FETCH_USER_DATA_SUCCESS: 'FETCH_USER_DATA_SUCCESS',
  FETCH_USER_DATA_FAILURE: 'FETCH_USER_DATA_SUCCESS',
  FETCHING: 'FETCHING',
};

const fetchUserDataSuccess = (res) => {
  console.log(res);
  return {
    type: USER_ACTION.FETCHING_USER_DATA_SUCCESS,
    payload: res.data.message,
  };
};

const fetchUserDataFailure = (res) => {
  console.log(res);
  Cookie.deleteCookie('connect.sid');
  return { type: USER_ACTION.FETCH_USER_DATA_FAILURE, payload: res };
};

const fetching = () => ({ type: USER_ACTION.FETCHING });

const api = ({ type, data }) => (dispatch) => {
  dispatch(fetching());
  switch (type) {
    case Api.apiMethods.LOGIN:
      Api.userApi
        .signIn(data)
        .then((res) => {
          dispatch(fetchUserDataSuccess(res));
        })
        .catch((res) => {
          dispatch(fetchUserDataFailure(res));
        });
      break;
    default:
  }
};

export { USER_ACTION, api };
