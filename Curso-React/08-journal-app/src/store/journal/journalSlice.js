import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSave: '',
    notes: [],
    active: null,
    // active: {
    //   id:'',
    //   title:'',
    //   body:'',
    //   date:20241027,
    //   imageUrls:[], // https://algunaimagen.image1.jpg,https://algunaimagen.image1.jpg
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {},
    updateNotes: (state, action) => {},
    deleteNotesById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNotes,
  deleteNotesById,
} = journalSlice.actions;
