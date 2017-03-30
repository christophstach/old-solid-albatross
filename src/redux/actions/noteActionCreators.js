// @flow

const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';

let noteId = 0;
export function addNote(note: {title: string, text: string}) {
  return {
    type: ADD_NOTE,
    payload: {
      ...note,
      id: noteId++
    }
  }
}

export function removeNote(id: number) {
  return {
    type: REMOVE_NOTE,
    payload: id
  }
}