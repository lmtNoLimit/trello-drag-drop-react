import React, { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { Box, Typography } from '@material-ui/core';

import { reorderCard } from 'store/Card/actions';

import ListBoard from 'components/ListBoard';
import AddButton from 'components/AddButton';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const listState = useSelector((state) => state.listReducer, shallowEqual);
  const { lists } = listState;

  const onDragEnd = useCallback(
    (result) => {
      const { source, destination, draggableId } = result;
      if (!destination) {
        return;
      }
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) {
        return;
      }
      console.log(result);

      dispatch(reorderCard(source, destination, draggableId));
    },
    [dispatch]
  );

  return (
    <div className='App'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Typography variant='h4' gutterBottom>
          Working Board
        </Typography>
        <Box
          style={{
            display: 'flex',
            overflowX: 'auto',
          }}
        >
          {lists.map((list) => (
            <ListBoard
              key={list.id}
              id={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <Box>
            <AddButton list />
          </Box>
        </Box>
      </DragDropContext>
    </div>
  );
}

export default App;
