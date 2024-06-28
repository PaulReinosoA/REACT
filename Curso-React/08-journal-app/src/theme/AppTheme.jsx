import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { PropTypes } from 'prop-types';
import React from 'react';
import { purpleTheme } from './purpleTheme';

export const AppTheme = ({ children }) => (
  <ThemeProvider theme={purpleTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </ThemeProvider>
);

AppTheme.propTypes = {
  children: PropTypes.element.isRequired,
};
