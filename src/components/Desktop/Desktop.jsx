import React from 'react';
import { chunk } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Button';
import Note, { actions as noteActions } from '../Note';


const Desktop = (props) => {
  let notes = chunk(props.notes, 4).map((c, cKey) => (
    <div key={cKey} className="row m-4">
      {c.map((n, nKey) => (
        <div key={nKey} className="col-3">
          <Note
            className=""
            id={nKey + 1}
            title={n.title}
            text={n.text}
            isEditing={n.isEditing}
            onEdit={() => {
              props.changeTitle(n.title);
              props.changeText(n.text);
              props.editNote(n.id)
            }}
            onSave={() => props.changeNote(n.id, props.note)}
          />
        </div>
      ))}
    </div>
  ));

  return (
    <div>
      <Button type="success" onClick={() => props.addNote()}>Add Note</Button>
      <div className="container-fluid">
        {notes}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    note: state.note
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators(noteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);