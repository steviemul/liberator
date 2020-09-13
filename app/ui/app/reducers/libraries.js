import { createReducer } from '@reduxjs/toolkit';
import { start, error } from './helper';

import * as actions from '../actions';

const initialState = {
  items: [],
  currentLibrary: {},
  pending: false,
  error: null
};

export default createReducer(initialState, {
  [actions.getLibraries]: state => {
    start (state);
  },
  [actions.getLibrariesSuccess]: (state, action) => {
    state.pending = false;
    state.items = action.payload;
  },
  [actions.getLibrariesFailure]: (state, action) => {
    error(state, action);
  },

  [actions.addLibrary]: state => {
    start (state);
  },
  [actions.addLibrarySuccess]: (state) => {
    state.pending = false;
  },
  [actions.addLibraryFailure]: (state, action) => {
    error(state, action);
  },

  [actions.getLibrary]: state => {
    start (state);
  },
  [actions.getLibrarySuccess]: (state, action) => {
    state.pending = false;
    state.currentLibrary = action.payload;
  },
  [actions.getLibraryFailure]: (state, action) => {
    error(state, action);
  },

  [actions.updateLibrary]: state => {
    start (state);
  },
  [actions.updateLibrarySuccess]: (state) => {
    state.pending = false;
  },
  [actions.updateLibraryFailure]: (state, action) => {
    error(state, action);
  },  

  [actions.deleteLibrary]: state => {
    start (state);
  },
  [actions.deleteLibrarySuccess]: (state, action) => {
    state.pending = false;
  },
  [actions.deleteLibraryFailure]: (state, action) => {
    error(state, action);
  }
});