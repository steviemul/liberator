import * as libraries from './actions';

export default {
  getLibraries: {
    url: '/libraries',
    actions: [libraries.getLibraries, libraries.getLibrariesSuccess, libraries.getLibrariesFailure]
  },
  getLibrary: {
    url: '/libraries/:id',
    actions: [libraries.getLibrary, libraries.getLibrarySuccess, libraries.getLibraryFailure]
  },
  addLibrary: {
    url: '/libraries',
    actions: [libraries.addLibrary, libraries.addLibrarySuccess, libraries.addLibraryFailure]
  },
  updateLibrary: {
    url: '/libraries/:id',
    actions: [libraries.updateLibrary, libraries.updateLibrarySuccess, libraries.updateLibraryFailure]
  },
  deleteLibrary: {
    url: '/libraries/:id',
    actions: [libraries.deleteLibrary, libraries.deleteLibrarySuccess, libraries.deleteLibraryFailure]
  }
}