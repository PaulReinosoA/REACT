import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ isActive, toggleSidebar, drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component="nav"
      // sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        onClick={toggleSidebar}
        variant="temporary" // temporary/permanent
        open={isActive}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {notes.map((note) => (
            <SideBarItem
              key={note.id}
              title={note.title}
              body={note.body}
              date={note.date}
              id={note.id}
              imageURL={note.imageURL === undefined ? [] : note.imageURL}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};
