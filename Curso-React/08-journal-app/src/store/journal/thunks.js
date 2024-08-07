/* eslint-disable no-restricted-syntax */
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import {
  addNewEmptyNote,
  setActiveNote,
  deleteNoteById,
  savingNewNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from './journalSlice';
import { loadNotes } from '../../journal/helpers/loadNotes';
import { fileUpload } from '../../journal/helpers/fileUpload';

export const startNewNote = () => async (dispatch, getState) => {
  dispatch(savingNewNote());

  const { uid } = getState().auth;

  const newNote = {
    title: '',
    body: '',
    imageURL: [],
    date: new Date().getTime(),
  };

  const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
  await setDoc(newDoc, newNote);

  newNote.id = newDoc.id;

  //! dispatch
  dispatch(addNewEmptyNote(newNote));
  dispatch(setActiveNote(newNote));
};

export const startLoadingNotes = () => async (dispatch, getState) => {
  const { uid } = getState().auth;
  if (!uid) throw new Error('El UID del usuario no existe');

  const notes = await loadNotes(uid);
  dispatch(setNotes(notes));
};

export const startSaveNote = () => async (dispatch, getState) => {
  dispatch(setSaving());

  const { uid } = getState().auth;
  const { active: note } = getState().journal;

  const noteToFireStore = { ...note };
  delete noteToFireStore.id;

  const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
  await setDoc(docRef, noteToFireStore, { merge: true });

  dispatch(updateNote(note));
};

export const startUploadingFiles =
  (files = []) =>
  async (dispatch) => {
    dispatch(setSaving());

    // await fileUpload( files[0] );
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);
    // console.log(photosUrls);
    dispatch(setPhotosToActiveNote(photosUrls));
  };

// Install Cloudinary --> npm i @cloudinary/url-gen @cloudinary/react
// https://console.cloudinary.com/pm/c-c78086941ff11976e3b433c843f077/getting-started

export const startDeletingNote = () => async (dispatch, getState) => {
  const { uid } = getState().auth;
  const { active: note } = getState().journal;
  // elimino de firebase
  const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
  await deleteDoc(docRef);
  // elimino de mi store(data local)
  dispatch(deleteNoteById(note.id));
};
