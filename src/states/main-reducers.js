const initialState = {
  isOpen: false,
};

export const main = (state = initialState, action) => {
  switch (action.type) {
    case "@MAIN/TOGGLE_OPEN":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};
