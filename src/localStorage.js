const LOCAL_STORAGE_ITEM_KEY = 'old-solid-albatross-state';

export const saveState = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_ITEM_KEY, serializeState);
  } catch (e) {

  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_ITEM_KEY);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};