const loggedReducer = (state = true, action) => {
  switch (action.type) {
    case "SIGNIN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
