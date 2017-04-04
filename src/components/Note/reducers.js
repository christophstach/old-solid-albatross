export const note = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return {
        id: 0,
        title: '',
        text: '',
        ...action.payload
      }
    }
    case 'EDIT_NOTE': {
      if (state.id !== action.payload) {
        if (state.isEditing) {
          return {
            ...state,
            isEditing: false
          }
        }

        return state;
      }

      return {
        ...state,
        isEditing: true
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
    case 'CHANGE_TITLE': {
      return {
        ...state,
        title: action.payload
      };
    }
    case 'CHANGE_TEXT': {
      return {
        ...state,
        text: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return [
        ...state,
        note(undefined, action)
      ];
    }
    case 'EDIT_NOTE': {
      return state.map(n => note(n, action));
    }
    case 'CHANGE_NOTE': {
      return state.map(n => note(n, action));
    }
    case 'REMOVE_NOTE': {
      return state.filter((val) => action.payload !== val.id);
    }
    default: {
      return state;
    }
  }
};