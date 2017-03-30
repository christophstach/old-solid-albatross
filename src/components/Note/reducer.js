const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return [
        ...state,
        {
          id: 0,
          title: '',
          text: 'aa',
          ...action.payload
        }
      ];
    }
    case 'REMOVE_NOTE': {
      return state.filter((val) => action.payload);
    }
    default: {
      return state;
    }
  }
};

export default notes;