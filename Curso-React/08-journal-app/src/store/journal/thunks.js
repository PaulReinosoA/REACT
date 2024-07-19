import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from './journalSlice';
import { loadNotes } from '../../journal/helpers';

export const startNewNote = () => async (dispatch, getState) => {
  dispatch(savingNewNote());
  const { uid } = getState().auth;

  const newNote = {
    title: '',
    body: '',
    date: new Date().getTime(),
  };

  const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
  await setDoc(newDoc, newNote);
  newNote.id = newDoc.id;

  dispatch(addNewEmptyNote(newNote));
  dispatch(setActiveNote(newNote));
};

export const startLoadingNote = () => async (dispatch, getState) => {
  const { uid } = getState().auth;
  const notes = await loadNotes(uid);
  dispatch(setNotes(notes));
};

export const startSavingNote = () => async (dispatch, getState) => {
  dispatch(setSaving());

  const { uid } = getState().auth;
  const { active: note } = getState().journal;

  const noteToFireStore = { ...note };
  delete noteToFireStore.id;
  const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
  await setDoc(docRef, noteToFireStore, { merge: true });
  dispatch(updateNote(note));
};
