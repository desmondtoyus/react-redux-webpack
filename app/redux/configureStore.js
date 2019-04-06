import { combineReducers } from 'redux';
import {
  sampleReducer,
  authReducer,
  bookReducer,
  sharedReducer,
  usersReducer,

} from './reducers';

const configureStore = combineReducers({
  sample: sampleReducer,
  auth: authReducer,
  book: bookReducer,
  shared: sharedReducer,
  users: usersReducer,

});
export default configureStore;
