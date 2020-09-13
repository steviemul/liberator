import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'

const MODE_ADD = 'ADD';
const MODE_UPDATE = 'UPDATE';

const LibraryDetail = ({currentLibrary, updateLibrary, addLibrary, mode = MODE_UPDATE}) => {
  
  const [state, setState] = useState(currentLibrary);

  const onUpdate = () => {
    switch (mode){
      case MODE_UPDATE:
        updateLibrary(state.libId, state).then(() => {
          console.log("success");
        });

        break;
      case MODE_ADD:
        addLibrary(state).then(() => {
          console.log("success");
        })

        break;
    }
  };

  const handleChange = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  };

  useEffect(() => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  });

  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 m6">
              <input placeholder="Name" required id="name" type="text" 
                className="validate" 
                value={state.name} 
                onChange={handleChange}></input>

              <label htmlFor="name" className="active">Name</label>
            </div>
            <div className="input-field col s12 m6">
              <input placeholder="Author" required id="author" type="text" className="validate" 
                value={state.author}
                onChange={handleChange}></input>
              <label htmlFor="author" className="active">Author</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m6">
              <input placeholder="Download Count" required id="downloadCount" type="number" className="validate"
                value={state.downloadCount}
                onChange={handleChange}></input>
              <label htmlFor="downloadCount" className="active">Download Count</label>
            </div>
            <div className="input-field col s12 m6">
              <input placeholder="Version" required id="version" type="text" className="validate" 
                value={state.version}
                onChange={handleChange}></input>
              <label htmlFor="version" className="active">Version</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m6">
              <div className="select-wrapper">
                <select id="repository" required value={currentLibrary.repository} onChange={handleChange}>
                  <option value="NPM">NPM</option>
                  <option value="Maven">Maven</option>
                  <option value="Nugat">Nugat</option>
                  <option value="PyPI">PyPI</option>
                  <option value="Ruby">RubyGems</option>
                </select>
              </div>
              <label htmlFor="repository" className="active">Repository Type</label>
            </div>
            <div className="input-field col s12 m6">
              <input placeholder="URL" id="url" type="text" className="validate" 
                value={state.url}
                onChange={handleChange}></input>
              <label htmlFor="url" className="active">URL</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea id="notes" value={state.notes || ''} className="materialize-textarea"
                onChange={handleChange}></textarea>
              <label htmlFor="notes" className="active">Notes</label>
            </div>
          </div>

        </form>
      </div>
      <div className="row">
        <div className="col s12 m6">
          <NavLink 
            className="waves-effect waves-light btn"
            exact
            to='/'
          ><i className="material-icons left">keyboard_return</i>Back to List</NavLink>
        </div>
        <div className="col s12 m6">
          <a onClick={onUpdate.bind()} className="waves-effect waves-light btn"><i className="material-icons left">save</i>Save</a>
        </div>
        
      </div>
      
    </div>
  );
};

export default LibraryDetail;