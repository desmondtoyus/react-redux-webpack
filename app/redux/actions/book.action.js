import {
  BOOK,
  RESET_REDUCER,
} from './types';

export const resetReducer = () => (dispatch) => {
  dispatch({ type: RESET_REDUCER });
};
export const bookInputChange = ({ prop, value }) => (dispatch) => {
  dispatch({ type: BOOK, prop, value });
};
