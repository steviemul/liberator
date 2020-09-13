import React, {useEffect} from 'react';

const libraries = [
  {name:'Lib 1'},
  {name:'Lib 2'}
];

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