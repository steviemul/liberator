import React from 'react';
import LibraryList from './library-list';
import { api } from 'redux-rest-actions';
import { connect } from 'react-redux';
import * as selectors from '../selectors';

const Container = props => (
  <div class="container">
    <h1>Librerator</h1>
    <LibraryList
      {...props}
      getLibraries={api.getLibraries}
      getLibrary={api.getLibrary}
      addLibrary={api.addLibrary}
      updateLibrary={api.updateLibrary}
      deleteLibrary={api.deleteLibrary}
    />
  </div>
);

const mapStateToProps = state => ({
  libraries: selectors.selectLibraries(state)
});

export default connect(mapStateToProps)(Container);