import React from 'react';

const AddNoteButton = (props) => (
  <button
    type="button"
    className="btn btn-success"
  >
    {props.children}
  </button>
);

export default AddNoteButton;