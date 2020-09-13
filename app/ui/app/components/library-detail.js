import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'

const LibraryDetail = ({currentLibrary, updateLibrary}) => {
  
  const [state, setState] = useState(currentLibrary);

  const onUpdate = () => {
    updateLibrary(state.libId, state).then(() => {
      console.log("success");
    })
  };

  const handleChange = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  };

  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 m6">
              <input placeholder="Name" id="name" type="text" 
                className="validate" 
                value={state.name} 
                onChange={handleChange}></input>

              <label htmlFor="name" className="active">Name</label>
            </div>
            <div className="input-field col s12 m6">
              <input placeholder="Author" id="author" type="text" className="validate" 
                value={state.author}
                onChange={handleChange}></input>
              <label htmlFor="author" className="active">Author</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m6">
              <input placeholder="Download Count" id="downloadCount" type="text" className="validate"
                value={state.downloadCount}
                onChange={handleChange}></input>
              <label htmlFor="downloadCount" className="active">Download Count</label>
            </div>
            <div className="input-field col s12 m6">
              <input placeholder="Version" id="version" type="text" className="validate" 
                value={state.version}
                onChange={handleChange}></input>
              <label htmlFor="version" className="active">Version</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m6">
              <select id="repository" value={currentLibrary.repository}
                onChange={handleChange}>
                <option value="" disabled>Choose your option</option>
                <option value="NPM">NPM</option>
                <option value="Maven">Maven</option>
                <option value="Nugat">Nugat</option>
                <option value="PyPI">PyPI</option>
                <option value="Ruby">RubyGems</option>
              </select>
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