import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = () => {
  return {
    libraries: [
      {name: 'test1'},
      {name: 'test2'}
    ]
  }
};

const LibraryList = ({libraries}) => (
  <div>
    {libraries.map((library) => (
      <div>{library.name}</div>
    ))}
  </div>
);

export default connect(mapStateToProps)(LibraryList);