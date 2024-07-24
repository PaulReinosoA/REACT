import { Box, Toolbar } from '@mui/material';
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { Navbar } from '../../journal/components/Navbar';
import { SideBar } from '../../journal/components/SideBar';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      sx={{ display: 'flex' }}
    >
      {/* Navbar */}
      {/* <Navbar drawerWidth={drawerWidth} /> */}
      {/* Sidebar */}
      {/* <SideBar drawerWidth={drawerWidth} /> */}

      <Navbar toggleSidebar={handleClickSidebar} drawerWidth={drawerWidth} />
      <SideBar
        toggleSidebar={handleClickSidebar}
        isActive={isActive}
        drawerWidth={drawerWidth}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.array.isRequired, // || PropTypes.element.isRequired,
};
