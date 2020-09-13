import { createReducer } from '@reduxjs/toolkit';
import { start, error } from './helper';

import * as actions from '../actions';

const initialState = {
  currentLibrary: '',
  pending: false,
  error: null
};

export default createReducer(initialState, {
  [actions.getLibrary]: request => {
    start (request);
  },
  [actions.getLibrarySuccess]: (request, action) => {
    request.pending = false;
    request.currentLibrary = action.payload.id;
  },
  [actions.getLibraryFailure]: (request, action) => {
    error(request, action);
  }
});