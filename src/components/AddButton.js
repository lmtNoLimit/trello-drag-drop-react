import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import {
  IconButton,
  Button,
  TextField,
  Card,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    textTransform: 'none',
  },
  card: {
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
  const classes = useStyles();
  const [isVisible, setVisible] = useState(false);

  const renderForm = () => {
    return props.card ? (
      <TextField
        multiline
        label='Enter a title for this card'
        classes={{ root: classes.fullWidth }}
        autoFocus
        onBlur={handleCloseForm}
      />
    ) : props.list ? (
      <TextField
        multiline
        label='Enter a title for this list'
        classes={{ root: classes.fullWidth }}
        autoFocus
        onBlur={handleCloseForm}
      />
    ) : null;
  };

  const handleOpenForm = () => setVisible(true);
  const handleCloseForm = () => setVisible(false);

  return (
    <Fragment>
      {isVisible ? (
        <Fragment>
          <Card classes={{ root: classes.card }}>
            <CardContent>{renderForm()}</CardContent>
          </Card>
          <Button
            variant='contained'
            size='small'
            classes={{ root: classes.bgSuccess }}
          >
            Add
          </Button>
          <IconButton size='small' onClick={handleCloseForm}>
            <CloseIcon />
          </IconButton>
        </Fragment>
      ) : (
        <Button
          startIcon={<AddIcon />}
          classes={{ text: classes.text }}
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
