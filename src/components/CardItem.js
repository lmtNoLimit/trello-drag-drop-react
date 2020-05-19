import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  },
  content: {
    padding: 10,
    paddingBottom: 10,
  },
});

export default function CardItem(props) {
  const classes = useStyles();
  const { id, title, index } = props;

  return (
    <Draggable draggableId={id + ''} index={index}>
      {(provided) => (
        <Card
          className={classes.root}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          <CardContent classes={{ root: classes.content }}>
            <Typography className={classes.title} color='textPrimary'>
              {title}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}
