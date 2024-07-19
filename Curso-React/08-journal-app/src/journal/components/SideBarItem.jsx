import { TurnedInNot } from '@mui/icons-material';
import { PropTypes } from 'prop-types';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const SideBarItem = ({ title, body, id, date, imageURL }) => {
  const dispathc = useDispatch();

  const newTitle = useMemo(
    () => (title.length >= 17 ? `${title.substring(0, 17)}...` : title),
    [title],
  );

  const onItemListSelect = () => {
    dispathc(setActiveNote({ title, body, id, date, imageURL }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton id={id} onClick={onItemListSelect}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
          <ListItemText
            secondary={`Fecha: ${new Date(date).toLocaleDateString()}`}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

SideBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.array.isRequired,
};
