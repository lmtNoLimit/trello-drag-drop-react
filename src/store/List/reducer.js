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
  loading: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
