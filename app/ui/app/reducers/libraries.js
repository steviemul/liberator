import { createReducer } from '@reduxjs/toolkit';
import { start, error } from './helper';

import * as actions from '../actions';

const LIBRARY_STUCTURE = {
  name: '',
  downloadCount: 0,
  author: '',
  notes: '',
  url: '',
  repository: '',
  version: '' 
};

const initialState = {
  items: [],
  currentLibrary: LIBRARY_STUCTURE,
  pending: false,
  error: null
};

export default createReducer(initialState, {
  
  [actions.apiCallSuccess]: state => {
    state.pending = false;
  },
  [actions.apiCallFailure]: (state, action) => {
    error(state, action);
  },

  [actions.getLibraries]: state => {
    start (state);
  },
  [actions.getLibrariesSuccess]: (state, action) => {
    state.pending = false;
    state.items = action.payload;
  },

  [actions.addLibrary]: state => {
    start (state);
  },

  [actions.getLibrary]: state => {
    start (state);
  },
  [actions.getLibrarySuccess]: (state, action) => {
    state.pending = false;
    state.currentLibrary = action.payload;
  },

  [actions.updateLibrary]: state => {
    start (state);
  },

  [actions.deleteLibrary]: state => {
    start (state);
  },
  
  [actions.clearCurrentLibrary]: state => {
    state.currentLibrary = LIBRARY_STUCTURE;
  }
});