import { createReducer } from '@reduxjs/toolkit';
import { start, error } from './helper';

import * as actions from '../actions';

const initialState = {
  pending: false,
  error: null
};

export default createReducer(initialState, {
  [actions.addLibrary]: request => {
    start (request);
  },
  [actions.addLibrarySuccess]: (request) => {
    request.pending = false;
  },
  [actions.addLibraryFailure]: (request, action) => {
    error(request, action);
  }
});