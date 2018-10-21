const navReducer = (
  state = {
    activeNav: "",
    modalActive: true
  },
  action
) => {
  switch (action.type) {
    case "SET_ACTIVE_NAV":
      return {
        ...state,
        activeNav: action.nav
      };
    case "DISABLE_MODAL":
      return {
        ...state,
        modalActive: false
      };
    default:
      return state;
  }
};

export default navReducer;
