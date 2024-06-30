import { Box, Toolbar } from '@mui/material';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Navbar } from '../../journal/components/Navbar';
import { SideBar } from '../../journal/components/SideBar';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    {/* Navbar */}
    <Navbar drawerWidth={drawerWidth} />
    {/* Sidebar */}
    <SideBar drawerWidth={drawerWidth} />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* Toolbar */}
      <Toolbar />
      {children}
    </Box>
  </Box>
);

JournalLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
