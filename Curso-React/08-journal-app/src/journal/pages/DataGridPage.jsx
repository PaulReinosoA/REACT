import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../../auth/layout/JournalLayout';
import { DataGridView } from '../view/DataGridView';

export const DataGridPage = () => (
  <JournalLayout>
    {/* <NothingSelectedView /> */}
    <DataGridView /> 
  </JournalLayout>
);
