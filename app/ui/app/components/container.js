import React from 'react';
import LibraryList from './library-list';
import LibraryDetail from './library-detail';
import { api } from 'redux-rest-actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as selectors from '../selectors';

const Container = props => (
  <div className="container">
    <h1>Liberator</h1>
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <LibraryDetail
          {...props}
          addLibrary={api.addLibrary}
          updateLibrary={api.updateLibrary}
          />
        </Route>

        <Route path="/detail">
          <LibraryDetail
          {...props}
          mode='ADD'
          addLibrary={api.addLibrary}
          updateLibrary={api.updateLibrary}
          />
        </Route>

        <Route path="/">
            <LibraryList
            {...props}
            getLibraries={api.getLibraries}
            getLibrary={api.getLibrary}
            addLibrary={api.addLibrary}
            updateLibrary={api.updateLibrary}
            deleteLibrary={api.deleteLibrary}
          />
        </Route>
      </Switch>
    </Router>
    
  </div>
);

const mapStateToProps = state => ({
  libraries: selectors.selectLibraries(state),
  currentLibrary: selectors.currentLibrary(state)
});

export default connect(mapStateToProps)(Container);