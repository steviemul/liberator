import React from 'react';
import { useHistory } from 'react-router-dom'

const LibraryActions = props => {

  const {libraryId, deleteLibrary, getLibraries, getLibrary} = props;

  const history = useHistory();

  const onEdit = () => {
    getLibrary(libraryId).then(() => {
      history.push(`/detail/${libraryId}`)
    });
  };

  const onDelete = () => {    
    deleteLibrary(libraryId).then(() => {
      getLibraries();
    });
  };

  return (
    <div className="actions">
      <a onClick={onEdit.bind()}><i className="small material-icons text-black">edit</i></a>
      <a onClick={onDelete.bind()}><i className="small material-icons text-black">delete</i></a>
    </div>
  );
};

export default LibraryActions;