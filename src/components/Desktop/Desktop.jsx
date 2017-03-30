import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NoteActionCreators from './../../redux/actions/noteActionCreators';
import LargeButton from './LargeButton';
import Note from '../Note';


const Desktop = (props) => {
  let notes = props.notes.map((note) => (
    <Note
      key={note.id}
      id={note.id + 1}
      title={note.title}
      text={note.text}
      isEditing={true}
    />
  ));

  return (
    <div>
      <LargeButton type="success" onClick={props.addNote}>Add Note</LargeButton>
      <div>
        {notes}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(NoteActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);