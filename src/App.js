import React, { useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Typography from '@material-ui/core/Typography';

import ListBoard from 'components/ListBoard';

import './App.css';
import AddButton from 'components/AddButton';

function App() {
  const listState = useSelector((state) => state.listReducer, shallowEqual);
  const { lists } = listState;
  console.log(lists);

  const onDragEnd = useCallback((result) => {}, []);

  return (
    <div className='App'>
      <Typography variant='h4' gutterBottom>
        Working Board
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
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
              data={list.cards}
            />
          ))}
          <AddButton list />
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
