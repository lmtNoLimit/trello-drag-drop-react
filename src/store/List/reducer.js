import { ADD_LIST } from './actions';
import { ADD_CARD } from '../Card/actions';

let cardId = 6;

const initState = {
  lists: [
    {
      id: 'todo',
      title: 'To do',
      cards: [
        { id: 1, title: 'Buy some drink' },
        { id: 2, title: 'Buy meat' },
        { id: 3, title: 'Coding' },
      ],
    },
    {
      id: 'in_progress',
      title: 'In Progress',
      cards: [
        { id: 4, title: 'Coding Front End' },
        { id: 5, title: 'Coding Back End' },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [],
    },
  ],
};

export default function (state = initState, action) {
  switch (action.type) {
    case ADD_LIST: {
      const title = action.payload;
      const newList = {
        id: title.split(' ').join('_').toLowerCase(),
        title: title,
        cards: [],
      };

      return {
        ...state,
        lists: [...state.lists, newList],
      };
    }
    case ADD_CARD: {
      const { title, listId } = action.payload;
      const newCard = {
        id: cardId,
        title: title,
      };
      cardId = cardId + 1;
      const newList = state.lists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        }
        return list;
      });

      return {
        ...state,
        lists: newList,
      };
    }
    default:
      return state;
  }
}
