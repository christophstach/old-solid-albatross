import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as noteActions } from './';


const Note = (props) => (
  <div className="card">

      <div className="card-header note-title p-0">
        <input
          type="text"
          className="form-control p-0"
          value={props.isEditing ? props.note.title : props.title}
          onFocus={() => props.onEdit()}
          onBlur={() => props.isEditing && props.onSave()}
          onChange={(e) => props.isEditing && props.changeTitle(e.target.value)}
        />
      </div>
      <div className="note-text">
          <textarea
            className="form-control p-0"
            value={props.isEditing ? props.note.text : props.text}
            onFocus={() => props.onEdit()}
            onBlur={() => props.isEditing && props.onSave()}
            onChange={(e) => props.isEditing && props.changeText(e.target.value)}
          />
      </div>
      <div className="card-footer">

      </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    note: state.note
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(noteActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Note);

