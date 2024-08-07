import React from 'react';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { JournalLayout } from '../../auth/layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../view';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <>
      <JournalLayout>
        {/* <NothingSelectedView /> */}
        {/* <NoteView /> */}
        {active === null ? <NothingSelectedView /> : <NoteView />}
        <IconButton
          disabled={isSaving}
          onClick={onClickNewNote}
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
};
