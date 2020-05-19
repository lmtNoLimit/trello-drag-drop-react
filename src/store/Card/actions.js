export const ADD_CARD = 'ADD_CARD';

export const addCard = (title, listId) => ({
  type: ADD_CARD,
  payload: {
    title,
    listId,
  },
});
