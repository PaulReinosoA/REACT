import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Navbar } from '../../journal/components/Navbar';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    {/* Navbar */}
    <Navbar drawerWidth={drawerWidth} />
    {/* Sidebar */}
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* Toolbar */}
      {children}
    </Box>
  </Box>
);

JournalLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
