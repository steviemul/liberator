import { createReducer } from '@reduxjs/toolkit';
import { start, error } from './helper';

import * as actions from '../actions';

const initialState = {
  pending: false,
  error: null
};

export default createReducer(initialState, {
  [actions.deleteLibrary]: request => {
    start (request);
  },
  [actions.deleteLibrarySuccess]: (request) => {
    request.pending = false;
  },
  [actions.deleteLibraryFailure]: (request, action) => {
    error(request, action);
  }
});