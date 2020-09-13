import { createReducer } from '@reduxjs/toolkit';
import { start, error } from './helper';

import * as actions from '../actions';

const initialState = {
  libraries: [],
  pending: false,
  error: null
};

export default createReducer(initialState, {
  [actions.getLibraries]: request => {
    start (request);
  },
  [actions.getLibrariesSuccess]: (request, action) => {
    request.pending = false;
    request.libraries = action.payload;
  },
  [actions.getLibrariesFailure]: (request, action) => {
    error(request, action);
  }
});