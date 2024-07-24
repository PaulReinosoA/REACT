import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import {
  BarChartOutlined,
  LogoutOutlined,
  MenuOutlined,
  NoteAddOutlined,
  TableChartOutlined,
} from '@mui/icons-material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const Navbar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // obtenemos la navegacion
  const onLogout = () => {
    // console.log('onLogout');
    dispatch(startLogout());
  };
  const onLoadChar = () => {
    navigate('/chart');
  };
  const onLoadTable = () => {
    navigate('/dataGrid');
  };
  const onLoadNote = () => {
    navigate('/');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            {' '}
            JournalApp{' '}
          </Typography>

          <IconButton color="inherit" onClick={onLoadTable}>
            <TableChartOutlined />
          </IconButton>

          <IconButton color="inherit" onClick={onLoadChar}>
            <BarChartOutlined />
          </IconButton>

          <IconButton color="inherit" onClick={onLoadNote}>
            <NoteAddOutlined />
          </IconButton>

          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};
