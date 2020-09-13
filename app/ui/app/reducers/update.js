import { createReducer } from '@reduxjs/toolkit';
import { start, error } from './helper';

import * as actions from '../actions';

const initialState = {
  pending: false,
  error: null
};

export default createReducer(initialState, {
  [actions.updateLibrary]: request => {
    start (request);
  },
  [actions.updateLibrarySuccess]: (request) => {
    request.pending = false;
  },
  [actions.updateLibraryFailure]: (request, action) => {
    error(request, action);
  }
});