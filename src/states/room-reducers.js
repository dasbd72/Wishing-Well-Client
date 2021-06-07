const initialState = {
  isSidebarOpen: false,
};

export var room = (state = initialState, actions) => {
  switch (actions.type) {
    case "@ROOM/SIDEBAR_TOGGLE":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    default:
      return state;
  }
};
