import React, { Fragment } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from '@material-ui/core';

import CardItem from './CardItem';
import AddButton from './AddButton';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    marginRight: 10,
    marginBottom: 20,
    background: '#eee',
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  content: {
    padding: 7,
  },
  cardActionRoot: {
    display: 'block',
    marginLeft: 0,
  },
});

export default function ListBoard(props) {
  const classes = useStyles();
  const { id, title, data } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton size='small' aria-label='settings'>
            <MoreHorizIcon />
          </IconButton>
        }
        title={title}
        classes={{ title: classes.title }}
      />
      <Droppable droppableId={id}>
        {(provided) => (
          <Fragment>
            <CardContent
              classes={{ root: classes.content }}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.map((item, index) => (
                <CardItem
                  key={index}
                  id={item.id}
                  title={item.title}
                  index={index}
                />
              ))}

              {provided.placeholder}
            </CardContent>
            <CardActions classes={{ root: classes.cardActionRoot }}>
              <AddButton listId={id} card />
            </CardActions>
          </Fragment>
        )}
      </Droppable>
    </Card>
  );
}
