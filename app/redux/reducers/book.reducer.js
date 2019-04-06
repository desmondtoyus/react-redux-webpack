import { BOOK } from '../actions/types';

const INITIAL_STATE = {
  name: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case BOOK:
      return {
        ...state,
        [action.prop]: action.value,
      };
    default:
      return state;
  }
}
