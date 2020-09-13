import { createReducer } from '@reduxjs/toolkit';
import { start, error } from './helper';

import * as actions from '../actions';

const initialState = {
  libraries: [],
  currentLibrary: null,
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
  },

  [actions.addLibrary]: request => {
    start (request);
  },
  [actions.addLibrarySuccess]: (request) => {
    request.pending = false;
  },
  [actions.addLibraryFailure]: (request, action) => {
    error(request, action);
  },

  [actions.getLibrary]: request => {
    start (request);
  },
  [actions.getLibrarySuccess]: (request, action) => {
    request.pending = false;
    request.currentLibrary = action.payload.id;
  },
  [actions.getLibraryFailure]: (request, action) => {
    error(request, action);
  },

  [actions.updateLibrary]: request => {
    start (request);
  },
  [actions.updateLibrarySuccess]: (request) => {
    request.pending = false;
  },
  [actions.updateLibraryFailure]: (request, action) => {
    error(request, action);
  },  

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