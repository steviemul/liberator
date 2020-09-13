import React, {useEffect} from 'react';

const LibraryList = props => {
  const {getLibraries, libraries} = props;

  useEffect(() => {
    getLibraries();
  }, []);

  return (
    <div>
      {libraries.map((library) => (
        <div>{library.name}</div>
      ))}
    </div>
  );
};

export default LibraryList;