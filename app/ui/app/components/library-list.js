import React, {useEffect} from 'react';
import LibraryActions from './library-actions';
import { useStore } from 'react-redux';
import { NavLink } from 'react-router-dom'

const LibraryList = props => {
  const {getLibraries, libraries} = props;
  const store = useStore();
  
  const clearCurrentLibrary = () => {
    store.dispatch({
      type: 'CLEAR_CURRENT_LIBRARY'
    });
  }
  useEffect(() => {
    getLibraries();
  }, []);

  return (
    <div className="row">
      <div className="col s12">
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Repository Type</th>
              <th>Download Count</th>
              <th>Author</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {libraries.map((library) => (
            <tr key={library.libId}>
              <td><a href={library.url} target="blank">{library.name}</a></td>
              <td>{library.repository}</td>
              <td>{library.downloadCount}</td>
              <td>{library.author}</td>
              <td>
                <LibraryActions 
                  {...props}
                  libraryId={library.libId}
                />
              </td>
            </tr>
          ))}  
          </tbody>
        </table>
      </div>
      <div className="col s12">
        <NavLink 
          className="waves-effect waves-light btn"
          exact
          to='/detail'
          onClick={clearCurrentLibrary}
        ><i className="material-icons left">add</i>Add New Library</NavLink>
      </div>
    </div>
    
  );
};

export default LibraryList;