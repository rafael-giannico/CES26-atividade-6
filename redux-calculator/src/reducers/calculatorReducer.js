import { PRESS_NUM, SET_OPERATION, EQUAL, CLEAR } from "../actions";

// O estado inicial da calculadora.
const initialState = {
  expression: '', // A expressão completa a ser exibida, incluindo números e operadores.
  previousValue: null, // O último valor calculado ou inserido, para uso em operações contínuas.
  operation: null, // A operação atual a ser aplicada.
};

// O reducer que atualiza o estado da calculadora com base nas ações recebidas.
export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESS_NUM:
      // Adiciona o número pressionado à expressão atual.
      return {
        ...state,
        expression: state.expression + action.payload.toString(),
      };
    case SET_OPERATION:
      // Adiciona o operador à expressão e define a operação atual.
      // Se um operador já estiver definido, ele é substituído.
      const lastChar = state.expression.slice(-1);
      let newExpression = state.expression;
      if (['+', '-', '*', '/'].includes(lastChar)) {
        newExpression = state.expression.slice(0, -1) + action.payload;
      } else {
        newExpression = state.expression + ' ' + action.payload + ' ';
      }

      return {
        ...state,
        expression: newExpression,
        operation: action.payload,
      };
    case EQUAL:
      // Calcula o resultado com base na expressão, atualiza a expressão com este resultado.
      const result = eval(state.expression).toString();
      return {
        ...state,
        expression: result,
        previousValue: result,
        operation: null,
      };
    case CLEAR:
      // Limpa o estado, revertendo para o estado inicial.
      return initialState;
    default:
      return state;
  }
};
