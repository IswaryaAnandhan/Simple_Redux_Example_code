export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
    case "RESET":
      return state = action.payload;

    default:
      return state;
  }
};
