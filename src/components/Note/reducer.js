const note = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return {
        id: 0,
        title: '',
        text: 'aa',
        ...action.payload
      }
    }
    case 'CHANGE_NOTE': {
      if (state.id !== action.payload.id) {
        return state;
      }

      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state;
    }
  }
};

const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return [
        ...state,
        note(undefined, action)
      ];
    }
    case 'CHANGE_NOTE': {
      return state.map(n => note(n, action));
    }
    case 'REMOVE_NOTE': {
      return state.filter((val) => action.payload === val.id);
    }
    default: {
      return state;
    }
  }
};

export default notes;