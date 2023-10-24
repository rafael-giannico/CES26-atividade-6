import { PRESS_NUM, SET_OPERATION, EQUAL, CLEAR } from "../actions";

const initialState = {
  displayValue: "0",
  operator: null,
  previousValue: null,
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESS_NUM:
      return {
        ...state,
        displayValue: state.displayValue === "0" ? action.payload.toString() : state.displayValue + action.payload,
      };
    case SET_OPERATION:
      return {
        ...state,
        previousValue: state.displayValue,
        displayValue: "0",
        operator: action.payload,
      };
    case EQUAL:
      const current = parseFloat(state.displayValue);
      const previous = parseFloat(state.previousValue);
      const result = eval(`${previous} ${state.operator} ${current}`);
      return {
        ...state,
        displayValue: result.toString(),
        operator: null,
        previousValue: null,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
