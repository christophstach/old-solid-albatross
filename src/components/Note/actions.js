// @flow

import { v4 } from 'node-uuid';

const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';
const CHANGE_NOTE = 'CHANGE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';
const CHANGE_TITLE = 'CHANGE_TITLE';
const CHANGE_TEXT = 'CHANGE_TEXT';

export const addNote = (note: { title: string, text: string }) => ({
  type: ADD_NOTE,
  payload: {
    ...note,
    isEditing: false,
    id: v4()
  }
});

export const removeNote = (id: string) => ({
  type: REMOVE_NOTE,
  payload: id
});

export const changeNote = (id: number, note: { title: string, text: string, isEditing: boolean }) => ({
  type: CHANGE_NOTE,
  payload: {
    ...note,
    id
  }
});

export const editNote = (id: string) => ({
  type: EDIT_NOTE,
  payload: id
});

export const changeTitle = (title: string) => ({
  type: CHANGE_TITLE,
  payload: title
});

export const changeText = (text: string) => ({
  type: CHANGE_TEXT,
  payload: text
});