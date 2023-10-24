import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { pressNum, setOperation, equal, clear } from '../actions';

const Calculator = ({ expression, pressNum, setOperation, equal, clear }) => (
  <div>
    {/* Display para a expressão */}
    <div id="result">{expression}</div>
    
    {/* Botões numéricos e de operação */}
    <div id="buttons">
      <Button onClick={() => pressNum(7)}>7</Button>
      <Button onClick={() => pressNum(8)}>8</Button>
      <Button onClick={() => pressNum(9)}>9</Button>
      <Button onClick={() => setOperation('/')}>/</Button>
      <Button onClick={() => pressNum(4)}>4</Button>
      <Button onClick={() => pressNum(5)}>5</Button>
      <Button onClick={() => pressNum(6)}>6</Button>
      <Button onClick={() => setOperation('*')}>*</Button>
      <Button onClick={() => pressNum(1)}>1</Button>
      <Button onClick={() => pressNum(2)}>2</Button>
      <Button onClick={() => pressNum(3)}>3</Button>
      <Button onClick={() => setOperation('-')}>-</Button>
      <Button onClick={() => pressNum(0)}>0</Button>
      <Button onClick={() => equal()}>=</Button>
      <Button onClick={() => setOperation('+')}>+</Button>
      <Button onClick={() => clear()}>C</Button>
    </div>
  </div>
);

// Mapeia o estado do Redux para as props do componente Calculator.
const mapStateToProps = (state) => ({
  // Certifique-se de que 'expression' aqui corresponda à estrutura do seu estado Redux.
  expression: state.calculator.expression,
});

// Conecta o componente ao Redux e exporta o componente conectado.
export default connect(mapStateToProps, { pressNum, setOperation, equal, clear })(Calculator);
