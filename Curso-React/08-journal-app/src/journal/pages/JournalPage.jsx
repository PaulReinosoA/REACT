import { Typography } from '@mui/material';
import React from 'react';
import { JournalLayout } from '../../auth/layout/JournalLayout';
import { NothingSelectedView } from '../view/NothingSelectedView';
import { NoteView } from '../view/NoteView';

export const JournalPage = () => (
  <>
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  </>
);
