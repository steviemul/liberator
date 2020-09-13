import { combineReducers } from 'redux';

import listReducer from './list';
import getReducer from './get';
import addReducer from './add';
import updateReducer from './update';
import deleteReducer from './delete';

const librariesReducer = combineReducers({
  list: listReducer,
  get: getReducer,
  add: addReducer,
  update: updateReducer,
  delete: deleteReducer
});

export default librariesReducer;