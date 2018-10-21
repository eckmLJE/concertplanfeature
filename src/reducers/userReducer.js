const userReducer = (
  state = {
    loggedIn: false,
    currentUser: null,
    loadingAuthStatus: false,
    loadingUserStatus: false
  },
  action
) => {
  switch (action.type) {
    case "AUTHENTICATING_USER":
      return {
        ...state,
        loadingAuthStatus: true
      };
    case "USER_AUTHENTICATED":
      return {
        ...state,
        loggedIn: true,
        loadingAuthStatus: false
      };
    case "FETCHING_USER":
      return {
        ...state,
        loadingUserStatus: true
      };
    case "FETCHED_USER":
      return {
        ...state,
        loggedIn: true,
        loadingUserStatus: false,
        currentUser: {
          id: action.user.data.id,
          name: action.user.data.attributes.name,
          email: action.user.data.attributes.email,
          plans: action.user.data.attributes.plans
        }
      };
    case "LOGOUT_USER":
      return {
        ...state,
        loggedIn: false,
        currentUser: null
      };
    default:
      return state;
  }
};

export default userReducer;
