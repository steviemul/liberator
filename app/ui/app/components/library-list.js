import React, {useEffect} from 'react';
import LibraryActions from './library-actions';

const LibraryList = props => {
  const {getLibraries, libraries} = props;

  useEffect(() => {
    getLibraries();
  }, []);

  return (
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
  );
};

export default LibraryList;