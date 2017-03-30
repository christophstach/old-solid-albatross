import React from 'react';


const Note = (props) => (
  <div className="col-3 m-3">
    <div className="card">
      <div className="card-header">
        {props.isEditing ? (
          <input type="text" className="form-control" value={props.title}/>
        ) : (
          <h3 className="card-title mb-0">#{props.id} {props.title}</h3>
        )}
      </div>
      <div className="card-block">
        {props.isEditing ? (
          <textarea className="form-control p-0" value={props.text} onChange={() => {}} />
        ) : (
          <p>{props.text}</p>
        )}
      </div>
      <div className="card-footer">
        {props.isEditing ? (
          <button className="btn btn-success ml-auto">Save</button>
        ) : (
          <button className="btn btn-warning ml-auto">Edit</button>
        )}
      </div>

    </div>
  </div>
);

export default Note;

