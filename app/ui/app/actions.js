import {createAction} from '@reduxjs/toolkit';

export const getLibraries = createAction('GET_LIBRARIES', options => 
  options ? {payload: {params: {...options}}} : {}
);

export const getLibrariesSuccess = createAction('GET_LIBRARIES_SUCCESS');
export const getLibrariesFailure = createAction('GET_LIBRARIES_FAILURE');

export const getLibrary = createAction('GET_LIBRARY', id => ({payload: {id}}));
export const getLibrarySuccess = createAction('GET_LIBRARY_SUCCESS');
export const getLibraryFailure = createAction('GET_LIBRARY_FAILURE');

export const addLibrary = createAction('ADD_LIBRARY', library => ({
  payload: {data: {...library, completed: false}}
}))

export const addLibrarySuccess = createAction('ADD_LIBRARY_SUCCESS');
export const addLibraryFailure = createAction('ADD_LIBRARY_FAILURE');

export const updateLibrary = createAction('UPDATE_LIBRARY', (id, library) => ({
  payload: {id, data: library}
}));

export const updateLibrarySuccess = createAction('UPDATE_LIBRARY_SUCCESS');
export const updateLibraryFailure = createAction('UPDATE_LIBRARY_FAILURE');

export const deleteLibrary = createAction('DELETE_LIBRARY', id => ({payload: {id}}));
export const deleteLibrarySuccess = createAction('DELETE_LIBRARY_SUCCESS');
export const deleteLibraryFailure = createAction('DELETE_LIBRARY_FAILURE');