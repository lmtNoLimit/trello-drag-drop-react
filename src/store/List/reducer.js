import { ADD_LIST } from './actions';
import { ADD_CARD, REORDER_CARD } from '../Card/actions';

let cardId = 6;

const initState = {
  lists: [
    {
      id: 'list-todo',
      title: 'To do',
      cards: [
        { id: 'card-1', title: 'Buy some drink' },
        { id: 'card-2', title: 'Buy meat' },
        { id: 'card-3', title: 'Coding' },
      ],
    },
    {
      id: 'list-in_progress',
      title: 'In Progress',
      cards: [
        { id: 'card-4', title: 'Coding Front End' },
        { id: 'card-5', title: 'Coding Back End' },
      ],
    },
    {
      id: 'list-done',
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
        id: `list-${title.split(' ').join('_').toLowerCase()}`,
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
        id: `card-${cardId}`,
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
    case REORDER_CARD:
      const { source, destination, draggableId } = action.payload;
      // if in the same list
      if (source.droppableId === destination.droppableId) {
        let list = state.lists.find((list) => {
          return list.id === source.droppableId;
        });
        let selectedCard = list.cards.splice(source.index, 1);
        list.cards.splice(destination.index, 0, ...selectedCard);
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
