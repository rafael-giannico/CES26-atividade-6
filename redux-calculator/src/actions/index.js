// Tipos de ações
export const PRESS_NUM = "PRESS_NUM";
export const SET_OPERATION = "SET_OPERATION";
export const EQUAL = "EQUAL";
export const CLEAR = "CLEAR";

// Criadores de ações
export const pressNum = (num) => ({
  type: PRESS_NUM,
  payload: num,
});

export const setOperation = (op) => ({
  type: SET_OPERATION,
  payload: op,
});

export const equal = () => ({
  type: EQUAL,
});

export const clear = () => ({
  type: CLEAR,
});