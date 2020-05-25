export const ADD_CARD = 'ADD_CARD';
export const REORDER_CARD = 'REORDER_CARD';

export const addCard = (title, listId) => ({
  type: ADD_CARD,
  payload: {
    title,
    listId,
  },
});

export const reorderCard = (source, destination, draggableId) => ({
  type: REORDER_CARD,
  payload: {
    source,
    destination,
    draggableId,
  },
});
