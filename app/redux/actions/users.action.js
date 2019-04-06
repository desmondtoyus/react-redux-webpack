import {
  USERS,
  RESET_REDUCER,
} from './types';

export const resetReducer = () => (dispatch) => {
  dispatch({ type: RESET_REDUCER });
};
export const usersInputChange = ({ prop, value }) => (dispatch) => {
  dispatch({ type: USERS, prop, value });
};
