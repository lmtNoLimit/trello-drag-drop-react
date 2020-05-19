import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import {
  IconButton,
  Button,
  TextField,
  Card,
  CardContent,
  Box,
} from '@material-ui/core';
import { addList } from 'store/List/actions';
import { addCard } from 'store/Card/actions';

const useStyles = makeStyles({
  text: {
    textTransform: 'none',
  },
  card: {
    minWidth: 250,
    marginBottom: 10,
  },
  bgSuccess: {
    color: '#fff',
    background: '#5aac44',
    '&:hover': {
      background: '#61bd4f',
    },
  },
  fullWidth: {
    width: '100%',
  },
});

const AddButton = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isVisible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleAdd = () => {
    if (text) {
      if (props.card) {
        dispatch(addCard(text, props.listId));
      }
      if (props.list) {
        dispatch(addList(text));
      }
    }
    setText('');
    setVisible(false);
  };

  const renderForm = () => {
    const label = props.card
      ? 'Enter a title for this card'
      : 'Enter a title for this list';
    return (
      <TextField
        multiline
        label={label}
        classes={{ root: classes.fullWidth }}
        autoFocus
        onChange={handleChange}
        value={text}
      />
    );
  };

  const handleOpenForm = () => setVisible(true);
  const handleCloseForm = () => {
    setVisible(false);
    setText('');
  };

  return (
    <Fragment>
      {isVisible ? (
        <Fragment>
          <Card classes={{ root: classes.card }}>
            <CardContent>{renderForm()}</CardContent>
          </Card>
          <Box style={{ marginLeft: 0 }}>
            <Button
              variant='contained'
              size='small'
              classes={{ root: classes.bgSuccess, label: classes.text }}
              onClick={handleAdd}
            >
              {props.card ? 'Add Card' : 'Add List'}
            </Button>
            <IconButton size='small' onClick={handleCloseForm}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Fragment>
      ) : (
        <Button
          startIcon={<AddIcon />}
          classes={{ label: classes.text }}
          onClick={handleOpenForm}
        >
          {props.card && 'Add another card'}
          {props.list && 'Add another list'}
        </Button>
      )}
    </Fragment>
  );
};

export default AddButton;
